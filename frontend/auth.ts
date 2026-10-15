import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    accessToken?: string;
  }

  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),

    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );

        if (!response.ok) return null;

        const result = await response.json();

        return {
          id: String(result.data.id),
          name: result.data.name,
          email: result.data.email,
          image: result.data.image,
          accessToken: result.accessToken,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }

      if (account?.provider === "google" && account.id_token) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idToken: account.id_token,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Não foi possível autenticar no backend");
        }

        const result = await response.json();

        token.accessToken = result.accessToken;
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;

      return session;
    },
  },
});
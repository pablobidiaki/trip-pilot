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
    name?: string | null;
    image?: string | null;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },

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

        if (!result.data?.id || !result.accessToken) return null


        return {
          id: String(result.data.id),
          name: result.data.name,
          email: result.data.email,
          image: result.data.image ?? null,
          accessToken: result.accessToken,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      if (user) {
        token.name = user.name;
        token.picture = user.image;
      }

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

        if (!response.ok)throw new Error("Falha na autenticação do backend");
      
        const result = await response.json();

        if (!result.accessToken) throw new Error("Backend não retornou accessToken");
        

        token.accessToken = result.accessToken;

        if (result.data) {
          token.name = result.data.name ?? token.name;
          token.picture = result.data.image ?? token.picture;
        }
      }

      if (trigger === "update" && session?.user) {
        token.name = session.user.name ?? token.name;
        token.picture = session.user.image ?? token.picture;
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.name = token.name ?? null;
      session.user.image = token.picture ?? null;

      return session;
    },
  },
});
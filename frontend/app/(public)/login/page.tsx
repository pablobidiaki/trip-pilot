"use client"

import { Eye, LockKeyhole, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react"

export default function Login() {
  const [viewPassword, setViewPassword] = useState(false)

  return (
    <div className="grid grid-cols-2">
      <Image src={"/imgs/login/image.png"}
        alt="Traveler image"
        width={1280}
        height={1080}
        className="h-screen object-cover"
        loading="eager"
      />
      <div>
        <p className="text-end p-5">Não tem conta? <Link href={"/register"} className="text-link-color ">Criar conta</Link></p>
        <div className="max-w-[50%] mx-auto">
          <h1 className="text-center text-4xl text-primary-color mt-10">Bem-vindo de volta</h1>
          <p className="text-center text-lg text-second-color mb-5">Entre para continuar planejando suas aventuras.</p>
          <form >
            <p className="mb-1 text-primary-color font-medium">Email</p>
            <div className="border flex items-center p-2 rounded-xl mb-5">
              <Mail />
              <input type="email" className="outline-none w-full ml-2 px-1" placeholder="seu@email.com" />
            </div>

            <p className="mb-1 text-primary-color font-medium">Senha</p>
            <div className="border flex items-center p-2 rounded-xl">
              <div className="flex items-center w-full">
                <LockKeyhole />
                <input type={!viewPassword ? "password" : "text"} className="outline-none w-full ml-2 px-1" placeholder="Sua senha" />
              </div>
              <Eye onClick={() => setViewPassword(!viewPassword)} className="cursor-pointer" />
            </div>

            <p className="mt-2 text-end text-link-color font-medium">Esqueci minha senha</p>

            <button className="bg-blue-color py-2 text-white rounded-xl w-full my-10">Entrar</button>
          </form>

          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-300" />
            <p>ou continue com</p>
            <hr className="flex-1 border-gray-300" />
          </div>

          <button type="button" onClick={() => {signIn("google", { callbackUrl: "/" })}} className="w-full mt-10 h-12 flex items-center justify-center gap-3 rounded-xl border border-gray-300 hover:bg-gray-50 cursor-pointer">
            <img
              src="/imgs/icons/google.png"
              alt="Google"
              className="w-5 h-5"
            />

            <span>Continuar com Google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Eye, LockKeyhole, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/dist/client/components/navigation";
import InputWithTitle from "@/components/ui/InputWithTitle/InputWithTitle";

export default function Login() {
  const router = useRouter()

  const [viewPassword, setViewPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const result = await signIn("credentials", { email, password, redirect: false})

    if (result?.error) {
      setError(true)
      return
    }

    router.push("/")
  }

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
            <InputWithTitle icon={<Mail />}
              title={"Email"}
              placeholder="seu@email.com"
              inputType="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />

            <div className="flex items-center rounded-xl gap-3">
              <InputWithTitle icon={<LockKeyhole />}
                title={"Crie sua senha"}
                placeholder="Crie sua senha"
                inputType={!viewPassword ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <Eye onClick={() => setViewPassword(!viewPassword)} className="cursor-pointer mt-2" />
            </div>

            <p className="mt-2 text-end text-link-color font-medium mb-10">Esqueci minha senha</p>
            {error && (
              <p className="mt-10 mb-2 text-center text-red-500 italic">Email ou senha inválidos</p>
            )}
            <button onClick={handleSubmit} className="bg-blue-color py-2 text-white rounded-xl w-full mb-10 cursor-pointer">Entrar</button>
          </form>

          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-300" />
            <p>ou continue com</p>
            <hr className="flex-1 border-gray-300" />
          </div>
          
          <button type="button" onClick={() => { signIn("google", { callbackUrl: "/" }) }} className="w-full mt-10 h-12 flex items-center justify-center gap-3 rounded-xl border border-gray-300 hover:bg-gray-50 cursor-pointer">
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

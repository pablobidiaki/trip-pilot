"use client"

import { Eye, LockKeyhole, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react"
import InputWithTitle from "@/components/ui/InputWithTitle/InputWithTitle";
import { registerUser } from "@/services/user.service";
import { useRouter } from "next/dist/client/components/navigation";

export default function Register() {
  const router = useRouter()
  const [viewPassword, setViewPassword] = useState(false)
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const createUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    if (password !== confirmPassword) {
      setPasswordsMatch(false)
    } else {
      await registerUser({name,email,password})

      router.push("/login")
  }
}

return (
  <div>
    <div className="grid grid-cols-2">
      <div>
        <p className="text-end p-5">Já tem uma conta? <Link href={"/login"} className="text-link-color ">Entrar</Link></p>
        <div className="max-w-[50%] mx-auto">
          <h1 className="text-center text-4xl text-primary-color mt-0">Crie sua conta</h1>
          <p className="text-center text-lg text-second-color mb-5">É rápido, fácil e grátis.</p>
          <form onSubmit={createUser}>
            <InputWithTitle icon={<User />}
              title={"Nome de usuario"}
              placeholder="Ex: viajante_explorador"
              inputType="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />

            <InputWithTitle icon={<Mail />}
              title={"Email"}
              placeholder="seu@email.com"
              inputType="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />

            <div className="flex items-center rounded-xl gap-3">
              <InputWithTitle icon={<LockKeyhole className={`${!passwordsMatch ? "text-red-500" : ""}`} />}
                title={"Crie sua senha"}
                placeholder="Crie sua senha"
                inputType={!viewPassword ? "password" : "text"}
                tailwindTags={`${!passwordsMatch ? "border-red-500" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <Eye onClick={() => setViewPassword(!viewPassword)} className="cursor-pointer mt-2" />
            </div>

            <div className="flex items-center rounded-xl gap-3">
              <InputWithTitle icon={<LockKeyhole className={`${!passwordsMatch ? "text-red-500" : ""}`} />}
                title={"Confirme sua senha"}
                placeholder="Confirme sua senha"
                inputType={!viewConfirmPassword ? "password" : "text"}
                tailwindTags={`${!passwordsMatch ? "border-red-500" : ""}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
              />
              <Eye onClick={() => setViewConfirmPassword(!viewConfirmPassword)} className="cursor-pointer mt-2" />
            </div>

            {!passwordsMatch && (
              <p className={'text-center text-red-500 italic'}>As senhas não coincidem</p>
            )}

            <button type="submit" className="bg-blue-color py-2 text-white rounded-xl w-full my-5">Criar conta</button>
          </form>

          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-300" />
            <p>ou continue com</p>
            <hr className="flex-1 border-gray-300" />
          </div>

          <button type="button" onClick={() => { signIn("google", { callbackUrl: "/" }) }} className="w-full mt-5 h-12 flex items-center justify-center gap-3 rounded-xl border border-gray-300 hover:bg-gray-50 cursor-pointer">
            <img
              src="/imgs/icons/google.png"
              alt="Google icon"
              className="w-5 h-5"
            />

            <span>Continuar com Google</span>
          </button>
        </div>
      </div>

      <Image src={"/imgs/login/image.png"}
        alt="Traveler image"
        width={1280}
        height={1080}
        className="h-screen object-cover"
        loading="eager"
      />
    </div>
  </div>
);
}

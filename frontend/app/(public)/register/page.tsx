"use client"

import { Eye, LockKeyhole, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react"
import InputWithTitle from "@/components/ui/InputWithTitle/InputWithTitle";

export default function Register() {
  const [viewPassword, setViewPassword] = useState(false)
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false)

  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <p className="text-end p-5">Já tem uma conta? <Link href={"/login"} className="text-link-color ">Entrar</Link></p>
          <div className="max-w-[50%] mx-auto">
            <h1 className="text-center text-4xl text-primary-color mt-0">Crie sua conta</h1>
            <p className="text-center text-lg text-second-color mb-5">É rápido, fácil e grátis.</p>
            <form >
              <InputWithTitle icon={<User />} title={"Nome de usuario"} placeholder="Ex: viajante_explorador" inputType="text" />
              <InputWithTitle icon={<Mail />} title={"Email"} placeholder="seu@email.com" inputType="text" />

              <div className="flex items-center rounded-xl gap-3">
                <InputWithTitle icon={<LockKeyhole />} title={"Crie sua senha"} placeholder="Crie sua senha" inputType={!viewPassword ? "password" : "text"} />
                <Eye onClick={() => setViewPassword(!viewPassword)} className="cursor-pointer mt-2" />
              </div>

              <div className="flex items-center rounded-xl gap-3">
                <InputWithTitle icon={<LockKeyhole />} title={"Confirme sua senha"} placeholder="Confirme sua senha" inputType={!viewConfirmPassword ? "password" : "text"} />
                <Eye onClick={() => setViewConfirmPassword(!viewConfirmPassword)} className="cursor-pointer mt-2" />
              </div>

              <button className="bg-blue-color py-2 text-white rounded-xl w-full my-5">Criar conta</button>
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

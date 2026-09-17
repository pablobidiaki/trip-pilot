"use client"

import { Eye, LockKeyhole, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react"
import InputWithTitle from "@/components/ui/InputWithTitle/InputWithTitle";
import { registerUser } from "@/services/user.service";
import { useRouter } from "next/dist/client/components/navigation";
import texts from "@/constants/texts";

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
        <p className="text-end p-5">{texts.loginAndRegister.alreadyHaveAccount} <Link href={"/login"} className="text-link-color ">{texts.loginAndRegister.enter}</Link></p>
        <div className="max-w-[50%] mx-auto">
          <h1 className="text-center text-4xl text-primary-color mt-0">{texts.loginAndRegister.createYourAccount}</h1>
          <p className="text-center text-lg text-second-color mb-5">{texts.loginAndRegister.createYourAccountText}</p>
          <form onSubmit={createUser}>
            <InputWithTitle icon={<User />}
              title={texts.loginAndRegister.name}
              placeholder={texts.loginAndRegister.namePlaceholder}
              inputType="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />

            <InputWithTitle icon={<Mail />}
              title={texts.loginAndRegister.email}
              placeholder={texts.loginAndRegister.emailPlaceholder}
              inputType="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />

            <div className="flex items-center rounded-xl gap-3">
              <InputWithTitle icon={<LockKeyhole className={`${!passwordsMatch ? "text-red-500" : ""}`} />}
                title={texts.loginAndRegister.createPassword}
                placeholder={texts.loginAndRegister.createPasswordPlaceholder}
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
                title={texts.loginAndRegister.confirmPassword}
                placeholder={texts.loginAndRegister.confirmPasswordPlaceholder}
                inputType={!viewConfirmPassword ? "password" : "text"}
                tailwindTags={`${!passwordsMatch ? "border-red-500" : ""}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
              />
              <Eye onClick={() => setViewConfirmPassword(!viewConfirmPassword)} className="cursor-pointer mt-2" />
            </div>

            {!passwordsMatch && (
              <p className={'text-center text-red-500 italic'}>{texts.loginAndRegister.passwordNotMatch}</p>
            )}

            <button type="submit" className="bg-blue-color py-2 text-white rounded-xl w-full my-5">{texts.loginAndRegister.createAccount}</button>
          </form>

          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-300" />
            <p>{texts.loginAndRegister.orContinueWith}</p>
            <hr className="flex-1 border-gray-300" />
          </div>

          <button type="button" onClick={() => { signIn("google", { callbackUrl: "/" }) }} className="w-full mt-5 h-12 flex items-center justify-center gap-3 rounded-xl border border-gray-300 hover:bg-gray-50 cursor-pointer">
            <img
              src="/imgs/icons/google.png"
              alt="Google icon"
              className="w-5 h-5"
            />

            <span>{texts.loginAndRegister.continueWithGoogle}</span>
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

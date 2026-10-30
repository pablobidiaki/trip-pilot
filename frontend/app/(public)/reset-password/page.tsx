
'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Eye, EyeOff, LockKeyhole, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { changePassword } from '@/services/user.service';

function ResetPasswordForm() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!token) {
            toast.error('Link de recuperação inválido ou expirado.');
            return;
        }

        if (password.length < 8) {
            toast.error('A senha deve possuir pelo menos 8 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('As senhas não coincidem.');
            return;
        }

        const message = await changePassword({ token: token, password: password })

        toast.success(message)
        router.push(`http://localhost:3000/login`)
    };

    if (!token) {
        return (
            <div className="text-center space-y-5">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white">
                    <LockKeyhole className="h-8 w-8 text-red-400" />
                </div>

                <h1 className="text-2xl font-bold text-primary-color"> Link inválido
                </h1>

                <p className="text-gray-400"> O link de recuperação não foi encontrado. Solicite uma nova recuperação de senha.
                </p>

                <Link href="/forgot-password" className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                    Solicitar novo link
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-primary-color">
                    Redefinir senha
                </h1>

                <p className="mt-3 text-gray-400">
                    Crie uma nova senha para continuar explorando o mundo com o TripPilot.
                </p>
            </div>

            <form onSubmit={handleResetPassword} className="space-y-5">
                <div>
                    <label className="mb-2 block text-sm font-medium text-primary-color">
                        Nova senha
                    </label>

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua nova senha"
                            required
                            minLength={8}
                            className="w-full rounded-xl border bg-background-color px-4 py-3 pr-12 text-primary-color outline-none"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-color"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-primary-color">
                        Confirmar nova senha
                    </label>

                    <div className="relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirme sua nova senha"
                            required
                            minLength={8}
                            className="w-full rounded-xl border bg-background-color px-4 py-3 pr-12 text-primary-color outline-none" 
                        />

                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-color" >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <p className="text-xs text-secondary-color text-center">
                    Sua senha deve possuir pelo menos 8 caracteres.
                </p>

                <button type="submit" disabled={loading} className="w-full rounded-xl bg-blue-500 py-3.5 font-semibold text-white cursor-pointer">
                    Redefinir senha
                </button>
            </form>

            <div className="mt-7 text-center">
                <Link href="/login" className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-primary-color">
                    Voltar para o login
                </Link>
            </div>
        </>
    );
}

export default function ResetPasswordPage() {
    return (
        <div className="flex min-h-screen justify-center bg-background-color px-5 py-2">
            <div className="w-full max-w-md">
                <Link href="/" className="mb-5 flex  items-center justify-center gap-2 text-xl font-bold text-primary-color" >
                    <img className='w-20' src={"imgs/icons/tripPilot.png"} />
                </Link>

                <div className="rounded-lg bg-white shadow-2xl sm:p-9">
                    <ResetPasswordForm />
                </div>
            </div>
        </div>
    );
}

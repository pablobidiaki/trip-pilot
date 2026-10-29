"use client";

import { useState } from "react";
import { Camera, LockKeyhole } from "lucide-react";
import { toast } from "sonner";
import texts from "@/constants/texts";
import { updateUser } from "@/services/user.service"; import { useSession } from "next-auth/react";

interface User {
    id: string
    name: string;
    email: string;
    image?: string | null;
    countriesVisited: string[];
    countriesWishlist: string[];
}

interface ConfigurationsProps {
    user: User;
}

export default function Configurations({ user }: ConfigurationsProps) {
    const { data: session, update } = useSession();

    const [name, setName] = useState(user.name);
    const [image, setImage] = useState<any>(user.image ?? "");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function uploadImage(file: File): Promise<string> {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

        const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Erro do Cloudinary:", data);
            throw new Error(
                data.error?.message ?? "Falha ao enviar a imagem."
            );
        }

        return data.secure_url;
    }

    async function teste(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        setImage(previewUrl);

        try {
            const imageUrl = await uploadImage(file);
            setImage(imageUrl);
        } catch (error) {
            console.error("Erro no upload:", error);
        }
    }

    async function handleSubmit() {
        const data: { id?: string, name?: string, image?: string, password?: string} = {};

        data.id = user.id

        if (name.trim()) data.name = name.trim();
        if (image) data.image = image
        if (newPassword) data.password = newPassword

        try{
            await updateUser(data)
    
            await update({
                user: {
                    ...session?.user,
                    name: data.name ?? session?.user?.name,
                    image: data.image ?? session?.user?.image,
                },
            });
            toast.success("Dados atualizadas com sucesso!")
        }catch (error){
            console.error("Erro na alteração dos dados: ", error)
        }
    }

    return (
        <div className="mx-auto w-full p-4">
            <h1 className="text-3xl font-bold text-primary-color"> {texts.optionSelectorProfile.configurations} </h1>
            <p className="mb-2 text-secondary-color"> {texts.profile.configurationsSubtitle} </p>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 mb-4">
                <h2 className="text-lg font-semibold">{texts.profile.myProfile}</h2>

                <div className="mt-6 flex items-center gap-5">
                    <div className="group relative cursor-pointer">
                        <label className="group relative cursor-pointer">
                            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-indigo-100">
                                {image ? (<img src={image} alt="Foto de perfil" className="h-full w-full object-cover" />) : (<span className="text-3xl font-bold text-indigo-600"> {name.charAt(0).toUpperCase()} </span>)}
                            </div>

                            <span className="absolute bottom-0 right-0 rounded-full bg-primary-color p-2 text-white"> <Camera size={16} /> </span>

                            <input type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={teste}
                            />
                        </label>
                    </div>

                    <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-gray-500"> {texts.profile.changeYourPhoto} </p>
                    </div>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <div>
                        <p className="mb-2 block text-sm font-medium"> {texts.profile.username} </p>
                        <input id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            minLength={2}
                            className="w-full rounded-xl border p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>

                    <div>
                        <p className="mb-2 block text-sm font-medium"> {texts.profile.email} </p>
                        <div className="relative">
                            <input id="email"
                                type="email"
                                value={user.email}
                                readOnly
                                className="w-full rounded-xl border bg-gray-100 p-3 pr-10 text-secondary-color"
                            />
                            <LockKeyhole
                                size={17}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                        </div>
                        <p className="mt-1 text-xs text-secondary-color"> {texts.profile.emailCannotBeChanged} </p>
                    </div>

                </div>
                <div className="grid gap-4 md:grid-cols-3 mt-6">
                    <input type="password"
                        placeholder="Senha atual"
                        value={currentPassword}
                        onChange={(event) => setCurrentPassword(event.target.value)}
                        className="rounded-xl border p-3"
                    />

                    <input type="password"
                        placeholder="Nova senha"
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                        className="rounded-xl border p-3"
                    />

                    <input type="password"
                        placeholder="Confirmar nova senha"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        className="rounded-xl border p-3"
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <button onClick={() => handleSubmit()} className="flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:opacity-90" >
                    {texts.profile.saveChanges}
                </button>
            </div>
        </div>
    );
}
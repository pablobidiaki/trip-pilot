"use client"

import { useEffect, useState } from "react";
import { ImagePlus, X, Check, Trash, Upload, Calendar1 } from "lucide-react";
import { toast } from "sonner";
import { UserInterface } from "@/interfaces/user.interface";
import { handleCountryMemory } from "@/services/map.service";
import DatePicker from "@/components/home/Hero/DatePicker";
import texts from "@/constants/texts";

interface CityInfosModalProps {
    user: UserInterface
    geo: any
    city?: any
    setUpdateMemory: (value: boolean) => void
    setIsOpenCityInfosModal: (value: boolean) => void
}

export default function CityInfosModal({ user, geo, city, setUpdateMemory, setIsOpenCityInfosModal }: CityInfosModalProps) {
    const [cityName, setCityName] = useState("");
    const [cityImage, setCityImage] = useState<File | null>(null);
    const [preview, setPreview] = useState("");
    const [date, setDate] = useState("")
    const [cityNotes, setCityNotes] = useState("");

    useEffect(() => {
        if (!cityImage) {
            setPreview("");
            return;
        }

        const imageUrl = URL.createObjectURL(cityImage);
        setPreview(imageUrl);

        return () => URL.revokeObjectURL(imageUrl);
    }, [cityImage]);

    const handleImage = (file: File | undefined) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            toast.error("Selecione um arquivo de imagem válido.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error("A imagem deve ter no máximo 5MB.");
            return;
        }

        setCityImage(file);
    };

    const handleSave = async () => {
        if (!cityName.trim()) {
            toast.error("Preencha o título.");
            return;
        }

        if (!cityNotes.trim()) {
            toast.error("Preencha a descrição.");
            return;
        }

        const data = {
            userId: user.id,
            cityName: cityName,
            visitedAt: date,
            cityNotes: cityNotes,
            countryCode: geo.id,
            cityImage: cityImage
        }

        try{
            await handleCountryMemory(data)

            setUpdateMemory(true)
            
            toast.success("Memória salva com sucesso")
        } catch(error){
            toast.error("Erro ao tentar salvar memória")
            console.error("Error: ", error)
        }

        setIsOpenCityInfosModal(false);
    };

    return (
        <div className="fixed inset-0 z-210 flex items-center justify-center bg-black/60 p-4 animate-[optionSelector_300ms_ease-out]">
            <section className="mx-auto w-full max-w-xl rounded-xl border border-gray-100 bg-background-color p-3 sm:p-4">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-primary-color">
                        Informações da cidade
                    </h2>

                    <X onClick={() => setIsOpenCityInfosModal(false)} className="cursor-pointer" />
                </div>

                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="block text-lg text-primary-color">
                            Nome da cidade ou destino
                        </label>

                        <input type="text"
                            value={cityName}
                            onChange={(e) => setCityName(e.target.value)}
                            maxLength={100}
                            placeholder="Ex: Conhecendo as ruas de Paris"
                            className="h-12 w-full rounded-xl border-2 border-gray-100 bg-white px-3 text-sm text-primary-color outline-none transition focus:border-blue-400 placeholder:text-muted-foreground"
                        />
                    </div>

                    <div>
                        <label className="block text-lg text-primary-color">
                            Data da visita
                        </label>
                        <DatePicker icon={<Calendar1 size={22} />}
                        title={texts.form.when}
                        value={date}
                        showBottom={true}
                        fullCalendar={true}
                        onChange={setDate}
                    />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-lg text-primary-color">
                            Descrição da experiência
                        </label>

                        <textarea
                            value={cityNotes}
                            onChange={(e) => setCityNotes(e.target.value)}
                            rows={4}
                            maxLength={2000}
                            placeholder="Conte como foi sua experiência, lugares que conheceu, dicas e momentos especiais..."
                            className="min-h-28 w-full resize-none rounded-xl border-2 border-gray-100 bg-white px-3 py-3 text-sm text-primary-color outline-none transition focus:border-blue-400 placeholder:text-muted-foreground"
                        />

                        <p className="text-right text-xs text-gray-400">
                            {cityNotes.length}/2000 caracteres
                        </p>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-lg text-primary-color">
                            Foto da experiência
                        </label>

                        {!preview ? (
                            <label htmlFor="city-image" className="flex min-h-44 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-white p-5 text-gray-500 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-500">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                                    <ImagePlus className="h-6 w-6" />
                                </div>

                                <div className="text-center">
                                    <p className="text-sm font-semibold">
                                        Adicionar imagem
                                    </p>

                                    <p className="mt-1 text-xs text-gray-400">
                                        Clique para selecionar uma foto
                                    </p>
                                </div>

                                <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs">
                                    <Upload className="h-3.5 w-3.5" />
                                    PNG, JPG ou WEBP · Máximo 5MB
                                </span>

                                <input
                                    id="city-image"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => handleImage(e.target.files?.[0])}
                                />
                            </label>
                        ) : (
                            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white">
                                <img src={preview} alt="Preview da experiência" className="h-56 w-full object-cover" />

                                <div className="absolute right-2 top-2 flex gap-2">
                                    <label htmlFor="city-image" className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100" title="Alterar imagem">
                                        <ImagePlus className="h-4 w-4 text-gray-700" />
                                    </label>

                                    <button type="button" onClick={() => setCityImage(null)} className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition hover:text-red-500" title="Remover imagem">
                                        <Trash className="h-4 w-4" />
                                    </button>
                                </div>

                                <input
                                    id="city-image"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => handleImage(e.target.files?.[0])}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row">
                    <button type="button"
                        onClick={() => setIsOpenCityInfosModal(false)}
                        className="h-10 flex-1 cursor-pointer rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                    >
                        Cancelar
                    </button>

                    <button type="button"
                        onClick={handleSave}
                        className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground text-sm font-medium text-background transition hover:opacity-90"
                    >
                        <Check className="h-4 w-4" />
                        Salvar experiência
                    </button>
                </div>

            </section>
        </div>
    );
}   

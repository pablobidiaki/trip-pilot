
import { useRef, useState } from "react";
import { Plus, ImagePlus, X, Check, Calendar1, } from "lucide-react";
import DatePicker from "@/components/home/Hero/DatePicker";
import texts from "@/constants/texts";
import { toast } from "sonner";
import { createMemoryContry } from "@/services/map.service";

interface MemoryModalProps {
    geo: any
    setIsMemoryModalOpen: (value: boolean) => void
}

export default function MemoryModal({ geo, setIsMemoryModalOpen }: MemoryModalProps) {
    const [date, setDate] = useState("");
    const [cities, setCities] = useState<string[]>([]);
    const [newCity, setNewCity] = useState("");
    const [description, setDescription] = useState("");
    const [photos, setPhotos] = useState<File[]>([]);
    const [saved, setSaved] = useState(false);

    const addCity = () => {
        const city = newCity.trim();
        if (city && !cities.includes(city)) {
            setCities([...cities, city]);
            setNewCity("");
        }
    };

    const removeCity = (city: string) => {
        setCities(cities.filter((item) => item !== city));
    };

    const handlePhotos = (files: FileList | null) => {
        if (!files) return;
        setPhotos((prev) => [...prev, ...Array.from(files)]);
    };

    const handleSave = async () => {
        if (date == "") toast.error("Preencha a data da viagem.")
        else if (cities.length == 0) toast.error("Preencha as cidades visitadas.")
        else {
            setSaved(true)

            const data = {
                visitedAt: date,
                cities: cities,
                notes: description,
                countryCode: geo.id,
                countryName: geo.properties.name
            }

            try {
                await createMemoryContry('0c6a0924-980c-471b-9326-7a945404f202', data)
                setIsMemoryModalOpen(false)
                toast.success("Memória criada com sucesso")
            }catch(error){
                console.error(error)
            }
        }
    };

    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/60 p-4 animate-[optionSelector_300ms_ease-out]">
            <section className="mx-auto w-full max-w-3xl rounded-[20px] border-2 border-gray-100 bg-background-color p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-primary-color"> Minhas memórias </h2>
                    <X onClick={() => setIsMemoryModalOpen(false)} className="cursor-pointer" />
                </div>

                <div className="mb-3 space-y-1.5">
                    <label className="block text-sm font-semibold text-primary-color">
                        Data da viagem *
                    </label>

                    <DatePicker icon={<Calendar1 size={22} />}
                        title={"Data da viagem"}
                        value={date}
                        showBottom={true}
                        fullCalendar={true}
                        onChange={setDate}
                    />

                </div>

                <div className="mb-3 space-y-1.5">
                    <label className="block text-sm font-semibold text-primary-color">
                        Cidades visitas *
                    </label>

                    <div className="min-h-17.5 rounded-xl border-2 border-gray-100 p-3 bg-white">
                        <div className="flex flex-wrap items-center gap-2">
                            {cities.map((city) => (
                                <span key={city} className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-500 capitalize">
                                    {city}
                                    <button type="button" onClick={() => removeCity(city)} className="hover:text-sky-700" >
                                        <X className="h-3 w-3" />
                                    </button>
                                </span>
                            ))}
                        </div>

                        <div className="mt-2 flex items-center gap-2">
                            <input value={newCity} onChange={(e) => setNewCity(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addCity() } }} placeholder="Adicionar cidade +" className="w-full bg-transparent text-xs text-primary-color outline-none placeholder:text-muted-foreground" />

                            {newCity.trim() && (
                                <button type="button" onClick={addCity} className="text-xs font-medium text-primary">
                                    Adicionar
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mb-3 space-y-1.5">
                    <label className="block text-sm font-semibold text-primary-color">
                        Conte como foi sua experiência
                    </label>

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={1}
                        className="min-h-11.5 bg-white w-full resize-none rounded-xl border-2 border-gray-100 bg-transparent px-3 py-3 text-sm text-primary-color outline-none placeholder:text-muted-foreground"
                        placeholder="Conte um pouco sobre sua viagem..."
                    />
                </div>

                {/* <div className="mb-3 rounded-xl border-2 border-gray-100 p-3">
                    <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-base font-semibold text-primary-color">
                            Minhas lembranças
                        </h3>

                        <button type="button" onClick={() => fileInputRef.current?.click()} className="text-muted-foreground transition hover:text-primary-color" >
                            <ImagePlus className="h-4 w-4" />
                        </button>
                    </div>

                    <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => handlePhotos(e.target.files)} />

                    {photos.length === 0 ? (
                        <button type="button" onClick={() => fileInputRef.current?.click()} className="flex min-h-[75px] w-full items-center gap-8 px-4 text-left transition hover:opacity-70">
                            <Plus className="h-4 w-4 text-primary-color" />
                            <span className="text-xs text-muted-foreground">
                                Adicione fotos da sua viagem.
                            </span>
                        </button>
                    ) : (
                        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                            {photos.map((photo, index) => (
                                <div key={`${photo.name}-${index}`} className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                                    <img src={URL.createObjectURL(photo)} alt={photo.name} className="h-full w-full object-cover" />
                                    <button type="button" onClick={() => setPhotos((prev) => prev.filter((_, i) => i !== index))} className="absolute right-1 top-1 rounded-full bg-black/60 p-1 text-white">
                                        <X className="h-3 w-3" />
                                    </button>
                                </div>
                            ))}

                            <button type="button" onClick={() => fileInputRef.current?.click()} className="flex aspect-square items-center justify-center rounded-lg border-2 border-gray-100 text-muted-foreground hover:bg-muted">
                                <Plus className="h-5 w-5" />
                            </button>
                        </div>
                    )}
                </div> */}

                <button type="button" onClick={handleSave} className="cursor-pointer flex h-9 w-full items-center justify-center gap-2 rounded-full bg-foreground text-sm font-medium text-background transition hover:opacity-90">
                    {saved ? (
                        <>
                            <Check className="h-4 w-4" />
                            Lembrança salva
                        </>
                    ) : (
                        "Salvar minha lembrança"
                    )}
                </button>
            </section>
        </div>
    );
}

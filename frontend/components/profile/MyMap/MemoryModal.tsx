"use client"

import { useEffect, useState } from "react";
import { Plus, X, Check, Trash } from "lucide-react";
import { CitiesInterface, CountriesMemoriesInterface, UserInterface } from "@/interfaces/user.interface";
import CityInfosModal from "./CityInfosModal";
import { deleteCountryMemory, getCityMemories, getCountryInfos, handleCountryMemory } from "@/services/map.service";
import ConfirmDelete from "@/components/ui/ConfirmDelete/ConfirmDelete";
import { toast } from "sonner";

interface MemoryModalProps {
    user: UserInterface
    geo: any
    userCitiesVisited?: CitiesInterface[]
    userContryInfos?: CountriesMemoriesInterface
    setIsMemoryModalOpen: (value: boolean) => void
    setUpdateMemory: (value: boolean) => void
}

export default function MemoryModal({ user, geo, userCitiesVisited, userContryInfos, setIsMemoryModalOpen, setUpdateMemory }: MemoryModalProps) {
    const [cities, setCities] = useState<any[]>([]);
    const [note, setNote] = useState("");
    const [saved, setSaved] = useState(false);
    const [isOpenCityInfosModal, setIsOpenCityInfosModal] = useState(false)
    const [city, setCity] = useState()
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [memoryId, setMemoryId] = useState("")
    const [memories, setMemories] = useState<any[]>([]) 

    const openCityInfosModal = (city?: any) => {
        document.getElementById("new-city-input")?.focus()
        setIsOpenCityInfosModal(true)
        setCity(city)
    }

    useEffect(() => {
        setCities(userCitiesVisited!)
    }, [userCitiesVisited])

    useEffect(() => {
        setNote(userContryInfos?.notes!)
    }, [])

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const deleteMemory = async () => {
        try {
            await deleteCountryMemory(memoryId)

            setUpdateMemory(true);
            setIsOpenDeleteModal(false)

            toast.success("Memória deletada com sucesso")
        } catch (error) {
            toast.success("Erro ao tentar deletar memória")
            console.error("Error: ", error)
        }
    }

    const handleDeleteButton = (id: string) => {
        setMemoryId(id)
        setIsOpenDeleteModal(true)
    }

    const handleSaveMemoriesButton = async () => {
        const data = {
            countryCode: geo.id,
            countryNotes: note
        };

        try {
            await handleCountryMemory(data);

            setSaved(true);
            setUpdateMemory(true);

            toast.success("Memória salva com sucesso");
        } catch (error) {
            toast.error("Erro ao tentar salvar memória");
            console.error(error);
        }
    };

    useEffect(() => {
        const getInfo = async () => {
            try {
                const data = await getCountryInfos(user.id, geo.id);
                setNote(data.notes || "");
            } catch (error) {
                console.error(error);
            }
        };

        getInfo();
    }, [user.id, geo.id]);

    useEffect(() => {
        const _getCityMemories = async () => {
            const cityMemories = await getCityMemories(user.id)
            setMemories(cityMemories)
        }
        _getCityMemories()
    }, [cities, isOpenCityInfosModal])

    const formatVisitedDate = (dateValue?: string) => {
        if (!dateValue) return "Data não informada";
        if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateValue.trim())) {
            return dateValue.trim();
        }
        const parsed = new Date(dateValue);
        return Number.isNaN(parsed.getTime())
            ? dateValue
            : parsed.toLocaleDateString("pt-BR");
    };

    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/60 p-4 animate-[optionSelector_300ms_ease-out]">
            <section className="mx-auto flex h-[85vh] max-h-200 w-full max-w-3xl flex-col rounded-xl border border-gray-100 bg-background-color p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-primary-color"> Minhas memórias ({cities.length})</h2>
                    <X onClick={() => setIsMemoryModalOpen(false)} className="cursor-pointer" />
                </div>
                <div className="mb-3 space-y-1.5">
                    <label className="block text-lg text-primary-color">
                        Cidades ou lugares visitados
                    </label>

                    <div className="min-h-17.5 rounded-xl border border-gray-100 bg-white p-3">
                        <div className="max-h-100 overflow-y-auto scrollbar-hide">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <button type="button" onClick={() => openCityInfosModal()} className="cursor-pointer flex min-h-55 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-background-color text-gray-500 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-500">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                                        <Plus className="h-6 w-6" />
                                    </div>

                                    <div className="text-center">
                                        <p className="text-sm font-semibold">
                                            Adicionar cidade
                                        </p>
                                        <p className="mt-1 text-xs text-gray-400">
                                            Registre uma nova experiência
                                        </p>
                                    </div>
                                </button>

                                {cities?.map((city) => {
                                    const cityMemory = memories?.find((memory) => memory.cityId! === city.id);

                                    return (
                                        <div onClick={() => openCityInfosModal(city)} key={city.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white cursor-pointer transition hover:border-blue-400">
                                            <div className="relative h-46 w-full">
                                                <img src={cityMemory?.imageURL || "/imgs/icons/tripPilot.png"} alt={city.name} className="h-full w-full object-cover"/>

                                                <button type="button"
                                                    className="absolute right-2 top-2 p-1 bg-white rounded-full transition cursor-pointer z-50 text-black hover:text-red-500"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCity(city);
                                                        handleDeleteButton(city.id);
                                                    }}
                                                >
                                                    <Trash className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <div className="p-3">
                                                <h3 className="text-base font-semibold capitalize text-gray-800">
                                                    {city.name}
                                                </h3>

                                                <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
                                                    {formatVisitedDate(cityMemory?.visitedAt)}
                                                </div>

                                                <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                                                    {city?.notes || "Nenhuma descrição adicionada."}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3 space-y-1.5">
                    <label className="block text-lg text-primary-color">
                        Conte como foi sua experiência geral
                    </label>

                    <textarea value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={4}
                        className="min-h-11.5 bg-white w-full resize-none rounded-xl border-2 border-gray-100 px-3 py-3 text-sm text-primary-color outline-none placeholder:text-muted-foreground"
                        placeholder="Conte um pouco sobre sua viagem..."
                    />
                </div>

                <button type="button" onClick={() => handleSaveMemoriesButton()} className="cursor-pointer flex h-9 w-full items-center justify-center gap-2 rounded-full bg-foreground text-sm font-medium text-background transition hover:opacity-90">
                    {saved ? (
                        <>
                            <Check className="h-4 w-4" />
                            Lembrança salva
                        </>
                    ) : (
                        "Salvar minhas lembrança"
                    )}
                </button>
            </section>

            {isOpenCityInfosModal && <CityInfosModal user={user} geo={geo} setIsOpenCityInfosModal={setIsOpenCityInfosModal} setUpdateMemory={setUpdateMemory} city={city} />}
            <ConfirmDelete isOpen={isOpenDeleteModal} deleteFunction={() => deleteMemory()} onClose={() => setIsOpenDeleteModal(false)} />
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays, Check, Compass, Utensils } from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
    {
        title: "Analisando seu destino",
        description: "Descobrindo o que torna essa viagem especial",
        icon: MapPin,
    },
    {
        title: "Selecionando experiências",
        description: "Encontrando lugares que combinam com você",
        icon: Compass,
    },
    {
        title: "Escolhendo os melhores restaurantes e hotéis",
        description: "Buscando as melhores refeições e acomodações locais",
        icon: Utensils
    },
    {
        title: "Organizando seus dias",
        description: "Distribuindo os passeios pelo melhor roteiro",
        icon: CalendarDays,
    },
    {
        title: "Finalizando seu roteiro",
        description: "Preparando tudo para sua próxima aventura",
        icon: Check,
    },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function TripPilotGeneratingScene() {
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStarted(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {started ?
                <motion.div initial={{ opacity: 0, y: 45, scale: 0.94 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.85, delay: 0.25, ease }}
                            className="min-w-lg max-w-lg min-h-104.5 max-h-104.5 flex px-3 py-2 font-sans text-white bg-white rounded-lg border border-gray-100">
                    <div className="w-full text-white">
                        <motion.div key={1}
                            initial={{ opacity: 0, y: 45, scale: 0.94 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.85, delay: 0.25, ease }}
                            className="max-w-127.5
                ">
                            <div className="pb-5">
                                <div className="mb-5 flex items-center justify-between ">
                                    <span className="text-primary-color text-xl font-bold">2º A IA planeja</span>
                                </div>

                                <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-black/10">
                                    <motion.div initial={{ width: "0%" }}
                                        animate={{ width: ["0%", "100%"] }}
                                        transition={{ duration: 5, ease: "easeInOut" }}
                                        className="h-full rounded-full bg-black"

                                    />
                                </div>

                                <div>
                                    {steps.map((step, index) => {
                                        return (
                                            <motion.div key={step.title}
                                                initial={{ opacity: 0.2, x: -12 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index, duration: 0.5 }}
                                                className="flex items-center gap-3 mb-6
                                    ">
                                                <motion.div initial={{ backgroundColor: "#fff" }}
                                                    animate={{ backgroundColor: index === 4 ? "#312E81" : "#F8FAFC" }}
                                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                                        ">
                                                    <step.icon size={18} className="text-blue-300" />
                                                </motion.div>

                                                <div className="min-w-0 flex-1">
                                                    <p className="text-sm font-medium text-black"> {step.title} </p>
                                                    <p className="mt-1 text-xs text-gray-500"> {step.description} </p>
                                                </div>

                                                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index }}
                                                    className="text-green-500
                                        ">
                                                    <Check size={17} />
                                                </motion.div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                :
                <div className="min-w-lg max-w-lg min-h-104.5 max-h-104.5 bg-background-color" />
            }
        </div>
    )
}
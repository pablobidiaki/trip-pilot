"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, Check, Compass, Utensils } from "lucide-react";

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

export default function TripPilotGeneratingScene() {
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setSubmitted(true), 7200);
        const reset = setTimeout(() => setSubmitted(false), 10800);

        return () => {
            clearTimeout(timer);
            clearTimeout(reset);
        };
    }, [submitted]);

    return (
        <div className="flex min-h-screen px-5 py-2 font-sans text-white">
            <div className="w-full text-white">
                <motion.div key={1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-127.5
                ">
                    <div className="mb-8 p-5 bg-background-color">
                        <div className="mb-5 flex items-center justify-between ">
                            <span className="text-lg font-medium text-black ">Preparando seu roteiro</span>
                            <motion.span animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-sm font-semibold text-gray-400
                            ">
                                Em andamento...
                            </motion.span>
                        </div>

                        <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-black/10">
                            <motion.div initial={{ width: "0%" }}
                                animate={{ width: ["0%", "100%"] }}
                                transition={{ duration: 12, ease: "easeInOut" }}
                                className="h-full rounded-full bg-black"
                            />
                        </div>

                        <div className="space-y-5">
                            {steps.map((step, index) => {
                                return (
                                    <motion.div key={step.title}
                                        initial={{ opacity: 0.2, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 2, duration: 0.5 }}
                                        className="flex items-center gap-3
                                    ">
                                        <motion.div initial={{ backgroundColor: "#fff" }}
                                            animate={{ backgroundColor: index === 4 ? "#312E81" : "#fff" }}
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10
                                        ">
                                            <step.icon size={18} className="text-blue-300" />
                                        </motion.div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium text-black">
                                                {step.title}
                                            </p>
                                            <p className="mt-1 text-xs text-gray-500">
                                                {step.description}
                                            </p>
                                        </div>

                                        <motion.div initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 2 + 1.2 }}
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
        </div>
    )
}
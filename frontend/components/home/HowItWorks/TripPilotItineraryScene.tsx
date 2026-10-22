"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plane, CalendarDays, Wallet, Camera } from "lucide-react";

const days = [
    {
        day: "01",
        title: "Explore Tóquio",
        subtitle: "Tradição e modernidade",
        places: ["Templo Senso-ji", "Rua Nakamise", "Cruzeiro em Shibuya"],
        color: "bg-blue-100",
    },
    {
        day: "02",
        title: "Cultura japonesa",
        subtitle: "Uma viagem pela história",
        places: ["Santuário Meiji", "Harajuku", "Jardim Shinjuku Gyoen"],
        color: "bg-violet-100",
    }
];

export default function TripPilotItineraryScene() {
    const [submitted, setSubmitted] = useState(false)

    const rise = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0 },
    };

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
            <div className="max-w-147.5 bg-background-color h-fit text-primary-color">
                <div className="p-2">
                    <motion.div initial="hidden"
                        animate="show"
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
                        className="mb-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {[
                            { label: "Duração", value: "5", icon: CalendarDays },
                            { label: "Viajantes", value: "2", icon: Plane },
                            { label: "Passeios", value: "15 ", icon: Camera },
                            { label: "Orçamento", value: "R$22 mil", icon: Wallet },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <motion.div key={item.label}
                                    variants={rise}
                                    transition={{ duration: 0.5 }}
                                    className="rounded-2xl border border-gray-100 bg-white">
                                    <div className="flex items-center justify-center p-2">
                                        <div className="text-center">
                                            <Icon size={15} className=" text-violet-600 mx-auto mb-2" />
                                            <p className="text-xs text-slate-500">{item.label}</p>
                                            <p className="text-sm font-semibold">{item.value}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                    <div className="mb-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600"> Sua viagem, dia a dia </p>
                        <h2 className="text-xl font-bold sm:text-2xl"> Um roteiro feito para explorar </h2>
                    </div>

                    <div className="space-y-2">
                        {days.map((day, index) => {
                            return (
                                <motion.article key={day.day}
                                    initial={{ opacity: 0, x: -25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + index * 0.35, duration: 0.6, ease: "easeOut" }}
                                    className="group grid gap-2 rounded-2xl border border-gray-100 bg-white transition-shadow hover:shadow-lg hover:shadow-violet-900/5 sm:grid-cols-[72px_1fr] p-2">
                                    <div className={`flex  w-16 items-center justify-center rounded-2xl ${day.color}`} >
                                        <div className="text-center">
                                            <p className="text-[10px] font-medium text-slate-500 text-center"> DIA </p>
                                            <p className="text-xl font-bold text-slate-800 text-center"> {day.day} </p>
                                        </div>
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="font-semibold">{day.title}</h3>
                                        <p className="text-xs text-slate-500"> {day.subtitle} </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {day.places.map((place, placeIndex) => (
                                                <motion.span key={place}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 1.3 + index * 0.35 + placeIndex * 0.12 }}
                                                    className="rounded-lg bg-slate-100 px-1 py-2 text-xs text-slate-600">
                                                    {place}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

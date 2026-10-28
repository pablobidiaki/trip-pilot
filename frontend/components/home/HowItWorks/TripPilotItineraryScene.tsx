"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Plane, CalendarDays, Wallet, Camera } from "lucide-react";

const days = [
  {
    day: "01",
    title: "Explore Tóquio",
    subtitle: "Tradição e modernidade",
    places: ["Templo Senso-ji", "Rua Nakamise", "Cruzeiro em Shibuya", "Shibuya"],
    color: "bg-blue-100",
  }
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function TripPilotItineraryScene() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      setStarted(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isInView]);

  const rise = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="min-h-104.5 w-full mx-4
        md:min-w-lg md:max-w-lg
        2xl:min-w-md 2xl:max-w-md
      ">
      {started ? (
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease }}
          className=" min-h-104.5  bg-white h-fit text-primary-color border border-gray-100 rounded-lg
            2xl:min-w-md 2xl:max-w-md
          ">
          <h1 className="text-primary-color text-xl font-bold px-3 py-2"> 3º Aproveitar </h1>

          <div className="px-3">
            <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.6}}}} className="mb-2 grid grid-cols-2 gap-3 sm:grid-cols-4" >
              {[
                { label: "Duração", value: "5", icon: CalendarDays },
                { label: "Viajantes", value: "2", icon: Plane },
                { label: "Passeios", value: "15", icon: Camera },
                { label: "Orçamento", value: "R$22 mil", icon: Wallet },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div key={item.label} variants={rise} transition={{ duration: 0.5, ease }} >
                    <div className="p-2 bg-background-color rounded-lg border border-gray-100">
                      <div className="text-center">
                        <Icon size={20} className="text-blue-300 mx-auto mb-2" />
                        <p className="text-xs text-slate-500"> {item.label} </p>
                        <p className="text-sm font-semibold"> {item.value} </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.6, ease: "easeOut", }} className="mb-2">
              <p className="text-xs font-semibold text-blue-500"> Sua viagem, dia a dia </p>
              <h2 className="font-bold"> Um roteiro feito para explorar </h2>
            </motion.div>

            <div className="space-y-4">
              {days.map((day, index) => (
                <motion.article key={day.day} initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 + index * 0.25, duration: 0.6, ease: "easeOut", }} className="group grid gap-2 rounded-2xl border border-gray-100 bg-background-color grid-cols-[72px_1fr] p-2">
                  <div className={`flex items-center justify-center rounded-2xl ${day.color}`}>
                    <div className="text-center">
                      <p className="text-[10px] font-medium text-second-color text-center"> DIA </p>
                      <p className="text-xl font-bold text-slate-800 text-center"> {day.day} </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold">{day.title}</h3>
                    <p className="text-xs text-second-color"> {day.subtitle} </p>

                    <div className="mt-3 flex flex-col gap-2">
                      {day.places.map((place, placeIndex) => (
                        <motion.span key={place} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3 + index * 0.35 + placeIndex * 0.12, duration: 0.4, }} className="w-fit rounded-lg bg-white px-2 py-2 text-xs text-slate-600">
                          {place}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="min-w-lg max-w-lg min-h-104.5 max-h-104.5 bg-background-color rounded-lg" />
      )}
    </div>
  );
}
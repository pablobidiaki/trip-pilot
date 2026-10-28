
"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MapPin, CalendarDays, Users, ChevronDown, ArrowRight, Check, Backpack, DollarSign, } from "lucide-react";

interface AnimatedFieldProps {
  label: string,
  icon: ReactNode,
  value: string,
  delay: number,
  started?: boolean;
  suffix?: ReactNode
}

const BLUE = "#65A7FF";
const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedField({ label, icon, value, delay, started, suffix }: AnimatedFieldProps) {
  const [displayed, setDisplayed] = useState("");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!started) return;

    let timeout: ReturnType<typeof setTimeout>;

    const start = setTimeout(() => setFocused(true), delay * 1000);

    const type = (index: number) => {
      setDisplayed(value.slice(0, index));

      if (index < value.length) {
        timeout = setTimeout(() => type(index + 1), 48);
      } else {
        timeout = setTimeout(() => setFocused(false), 650);
      }
    };

    const typing = setTimeout(() => type(1), delay * 1000 + 250);

    return () => {
      clearTimeout(start);
      clearTimeout(typing);
      clearTimeout(timeout);
    };
  }, [value, delay, started]);

  return (
    <motion.div initial={{ opacity: 0, y: 18, scale: 1 }}
      animate={started ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 1 }}
      transition={{ duration: 0.65, delay: started ? delay : 0, ease }}
      className="rounded-2xl border p-4 transition-colors duration-300"
      style={{
        borderColor: focused ? `${BLUE}95` : "#F3F4F6",
        background: focused ? `${BLUE}0D` : "#fff",
        boxShadow: focused ? `0 0 25px ${BLUE}12` : "none",
      }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span style={{ color: focused ? BLUE : "#000" }}>{icon}</span>
        <span className="text-sm font-semibold text-black">
          {label}
        </span>
        <AnimatePresence>
          {!focused && displayed === value && (
            <motion.span
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-auto"
            >
              <Check size={13} color="#86EFAC" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="flex min-h-5 items-center justify-between gap-2">
        <span className="text-sm font-semibold tracking-tight text-gray-500">
          {displayed}
          {focused && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              className="ml-0.5 inline-block h-4 w-0.5 align-middle"
              style={{ background: BLUE }}
            />
          )}
        </span>
        {suffix && <span className="shrink-0 text-white">{suffix}</span>}
      </div>
    </motion.div>
  );
}

export default function TripPilotFormMotion() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started) return;

    const timer = setTimeout(() => setSubmitted(true), 5000);

    return () => clearTimeout(timer);
  }, [started]);

  useEffect(() => {
    if (isInView) {
      setStarted(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="min-h-104.5 max-h-104.5 flex text-white border border-gray-100 rounded-lg bg-white
      md:min-w-lg md:max-w-lg 
      2xl:min-w-md 2xl:max-w-md
    ">
      <motion.div initial={{ opacity: 0, y: 45, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.25, ease }}
        className="py-2 px-3 w-full">
        <h2 className="text-primary-color text-xl font-bold mx-1 mb-5">1º Preencher o formulário</h2>

        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-1">
            <AnimatedField label="Saida"
              icon={<MapPin size={20} />}
              value="Brasil"
              delay={0.5}
              started={started}
              suffix={<ArrowRight size={15} />}
            />

            <AnimatedField label="Destino"
              icon={<MapPin size={20} />}
              value="Japão"
              delay={1.0}
              started={started}
              suffix={<ChevronDown size={15} />}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <AnimatedField label="Duração"
              icon={<CalendarDays size={20} />}
              value="5 dias"
              delay={1.5}
              started={started}
            />
            <AnimatedField label="Viajantes"
              icon={<Users size={20} />}
              value="2 pessoas"
              delay={2.0}
              started={started}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <AnimatedField label="Orçamento"
              icon={<DollarSign size={20} />}
              value="R$ 22,000"
              delay={2.5}
              started={started}
            />
            <AnimatedField label="Tipo"
              icon={<Backpack size={20} />}
              value="Aventura"
              delay={3.0}
              started={started}
            />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.6, ease }}
          className="mt-4">

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="done"
                initial={{ opacity: 0, scale: 1 }}
                animate={
                  started
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 45, scale: 1 }
                }
                transition={{ duration: 0.25, delay: started ? 0.1 : 0, ease }}
                exit={{ opacity: 0, scale: 1 }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border bg-green-500 py-4 text-sm font-bold text-white"
              >
                Nossa IA está criando seu roteiro
              </motion.div>
            ) : (
              <motion.div key="button"
                animate={
                  started
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 45, scale: 1 }
                }
                transition={{ duration: 0.85, delay: started ? 0.25 : 0, ease }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold"
                style={{ background: `linear-gradient(100deg, #397BE6, #7856DD)` }}
              >
                Planejar minha viagem com IA
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

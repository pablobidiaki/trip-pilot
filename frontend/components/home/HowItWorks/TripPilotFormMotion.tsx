
"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CalendarDays, Users, ChevronDown, ArrowRight, Check, Backpack, DollarSign, } from "lucide-react";

interface AnimatedFieldProps {
  label: string,
  icon: ReactNode,
  value: string,
  delay: number,
  suffix?: ReactNode
}

const BLUE = "#65A7FF";
const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedField({ label, icon, value, delay, suffix }: AnimatedFieldProps) {
  const [displayed, setDisplayed] = useState("");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const start = setTimeout(() => setFocused(true), delay * 1000);

    const type = (index: number) => {
      setDisplayed(value.slice(0, index));
      if (index < value.length) timeout = setTimeout(() => type(index + 1), 48);
      else timeout = setTimeout(() => setFocused(false), 650);
    };

    const typing = setTimeout(() => type(1), delay * 1000 + 250);

    return () => {
      clearTimeout(start);
      clearTimeout(typing);
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return (
    <motion.div initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay, ease }}
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
              initial={{ opacity: 0, scale: 0.5 }}
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

  useEffect(() => {
    const timer = setTimeout(() => setSubmitted(true), 7200);
   
    return () => {
      clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="min-w-lg max-w-lg min-h-104.5 max-h-104.5 flex px2 text-white border border-gray-100 rounded-lg bg-white">
        <motion.div initial={{ opacity: 0, y: 45, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease }}
          className="py-2 px-3">
          <h2 className="text-primary-color text-xl font-bold mx-1 mb-5">1º Preencher o formulário</h2>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-1">
              <AnimatedField label="De onde você vai sair?"
                icon={<MapPin size={20} />}
                value="Brasil"
                delay={0.9}
                suffix={<ArrowRight size={15} />}
              />

              <AnimatedField label="Para onde você quer ir?"
                icon={<MapPin size={20} />}
                value="Japão"
                delay={2.1}
                suffix={<ChevronDown size={15} />}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <AnimatedField label="Duração"
                icon={<CalendarDays size={20} />}
                value="5 dias"
                delay={3.1}
              />
              <AnimatedField label="Viajantes"
                icon={<Users size={20} />}
                value="2 pessoas"
                delay={3.7}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <AnimatedField label="Orçamento"
                icon={<DollarSign size={20} />}
                value="R$ 22,000"
                delay={4.5}
              />
              <AnimatedField label="Tipo de viagem"
                icon={<Backpack size={20} />}
                value="Aventura"
                delay={5.3}
              />
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6.2, duration: 0.6, ease }}
            className="mt-4">

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border bg-green-500 py-4 text-sm font-bold text-white"
                >
                  Nossa IA está criando seu roteiro
                </motion.div>
              ) : (
                <motion.div key="button"
                  animate={{ boxShadow: [`0 0 0px ${BLUE}00`, `0 0 30px ${BLUE}25`, `0 0 0px ${BLUE}00`] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
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

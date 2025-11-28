"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { palette } from "@/lib/palette"
import { SectionLabel } from "./section-label"

const borderColor = palette.sand
const accent = palette.brown
const muted = palette.stone

export default function Filosofia() {
  return (
    <section id="filosofia" className="bg-white">

      {/* ======================================================
          BLOQUE 1 — IMÁGENES FULL WIDTH (mobile + desktop)
      ====================================================== */}
      <div className="w-full py-16 bg-white">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Imagen 1 con overlay solo en mobile */}
            <motion.div
              className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src="/images/piscina-lujo.jpg"
                alt="Proyecto de lujo con piscina"
                fill
                className="object-cover"
              />

              {/* TEXTO SOLO EN MOBILE */}
              <div className="md:hidden absolute inset-x-4 top-4 text-white text-sm leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]">
                Nuestra manera de hacer combina conocimiento técnico,
                sensibilidad estética y compromiso con el entorno.
              </div>
            </motion.div>

            {/* Imagen 2 */}
            <motion.div
              className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src="/images/proyecto-lujo-aereo.jpg"
                alt="Proyecto de lujo visto desde el aire"
                fill
                className="object-cover"
              />
            </motion.div>

          </div>
        </div>


        {/* ======================================================
            BLOQUE 1 — TEXTO: NUESTRA MANERA + Ground-Truth / End-to-End (solo desktop se reorganiza)
        ====================================================== */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 mt-10 md:mt-14">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-14 md:mb-16 pb-10 md:pb-16 border-b"
            style={{ borderColor }}
          >

            {/* COLUMNA IZQUIERDA — SOLO DESKTOP */}
            <div className="hidden md:flex items-start">
              <h2
                className="text-[2rem] lg:text-[2.3rem] leading-[1.25] font-light tracking-wide"
                style={{ color: accent }}
              >
                NUESTRA MANERA DE HACER COMBINA <br />
                CONOCIMIENTO TÉCNICO, SENSIBILIDAD <br />
                ESTÉTICA Y COMPROMISO CON EL ENTORNO.
              </h2>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-serif mb-3" style={{ color: accent }}>
                  Ground-Truth Luxury
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>
                  Creamos proyectos que nacen desde la tierra, a partir del
                  conocimiento profundo de cada lugar para potenciar su
                  identidad y valor real.
                </p>
              </div>

              <div className="border-t pt-8" style={{ borderColor }}>
                <h3 className="text-lg font-serif mb-3" style={{ color: accent }}>
                  End-to-End
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>
                  Acompañamos cada etapa del proceso e integramos desarrollo,
                  gestión y capital en un mismo ecosistema.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ======================================================
          BLOQUE 2 — FILOSOFÍA MÉTODO + TARJETAS (mobile + desktop)
      ====================================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 md:mb-10">
        <SectionLabel label="Filosofía Método" />
      </div>

      <div className="bg-white border-t-0" style={{ borderColor }}>
        <div className="max-w-6xl mx-auto px-6 md:px-0 pb-16 md:pb-20">

          {/* Tarjetas — mobile 1 columna / desktop 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            {[
              {
                title: "MISIÓN",
                desc:
                  "Desarrollar proyectos con certeza, combinando diseño, propósito y rentabilidad. Cada desarrollo se concibe desde una gestión integral y responsable, garantizando valor real y sostenible.",
                iconSrc: "/images/simbolo-01.png",
              },
              {
                title: "VISIÓN",
                desc:
                  "Consolidar un modelo de desarrollos con proyección, capaces de trascender fronteras y generar impacto a largo plazo.",
                iconSrc: "/images/simbolo-02.png",
              },
              {
                title: "PROPÓSITO",
                desc:
                  "Crear proyectos que trasciendan. Convirtiendo el desarrollo en una forma de mejorar el entorno y de proyectar el futuro.",
                iconSrc: "/images/simbolo-03.png",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="
                  bg-[#b8b1a7]
                  px-6 py-6 md:px-8 md:py-8
                  grid grid-cols-[75px_1fr] md:grid-cols-1
                  gap-6
                  items-center
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Ícono centrado */}
                <div className="flex items-center justify-center md:mb-6">
                  <img src={item.iconSrc} alt={item.title} className="h-16 w-auto" />
                </div>

                {/* Texto */}
                <div className="text-white text-left md:text-center">
                  <h3 className="text-sm md:text-base font-semibold tracking-[0.18em] mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[0.95rem] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* Línea inferior */}
          <div className="mt-10 border-b" style={{ borderColor }} />
        </div>
      </div>

    </section>
  )
}

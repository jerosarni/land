"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { palette } from "@/lib/palette"
import { SectionLabel } from "./section-label"
import { useLanguage } from "@/components/language-context"

const borderColor = palette.sand
const accent = palette.brown
const muted = palette.stone

export default function Filosofia() {
  const { lang } = useLanguage()

  /* ---------------------------------------------------------
      🌐 TEXTOS EN / ES (todo definido acá mismo)
  --------------------------------------------------------- */
  const copy =
    lang === "en"
      ? {
          mobileOverlay:
            "Our way of working combines technical knowledge, aesthetic sensitivity, sensitivity, and a strongcommitment to the surroundings.",
          mainHeadline:
            "OUR WAY OF WORKING COMBINES TECHNICAL KNOWLEDGE, AESTHETIC SENSITIVITY, AND A STRONG COMMITMENT TO THE SURROUNDINGS.",
          block1_sub:
            "We create projects that are born from the land, based on a deep understanding of each place in order to enhance its identity and real value.",
          block1_sub2:
            "We support every stage of the process and integrate development, management, and capital within a single ecosystem.",
          label: "Philosophy & Method",
          cards: [
            {
              title: "MISSION",
              desc:
                "To develop projects with certainty, combining design, purpose, and profitability. Each development is conceived through comprehensive and responsible management, ensuring real and sustainable value.",
              icon: "/images/simbolo-01.png",
            },
            {
              title: "VISION",
              desc:
                "To consolidate a development model with long-term projection, capable of transcending borders and generating lasting impact.",
              icon: "/images/simbolo-02.png",
            },
            {
              title: "PURPOSE",
              desc:
                "To create projects that transcend. Turning development into a way of improving the surroundings and shaping the future.",
              icon: "/images/simbolo-03.png",
            },
          ],
        }
      : {
          mobileOverlay:
            "Nuestra manera de hacer combina conocimiento técnico, sensibilidad estética y compromiso con el entorno.",
          mainHeadline:
            "NUESTRA MANERA DE HACER COMBINA CONOCIMIENTO TÉCNICO, SENSIBILIDAD ESTÉTICA Y COMPROMISO CON EL ENTORNO.",
          block1_sub:
            "Creamos proyectos que nacen desde la tierra, a partir del conocimiento profundo de cada lugar para potenciar su identidad y valor real.",
          block1_sub2:
            "Acompañamos cada etapa del proceso e integramos desarrollo, gestión y capital en un mismo ecosistema.",
          label: "Filosofía Método",
          cards: [
            {
              title: "MISIÓN",
              desc:
                "Desarrollar proyectos con certeza, combinando diseño, propósito y rentabilidad. Cada desarrollo se concibe desde una gestión integral y responsable, garantizando valor real y sostenible.",
              icon: "/images/simbolo-01.png",
            },
            {
              title: "VISIÓN",
              desc:
                "Consolidar un modelo de desarrollos con proyección, capaces de trascender fronteras y generar impacto a largo plazo.",
              icon: "/images/simbolo-02.png",
            },
            {
              title: "PROPÓSITO",
              desc:
                "Crear proyectos que trasciendan. Convirtiendo el desarrollo en una forma de mejorar el entorno y de proyectar el futuro.",
              icon: "/images/simbolo-03.png",
            },
          ],
        }

  return (
    <section id="filosofia" className="bg-white">

      {/* ======================================================
          BLOQUE 1 — IMÁGENES FULL WIDTH
      ====================================================== */}
      <div className="w-full py-16 bg-white">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Imagen 1 */}
            <motion.div
              className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src="/images/piscina-lujo.jpg"
                alt="Luxury pool project"
                fill
                className="object-cover"
              />

              {/* TEXTO SOLO MOBILE */}
              <div className="md:hidden absolute inset-x-4 top-4 text-white text-sm leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]">
                {copy.mobileOverlay}
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
                alt="Luxury aerial project"
                fill
                className="object-cover"
              />
            </motion.div>

          </div>
        </div>

        {/* ======================================================
            BLOQUE 1 — TEXTO
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
                {copy.mainHeadline.split("<br/>")[0]}
              </h2>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-serif mb-3" style={{ color: accent }}>
                  Ground-Truth Luxury
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>
                  {copy.block1_sub}
                </p>
              </div>

              <div className="border-t pt-8" style={{ borderColor }}>
                <h3 className="text-lg font-serif mb-3" style={{ color: accent }}>
                  End-to-End
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>
                  {copy.block1_sub2}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ======================================================
          BLOQUE 2 — FILOSOFÍA MÉTODO + TARJETAS
      ====================================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 md:mb-10">
        <SectionLabel label={copy.label} />
      </div>

      <div className="bg-white border-t-0" style={{ borderColor }}>
        <div className="max-w-6xl mx-auto px-6 md:px-0 pb-16 md:pb-20">

          {/* Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {copy.cards.map((item, index) => {
              const fromLeft = index === 0 || index === 2

              return (
                <motion.div
                  key={item.title}
                  className="
                    bg-[#b8b1a7]
                    px-6 py-6 md:px-8 md:py-8
                    grid grid-cols-[75px_1fr] md:grid-cols-1
                    gap-6 items-center
                  "
                  initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1.0,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex items-center justify-center md:mb-6">
                    <img src={item.icon} alt={item.title} className="h-16 w-auto" />
                  </div>

                  <div className="text-white text-left md:text-center">
                    <h3 className="text-sm md:text-base font-semibold tracking-[0.18em] mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-[0.95rem] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-10 border-b" style={{ borderColor }} />
        </div>
      </div>

    </section>
  )
}

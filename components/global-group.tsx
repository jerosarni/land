"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { palette } from "@/lib/palette"
import { useLanguage } from "@/components/language-context"

const accent = palette.brown
const body = palette.graphite
const borderColor = palette.sand
const bgSoft = palette.sand

export default function GlobalGroup() {
  const { lang } = useLanguage()

  // 🔤 Textos EN / ES definidos acá mismo
  const copy =
    lang === "en"
      ? {
          label: "Global Group",
          introLine: "Everything we do is born from one belief:",
          headline: "LAND HAS VALUE WHEN ITS IDENTITY IS UNDERSTOOD.",
          introLine2: "That is why we work under our own methodology:",
          methodology: [
            {
              title: "Evaluation",
              desc: "Choosing the right land for each project, not just the land that happens to be available.",
            },
            {
              title: "Certainty",
              desc: "Developing with full legal, technical and environmental compliance.",
            },
            {
              title: "Design",
              desc: "Creating architecture and experiences that are consisten with their surroundings.",
            },
            {
              title: "Management",
              desc: "Operating with measurable and human-centered standards.",
            },
            {
              title: "Capital",
              desc: "Structuring solid investment vehicles.",
            },
          ],
          groundTruthKicker: "Ground-Truth Synergy",
          groundTruthTitle: "Land Global Group",
          groundTruthP1: "has three synergistic business units",
          groundTruthP2:
            "Each project reflects the union of precision, sensitivity and purpose.",
          units: [
            {
              logo: "/images/Logo-Land-Development-color.png",
              desc: "From the strategic selection of land to the full execution of the project. Its focus is planning and technical feasibility.",
            },
            {
              logo: "/images/Logo-Land-Management-color.png",
              desc: "Specializes in hospitality, operations and experiences. It turns development into a living project, with long-term performance and consistency.",
            },
            {
              logo: "/images/Logo-Land-Investment-color.png",
              desc: "Focused on financial structuring and investment models with solidity, traceability and sound fundamentals.",
            },
          ],
        }
      : {
          label: "Global Group",
          introLine: "Nuestro modelo parte de una creencia:",
          headline: "LA TIERRA TIENE VALOR CUANDO SE ENTIENDE SU IDENTIDAD.",
          introLine2: "Por eso trabajamos bajo una metodología propia:",
          methodology: [
            {
              title: "Evaluación",
              desc: "Elegir la tierra correcta para cada proyecto, no sólo la disponible.",
            },
            {
              title: "Certeza",
              desc: "Desarrollar con cumplimiento legal, técnico y ambiental.",
            },
            {
              title: "Diseño",
              desc: "Crear arquitectura y experiencias coherentes con el entorno.",
            },
            {
              title: "Gestión",
              desc: "Operar con estándares medibles y humanos.",
            },
            {
              title: "Capital",
              desc: "Estructurar inversiones sólidas.",
            },
          ],
          groundTruthKicker: "Ground-Truth Sinergy",
          groundTruthTitle: "Land Global Group",
          groundTruthP1:
            "cuenta con tres unidades de negocio sinérgicas entre sí.",
          groundTruthP2:
            "Cada proyecto refleja la unión entre precisión, sensibilidad y propósito.",
          units: [
            {
              logo: "/images/Logo-Land-Development-color.png",
              desc: "Desde la selección estratégica del terreno hasta la ejecución integral del proyecto. Su foco está en la planificación y la viabilidad técnica.",
            },
            {
              logo: "/images/Logo-Land-Management-color.png",
              desc: "Se especializa en hospitalidad, operación y experiencias. Transforma el desarrollo en un proyecto vivo, con performance y consistencia a largo plazo.",
            },
            {
              logo: "/images/Logo-Land-Investment-color.png",
              desc: "Enfocada en estructuración financiera y modelos de inversión con solidez, trazabilidad y sustento.",
            },
          ],
        }

  return (
    <section
      id="global-group"
      className="bg-white border-t"
      style={{ borderColor }}
    >
      {/* ------------------------------------- */}
      {/*     TÍTULO + METODOLOGÍA (1200px)     */}
      {/* ------------------------------------- */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-20 space-y-16">
        <div className="flex flex-col gap-8">
          <motion.div
            className="text-[0.85rem] uppercase tracking-[0.35em] font-semibold flex items-center gap-2"
            style={{ color: palette.bronze }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="text-lg" style={{ color: accent }}>
              &gt;
            </span>
            {copy.label}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16">
            {/* Texto principal */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-[18px]" style={{ color: palette.stone }}>
                {copy.introLine}
              </p>
              <h3
                className="uppercase font-serif text-[32px] md:text-[42px] leading-tight tracking-[0.08em]"
                style={{ color: accent }}
              >
                {copy.headline}
              </h3>
              <p className="text-[18px]" style={{ color: palette.stone }}>
                {copy.introLine2}
              </p>
            </motion.div>

            {/* Metodología */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {copy.methodology.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: 0.1 + index * 0.12,
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <div
                    className="flex items-start gap-2 text-[18px]"
                    style={{ color: accent }}
                  >
                    <span className="text-lg">&gt;</span>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <p className="text-[16px]" style={{ color: body }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/*   GROUND-TRUTH + IMAGEN (BLOQUE FULL-WIDTH)      */}
      {/* ------------------------------------------------ */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-0 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-center gap-0">
            {/* Texto */}
            <motion.div
              className="bg-white py-8 pr-8 lg:pl-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p
                className="uppercase tracking-[0.3em] text-[0.8rem] mb-2"
                style={{ color: palette.stone }}
              >
                {copy.groundTruthKicker}
              </p>
              <h4
                className="text-[26px] lg:text-[30px] font-serif mb-4"
                style={{ color: accent }}
              >
                {copy.groundTruthTitle}
              </h4>
              <p className="text-[17px] mb-2" style={{ color: body }}>
                {copy.groundTruthP1}
              </p>
              <p className="text-[17px]" style={{ color: body }}>
                {copy.groundTruthP2}
              </p>
            </motion.div>

            {/* Imagen */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src="/images/casa-origen.jpg"
                alt="Casa Origen"
                width={1600}
                height={900}
                className="w-full h-[260px] md:h-[380px] lg:h-[460px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#d8d6d0bb] via-transparent to-transparent z-10" />
              <div className="absolute inset-y-6 right-6 w-32 border border-white/60 rounded-full opacity-70 z-20" />
              <div className="absolute inset-y-10 right-0 w-[260px] border border-white/40 rounded-full opacity-50 z-20" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#00000040] to-transparent z-10" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ------------------------ */}
      {/*   TRES UNIDADES DE LAND  */}
      {/* ------------------------ */}
      <div className="border-t" style={{ borderColor, background: bgSoft }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {copy.units.map((unit, index) => (
            <motion.div
              key={unit.logo}
              className="space-y-4 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.1 + index * 0.15,
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="w-full flex md:block justify-center">
                <Image
                  src={unit.logo}
                  alt="Logo Land"
                  width={220}
                  height={72}
                  className="h-auto w-auto max-w-[220px]"
                />
              </div>
              <p
                className="text-[15px] leading-relaxed"
                style={{ color: body }}
              >
                {unit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

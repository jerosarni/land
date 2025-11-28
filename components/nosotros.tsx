"use client"

import { motion } from "framer-motion"
import { palette } from "@/lib/palette"
import { useLanguage } from "@/components/language-context"

const headlineColor = palette.brown
const bodyColor = palette.graphite
const borderColor = palette.sand
const accentColor = palette.bronze

export default function Nosotros() {
  const { lang } = useLanguage()

  // 👇 Textos EN / ES definidos acá mismo
  const copy =
    lang === "en"
      ? {
          label: "About Us",
          headline: "EVERY PROJECT STARTS FROM THE LAND.",
          sublead:
            "There, where the idea is planted, value is built and the future is projected.",
          p1: "We are a development group with presence in Latin America and the United States.",
          p2: "We specialize in creating projects with a strong identity, where design, management, and profitability coexist in balance.",
          taglinePrefix: "This is how",
        }
      : {
          label: "Nosotros",
          headline: "TODO PROYECTO EMPIEZA EN LA TIERRA.",
          sublead:
            "Ahí, donde se siembra la idea es donde se construye el valor y se proyecta el futuro.",
          p1: "Somos un grupo desarrollador con presencia en Latinoamérica y Estados Unidos.",
          p2: "Nos especializamos en crear proyectos con identidad, donde diseño, gestión y rentabilidad conviven en equilibrio.",
          taglinePrefix: "Así nace",
        }

  return (
    <section
      id="nosotros"
      className="bg-white border-t pt-8 pb-0 overflow-hidden"
      style={{ borderColor }}
    >
      {/* ---------- LABEL ---------- */}
      <div className="max-w-[1040px] mx-auto px-4 lg:px-0 pb-0">
        <motion.div
          className="text-[0.78rem] uppercase tracking-[0.28em] font-semibold mb-7 flex items-center gap-2"
          style={{ color: accentColor }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className="text-xl" style={{ color: palette.brown }}>
            &gt;
          </span>{" "}
          {copy.label}
        </motion.div>
      </div>

      {/* ============= MOBILE VERSION ============= */}
      <div className="block lg:hidden">
        {/* 🚧 EXCAVADORA – ENTRA DESDE IZQUIERDA MÁS LENTO */}
        <motion.div
          className="relative px-0"
          initial={{ opacity: 0, x: -110 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src="/images/excavadora.jpg"
            className="w-full h-[280px] object-cover rounded-r-[180px]"
            alt="Obra en construcción"
          />

          <div className="absolute left-6 bottom-6 text-white drop-shadow-lg">
            <h2 className="font-serif text-2xl leading-tight uppercase">
              {copy.headline}
            </h2>
          </div>
        </motion.div>

        {/* 🌙 MASTERPLAN – ENTRA DESDE DERECHA MÁS SUAVE */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, x: 110 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src="/images/proyecto-nocturno.jpg"
            className="w-full h-auto object-cover"
            alt="Masterplan nocturno"
          />
        </motion.div>

        {/* 📝 TEXTO – ENTRA DESDE IZQUIERDA SUAVE */}
        <motion.div
          className="px-6 mt-10 space-y-5 text-[15px] leading-relaxed"
          style={{ color: bodyColor }}
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p>{copy.p1}</p>
          <p>{copy.p2}</p>
          <p
            className="font-serif tracking-[0.24em] uppercase text-[0.8rem] pt-2"
            style={{ color: accentColor }}
          >
            {copy.taglinePrefix}{" "}
            <span
              className="font-semibold tracking-[0.14em]"
              style={{ color: palette.brown }}
            >
              LAND GLOBAL GROUP 
            </span>
          </p>
        </motion.div>
      </div>

      {/* ============= DESKTOP VERSION ============= */}
      <div className="hidden lg:block">
        <div className="max-w-[1040px] mx-auto px-4 lg:px-0 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 items-stretch">
            {/* 🚧 EXCAVADORA DESKTOP – LENTO Y FINO */}
            <motion.div
              className="relative max-w-[520px] w-full mx-auto lg:mx-0 lg:-ml-28 -mt-8 lg:-mt-14 -mb-6 lg:-mb-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="overflow-hidden shadow-lg shadow-black/10 h-full min-h-[420px] rounded-r-[320px]">
                <img
                  src="/images/excavadora.jpg"
                  alt="Obra en construcción"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* 📄 TEXTO + FOTO MASTERPLAN DESKTOP – SUAVE */}
            <motion.div
              className="space-y-6 lg:space-y-7 pb-10 lg:pb-12 lg:pl-5"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div>
                <h3
                  className="font-serif text-[28px] lg:text-[38px] leading-[1.2] tracking-[0.08em] uppercase"
                  style={{ color: headlineColor }}
                >
                  {copy.headline}
                </h3>
                <p
                  className="text-[15px] mt-3 leading-relaxed max-w-[380px]"
                  style={{ color: bodyColor }}
                >
                  {copy.sublead}
                </p>
              </div>

              <div className="w-full max-w-[380px]">
                <img
                  src="/images/proyecto-nocturno.jpg"
                  alt="Masterplan nocturno"
                  className="w-full object-cover rounded-[18px]"
                />
              </div>

              <div
                className="space-y-3.5 text-[15px] leading-relaxed"
                style={{ color: bodyColor }}
              >
                <p>{copy.p1}</p>
                <p>{copy.p2}</p>
                <p
                  className="font-serif tracking-[0.24em] uppercase text-[0.8rem] pt-3"
                  style={{ color: accentColor }}
                >
                  {copy.taglinePrefix}{" "}
                  <span
                    className="font-semibold tracking-[0.14em]"
                    style={{ color: palette.brown }}
                  >
                    LAND GLOBAL GROUP
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

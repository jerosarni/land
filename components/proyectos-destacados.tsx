"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

import { palette } from "@/lib/palette"
import { SectionLabel } from "./section-label"

const proyectos = [
  {
    name: "Lauderhill Commons",
    location: "Florida, USA",
    image: "/images/lauderhill-commons.jpg",
    description:
      "Desarrollo residencial de 278 unidades de alquiler, integrando vivienda, servicios y entretenimiento.",
    qhicimos: "Estructuración del proyecto, planificación y diseño urbano.",
    adn: "Un modelo de multifamily moderno, diseñado para generar valor sostenido a través de gestión eficiente y diseño funcional.",
    unit: "LAND DEVELOPMENT",
  },
  {
    name: "Casa Origen",
    location: "Valle de Uco, Mendoza, Argentina",
    image: "/images/casa-origen-proyecto.jpg",
    description:
      "Desarrollo integral en el corazón del Valle de Uco bajo la firma Autograph Collection by Marriott, que combina hotel boutique, branded residences, bodega y gastronomía en un mismo concepto.",
    qhicimos:
      "Desarrollo conceptual, estructuración técnica y financiera, selección de partners estratégicos y dirección general del proyecto.",
    adn: "Un desarrollo que sintetiza identidad local y proyección global, transformando territorio en experiencia y legado.",
    unit: "LAND DEVELOPMENT",
  },
  {
    name: "Horizons at Sunbridge",
    location: "Orlando, Florida",
    image: "/images/horizons-sunbridge.jpg",
    description:
      "Complejo residencial de 70 unidades dentro del nuevo distrito Sunbridge, diseñado para combinar naturaleza, comunidad y confort contemporáneo.",
    qhicimos: "Desarrollo del concepto, planificación y gestión técnica del proyecto.",
    adn: "Precisión técnica y visión urbana aplicada a uno de los planes maestros más innovadores de Florida.",
    unit: "LAND DEVELOPMENT",
  },
  {
    name: "43 Westwood",
    location: "Orlando, Florida",
    image: "/images/43-westwood.jpg",
    description:
      "Conjunto de townhomes premium de 3 habitaciones ubicados frente al Lago Willis, en el área sur de Orlando, a minutos de Sea World, Disney World, Universal Studios y Disney Springs.",
    qhicimos:
      "Desarrollo integral del proyecto, estructuración financiera, planificación técnica y acompañamiento en la gestión comercial.",
    adn: "Un modelo residencial innovador que redefine el lifestyle de Orlando, integrando arquitectura contemporánea, comunidad y rentabilidad sostenida.",
    unit: "LAND DEVELOPMENT",
  },
  {
    name: "Marriott Immigna",
    location: "La Paz, Baja California Sur, México",
    image: "/images/marriott-immigna.jpg",
    description:
      "Proyecto hotelero en Paraíso del Mar, en alianza con Marriott International, inspirado en la leyenda local de la princesa Immigna. Concepto resort inmersivo frente al Mar de Cortés.",
    qhicimos:
      "Desarrollo conceptual, dirección de diseño arquitectónico, planificación integral del sitio y coordinación con Marriott para la implementación del estándar de marca.",
    adn: "Un proyecto que combina bioarquitectura, sostenibilidad y hospitalidad de lujo, transformando el desierto y el mar en una experiencia de conexión y legado.",
    unit: "LAND DEVELOPMENT",
  },
  {
    name: "Heritage at Sunbridge",
    location: "Orlando, Florida",
    image: "/images/heritage-sunbridge.jpg",
    description:
      "Desarrollo residencial de 108 unidades dentro del masterplan Sunbridge, pensado para familias que buscan un entorno natural y calidad de vida.",
    qhicimos: "Estructuración financiera, desarrollo técnico y gestión del diseño arquitectónico.",
    adn: "Una propuesta que combina inversión inteligente con bienestar, sostenibilidad y diseño contemporáneo.",
    unit: "LAND DEVELOPMENT",
  },
  {
    name: "Marriott Santa Cruz de la Sierra",
    location: "Bolivia",
    image: "/images/marriott-scz.jpg",
    description:
      "Hotel cinco estrellas ubicado en el corazón empresarial de Equipetrol, la zona más exclusiva de Santa Cruz de la Sierra. El edificio cuenta con 172 habitaciones distribuidas en 20 pisos.",
    qhicimos:
      "LAND Management & Consulting (LMC) lidera la gestión integral del activo, incluyendo asset management, supervisión operativa y coordinación estratégica con la cadena Marriott International.",
    adn: "Una operación que refleja la filosofía de LAND: combinar excelencia en la gestión hotelera con visión financiera y una administración eficiente orientada a resultados sostenibles.",
    unit: "LAND MANAGEMENT & CONS.",
  },
  {
    name: "Our Orlando",
    location: "Orlando, Florida",
    image: "/images/our-orlando.jpg",
    description:
      "Proyecto de 128 habitaciones completamente equipados bajo la nueva marca Apartments by Marriott Bonvoy (AMB), ubicado en Dr. Phillips, frente a Universal Studios.",
    qhicimos:
      "Desarrollo integral, estructuración financiera y acompañamiento en la gestión con Marriott International.",
    adn: "Un proyecto que traduce la visión de LAND: conectar desarrollo inmobiliario con las principales marcas hoteleras del mundo.",
    unit: "LAND DEVELOPMENT",
  },
  {
    name: "Westside Villages",
    location: "Osceola, Florida",
    image: "/images/westside-villages.jpg",
    description:
      "Residencias contemporáneas en Osceola, a minutos de Disney World. Diseño moderno, entorno natural y confort exclusivo.",
    qhicimos: "Conceptualización y planificación arquitectónica junto al equipo local.",
    adn: "Desarrollo que une lifestyle y rentabilidad en una de las zonas más dinámicas del centro de Florida.",
    unit: "LAND DEVELOPMENT",
  },
]

// foo.jpg -> foo-mobile.jpg
const getMobileImage = (src: string) => {
  const dotIndex = src.lastIndexOf(".")
  if (dotIndex === -1) return src
  return `${src.slice(0, dotIndex)}-mobile${src.slice(dotIndex)}`
}

export default function ProyectosDestacados() {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? proyectos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === proyectos.length - 1 ? 0 : prev + 1))
  }

  const proyecto = proyectos[current]

  return (
    <section
      id="proyectos"
      className="bg-white border-t w-full"
      style={{ borderColor: palette.sand }}
    >
      <div className="w-full py-16 space-y-8">
        {/* Label animado */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="px-6 lg:px-10"
        >
          <SectionLabel label="Proyectos Destacados" />
        </motion.div>

        {/* ----- MOBILE: carrusel con imagen -mobile completa ----- */}
        <div className="md:hidden">
          <div className="relative w-full">
            <motion.div
              key={proyecto.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={getMobileImage(proyecto.image)}
                alt={proyecto.name}
                width={1200}
                height={1800}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* ----- DESKTOP: hero grande ----- */}
        <div className="hidden md:block">
          <div className="relative w-full h-[75vh] min-h-[480px] overflow-hidden">
            <motion.div
              key={proyecto.name}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={proyecto.image}
                alt={proyecto.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* ----- CONTROLES: flechas + puntos (mobile + desktop) ----- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-5"
        >
          {/* Flecha izquierda */}
          <button
            onClick={handlePrev}
            aria-label="Proyecto anterior"
            className="w-10 h-10 flex items-center justify-center rounded-full transition hover:brightness-110 shadow-sm"
            style={{
              backgroundColor: palette.brown,
            }}
          >
            <ChevronLeft size={18} color="white" />
          </button>

          {/* Puntos */}
          <div className="flex gap-3">
            {proyectos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2.5 h-2.5 rounded-full transition"
                style={{
                  backgroundColor:
                    i === current ? palette.brown : palette.sand,
                }}
                aria-label={`Ir al proyecto ${i + 1}`}
              />
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={handleNext}
            aria-label="Proyecto siguiente"
            className="w-10 h-10 flex items-center justify-center rounded-full transition hover:brightness-110 shadow-sm"
            style={{
              backgroundColor: palette.brown,
            }}
          >
            <ChevronRight size={18} color="white" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

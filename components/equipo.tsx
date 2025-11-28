"use client"

import { palette } from "@/lib/palette"
import { SectionLabel } from "./section-label"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"

const borderColor = palette.sand
const headingColor = palette.brown
const subheadingColor = palette.bronze
const bodyColor = palette.graphite

export default function Equipo() {
  const { lang } = useLanguage()

  // 👇 Textos EN / ES definidos acá mismo
  const copy =
    lang === "en"
      ? {
          sectionLabel: "Team",
          mainHeading: "THREE COMPLEMENTARY VISIONS WITH A SHARED PURPOSE.",
          subtitle:
            "OUR TEAM IS COMMITTED TO TRANSFORMING PROJECTS THROUGH SUSTAINABLE AND INNOVATIVE SOLUTIONS.",
          executivesLabel: "Executives",
          executives: [
            {
              name: "Diego Besga",
              role: "CEO",
              company: "LAND Development",
              image: "/images/diego-besga.jpg",
              desc:
                "Leads LAND Development. Combines technical expertise with strategic vision to transform land into projects.",
            },
            {
              name: "Luciano Gesuiti",
              role: "CFO",
              company: "LAND Investments",
              image: "/images/luciano-gesuiti.jpg",
              desc:
                "Leads LAND Investments. Designs financial structures and participation models that ensure transparency and sustainable growth.",
            },
            {
              name: "Adrián Bossi",
              role: "Head of Hospitality",
              company: "LAND Management & Consulting (LMC)",
              image: "/images/adrian-bossi.jpg",
              desc:
                "Leads LAND Management & Consulting (LMC). Turns each development into an experience of service, wellbeing, and real performance.",
            },
          ],
          team: [
            {
              name: "Scott Johnston",
              role: "Head of Development",
              desc:
                "Architect with more than 25 years of experience leading and executing all phases of real estate projects, from land acquisition and development to joint ventures, financing and construction.",
            },
            {
              name: "Juan Paredes",
              role: "Director of Hospitality Development",
              desc:
                "Over 25 years of experience in hotel and real estate development. Oversees the full project lifecycle —from concept and design to opening— ensuring international standards and operational profitability.",
            },
            {
              name: "Walter Hufschmid",
              role: "Head of Construction",
              desc:
                "Holds a master’s degree in architecture and has more than 30 years of experience in design, construction execution and urban planning.",
            },
            {
              name: "Fernando Sarni",
              role: "Corporate Head of Branding & Marketing",
              desc:
                "Over 20 years of experience in branding, marketing strategy and storytelling for global brands. Specialist in positioning, communication and value narrative for signature real estate and hospitality projects.",
            },
          ],
        }
      : {
          sectionLabel: "Equipo",
          mainHeading: "TRES VISIONES COMPLEMENTARIAS CON UN MISMO PROPÓSITO.",
          subtitle:
            "NUESTRO EQUIPO ESTÁ COMPROMETIDO CON TRANSFORMAR PROYECTOS A TRAVÉS DE SOLUCIONES SOSTENIBLES E INNOVADORAS.",
          executivesLabel: "Equipo ampliado",
          executives: [
            {
              name: "Diego Besga",
              role: "CEO",
              company: "LAND Development",
              image: "/images/diego-besga.jpg",
              desc:
                "Dirige LAND Development. Combina conocimiento técnico con visión estratégica para transformar tierra en proyectos.",
            },
            {
              name: "Luciano Gesuiti",
              role: "CFO",
              company: "LAND Investments",
              image: "/images/luciano-gesuiti.jpg",
              desc:
                "Conduce LAND Investments. Diseña estructuras financieras y modelos de participación que garantizan transparencia y crecimiento sostenible.",
            },
            {
              name: "Adrián Bossi",
              role: "Head of Hospitality",
              company: "LAND Management & Consulting (LMC)",
              image: "/images/adrian-bossi.jpg",
              desc:
                "Lidera LAND Management & Consulting (LMC). Convierte cada desarrollo en una experiencia de servicio, bienestar y performance real.",
            },
          ],
          team: [
            {
              name: "Scott Johnston",
              role: "Head of Development",
              desc:
                "Arquitecto con más de 25 años de experiencia en liderar y ejecutar todas las fases de proyectos de real estate desde la adquisición de tierras, desarrollo, joint ventures, financiación y construcción.",
            },
            {
              name: "Juan Paredes",
              role: "Director of Hospitality Development",
              desc:
                "Más de 25 años de experiencia en desarrollo hotelero y real estate. Supervisa el ciclo completo de proyectos —desde la concepción y diseño hasta la apertura— garantizando estándares internacionales y rentabilidad operativa.",
            },
            {
              name: "Walter Hufschmid",
              role: "Head of Construction",
              desc:
                "Cuenta con un máster en arquitectura y más de 30 años de experiencia en diseño y ejecución de obras y planeamiento urbano.",
            },
            {
              name: "Fernando Sarni",
              role: "Corporate Head of Branding & Marketing",
              desc:
                "Más de 20 años de trayectoria en branding, estrategia de marketing y storytelling para marcas globales. Especialista en posicionamiento, comunicación y narrativa de valor para proyectos inmobiliarios y hoteleros de autor.",
            },
          ],
        }

  return (
    <section
      id="equipo"
      className="py-20 bg-white border-t"
      style={{ borderColor }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <SectionLabel label={copy.sectionLabel} />

        <h3
          className="text-3xl font-serif mt-8 mb-4"
          style={{ color: headingColor }}
        >
          {copy.mainHeading}
        </h3>

        <p
          className="text-sm mb-16 tracking-[0.2em]"
          style={{ color: subheadingColor }}
        >
          {copy.subtitle}
        </p>

        {/* EXECUTIVES: MOBILE (inline) + DESKTOP (3-column) */}
        <div
          className="
          flex flex-col space-y-14
          md:grid md:grid-cols-3 md:gap-10 md:space-y-0
        "
        >
          {copy.executives.map((exec, i) => (
            <motion.div
              key={exec.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
              viewport={{ once: true }}
              className="w-full"
            >
              {/* DESKTOP → imagen arriba centrada */}
              <img
                src={exec.image}
                alt={exec.name}
                className="
                  w-full h-64 object-cover grayscale mb-6
                  hidden md:block
                "
              />

              {/* MOBILE → imagen izquierda + texto derecha */}
              <div className="md:hidden flex items-start gap-5">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-32 h-32 object-cover grayscale flex-shrink-0"
                />
                <div>
                  <h4
                    className="font-serif text-lg mb-1 flex items-center"
                    style={{ color: headingColor }}
                  >
                    <span className="mr-2 text-[10px]">▸</span>
                    {exec.name}
                    <span
                      className="ml-1 font-sans text-sm"
                      style={{ color: subheadingColor }}
                    >
                      / {exec.role}
                    </span>
                  </h4>
                  <p
                    className="text-sm mb-3"
                    style={{ color: bodyColor }}
                  >
                    {exec.company}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: bodyColor }}
                  >
                    {exec.desc}
                  </p>
                </div>
              </div>

              {/* DESKTOP TEXT CENTERED */}
              <div className="hidden md:block text-center">
                <h4
                  className="font-serif text-xl mb-1"
                  style={{ color: headingColor }}
                >
                  {exec.name}
                  <span
                    className="ml-1 text-sm font-sans"
                    style={{ color: subheadingColor }}
                  >
                    / {exec.role}
                  </span>
                </h4>

                <p
                  className="text-sm mb-3"
                  style={{ color: bodyColor }}
                >
                  {exec.company}
                </p>

                <p
                  className="mx-auto text-sm leading-relaxed max-w-xs"
                  style={{ color: bodyColor }}
                >
                  {exec.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <hr
          className="border-t mt-16 mb-16"
          style={{ borderColor }}
        />

        {/* RESTO DEL EQUIPO */}
        <h3
          className="text-sm tracking-[0.35em] uppercase mb-12"
          style={{ color: subheadingColor }}
        >
          {copy.executivesLabel}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {copy.team.map((m) => (
            <div key={m.name}>
              <h4
                className="font-serif text-lg mb-1"
                style={{ color: headingColor }}
              >
                {m.name}
              </h4>
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: subheadingColor }}
              >
                {m.role}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: bodyColor }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

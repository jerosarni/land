import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import Nosotros from "@/components/nosotros"
import Filosofia from "@/components/filosofia"
import GlobalGroup from "@/components/global-group"
import Equipo from "@/components/equipo"
import ProyectosDestacados from "@/components/proyectos-destacados"
import Contacto from "@/components/contacto"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Nosotros />
      <Filosofia />
      <GlobalGroup />
      <Equipo />
      <ProyectosDestacados />
      <Contacto />
    </div>
  )
}

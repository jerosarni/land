"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const logo = "/images/Logo-Land-Global-blanco.png"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300
      ${scrolled
        ? "bg-black/30 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.25)] border-white/15"
        : "bg-transparent border-transparent shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* ✅ LOGO CLICKABLE */}
        <a href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Land Global Group"
            width={120}
            height={32}
            className="w-auto h-8 cursor-pointer"
            priority
          />
        </a>

        <ul className="hidden md:flex items-center gap-10 text-white text-sm tracking-[0.2em]">
          {[
            { href: "#nosotros", label: "Nosotros" },
            { href: "#filosofia", label: "Filosofía Método" },
            { href: "#global-group", label: "Global Group" },
            { href: "#equipo", label: "Equipo" },
            { href: "#proyectos", label: "Proyectos Destacados" },
            { href: "#contacto", label: "Contacto" },
          ].map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white/80 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

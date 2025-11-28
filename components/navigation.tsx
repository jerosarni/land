"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"

const logo = "/images/Logo-Land-Global-blanco.png"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Links según idioma
  const links =
    lang === "en"
      ? [
          { href: "#nosotros", label: "About Us" },
          { href: "#filosofia", label: "Philosophy & Method" },
          { href: "#global-group", label: "Global Group" },
          { href: "#equipo", label: "Team" },
          { href: "#proyectos", label: "Featured Projects" },
          { href: "#contacto", label: "Contact" },
        ]
      : [
          { href: "#nosotros", label: "Nosotros" },
          { href: "#filosofia", label: "Filosofía Método" },
          { href: "#global-group", label: "Global Group" },
          { href: "#equipo", label: "Equipo" },
          { href: "#proyectos", label: "Proyectos Destacados" },
          { href: "#contacto", label: "Contacto" },
        ]

  const toggleLang = () => setLang(lang === "en" ? "es" : "en")

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300
      ${
        scrolled
          ? "bg-black/30 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.25)] border-white/15"
          : "bg-transparent border-transparent shadow-none"
      }`}
    >
      {/* relative para posicionar el botón mobile */}
      <div className="relative max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
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

        <div className="flex items-center gap-4">
          {/* LINKS DESKTOP */}
          <ul className="hidden md:flex items-center gap-10 text-white text-sm tracking-[0.2em]">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-white/80 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* SELECTOR EN/ES DESKTOP */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/40 bg-black/40 px-1 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em]">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded-full transition ${
                lang === "en"
                  ? "bg-white text-black"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`px-2 py-1 rounded-full transition ${
                lang === "es"
                  ? "bg-white text-black"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              ES
            </button>
          </div>
        </div>

        {/* SELECTOR EN/ES MOBILE – arriba a la derecha, donde marcaste */}
        <button
          type="button"
          onClick={toggleLang}
          className="
            md:hidden
            absolute
            top-5
            right-6
            px-3 py-1
            border border-white/60
            text-white
            rounded-full
            text-xs
            tracking-[0.18em]
            uppercase
            backdrop-blur-sm
          "
        >
          {lang.toUpperCase()}
        </button>
      </div>
    </nav>
  )
}

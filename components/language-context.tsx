"use client"

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"

type Lang = "en" | "es"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 👉 por defecto INGLÉS
  const [lang, setLang] = useState<Lang>("en")

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}

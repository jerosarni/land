"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

import { palette } from "@/lib/palette"
import { SectionLabel } from "./section-label"
import { useLanguage } from "@/components/language-context"

export default function Contacto() {
  const { lang } = useLanguage()

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  )

  // ============================
  // 📌 TEXTOS EN / ES
  // ============================
  const copy =
    lang === "en"
      ? {
          sectionLabel: "Contact",
          emailLabel: "E-mail:",
          fields: [
            { name: "nombre", label: "Name" },
            { name: "email", label: "Email" },
            { name: "asunto", label: "Subject" },
          ] as const,
          messageLabel: "Message",
          buttonIdle: "Send",
          buttonSending: "Sending...",
          successTag: "Thank you",
          successText:
            "Thank you for your message. We will get back to you shortly.",
          errorText:
            "An error occurred while sending your message. Please try again.",
          subjectPrefix: "New message from LAND DV",
        }
      : {
          sectionLabel: "Contacto",
          emailLabel: "E-Mail:",
          fields: [
            { name: "nombre", label: "Nombre" },
            { name: "email", label: "Email" },
            { name: "asunto", label: "Asunto" },
          ] as const,
          messageLabel: "Mensaje",
          buttonIdle: "Enviar",
          buttonSending: "Enviando...",
          successTag: "Gracias",
          successText:
            "Gracias por enviarnos tu mensaje. Nos pondremos en contacto a la brevedad.",
          errorText:
            "Ocurrió un error al enviar el mensaje. Por favor, inténtalo nuevamente.",
          subjectPrefix: "Nuevo mensaje desde LAND DV",
        }

  // ================================
  // 📌 BANNER MOBILE SEGÚN IDIOMA
  // ================================

  const mobileBanner =
    lang === "en"
      ? "/images/contact-banner-mobile.png" // El que tiene "Contact"
      : "/images/contacto-banner-mobile.png" // El que tiene "Contacto"

  // ============================
  // 📌 HANDLERS
  // ============================

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@landdv.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          asunto: formData.asunto,
          mensaje: formData.mensaje,
          _subject: `${copy.subjectPrefix}: ${
            formData.asunto ||
            (lang === "en" ? "Web contact" : "Contacto web")
          }`,
        }),
      })

      if (!response.ok) {
        throw new Error("Error")
      }

      setStatus("success")
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="contacto"
      className="py-20 space-y-12 scroll-mt-32 md:scroll-mt-40"
      style={{ backgroundColor: palette.stone }}
    >
      {/* ===================== */}
      {/* BANNER MOBILE         */}
      {/* ===================== */}
      <motion.div
        className="md:hidden relative w-full"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Image
          src={mobileBanner}
          alt={copy.sectionLabel}
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      {/* ===================== */}
      {/* BANNER DESKTOP        */}
      {/* ===================== */}
      <motion.div
        className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] hidden md:block"
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src="/images/web-land-filo-meto.jpg"
          alt="LAND message"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* ===================== */}
      {/* TEXTO + FORMULARIO   */}
      {/* ===================== */}

      <div className="max-w-6xl mx-auto px-6 lg:px-10 text-white space-y-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <SectionLabel
              label={copy.sectionLabel}
              color="#ffffff"
              arrowColor="#ffffff"
              className="mb-10"
            />

            <div className="mb-12 space-y-4 text-base">
              <Image
                src="/images/Logo-Land-Global-blanco.png"
                alt="Land Global Group"
                width={140}
                height={40}
                className="w-auto h-10"
              />

              <p>
                <span className="font-semibold">{copy.emailLabel}</span>{" "}
                info@landdv.com
              </p>

              <p>
                20801 Biscayne Blvd., Suite 403
                <br />
                Aventura, FL 33180
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {copy.fields.map((field) => (
              <div key={field.name}>
                <label className="text-sm uppercase tracking-[0.35em]">
                  {field.label}
                </label>
                <input
                  type={field.name === "email" ? "email" : "text"}
                  name={field.name}
                  required
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/60 text-white pb-3 text-sm focus:outline-none"
                />
              </div>
            ))}

            <div>
              <label className="text-sm uppercase tracking-[0.35em]">
                {copy.messageLabel}
              </label>
              <textarea
                name="mensaje"
                required
                value={formData.mensaje}
                onChange={handleChange}
                rows={6}
                className="w-full bg-transparent border border-white/60 text-white p-4 text-sm focus:outline-none resize-none mt-3 rounded-[20px]"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.03 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.97 }}
                className="bg-white text-[#7d6d5d] px-10 py-2 rounded-full font-semibold text-sm hover:bg-[#f2f0ec] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? copy.buttonSending
                  : copy.buttonIdle}
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* SUCCESS */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-6xl mx-auto rounded-2xl bg-white/95 text-[#7d6d5d] px-6 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.18)]"
          >
            <div className="flex flex-col gap-0.5 text-sm md:text-base">
              <span className="font-semibold uppercase tracking-[0.25em] text-xs">
                {copy.successTag}
              </span>
              <span>{copy.successText}</span>
            </div>
          </motion.div>
        )}

        {/* ERROR */}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-6xl mx-auto rounded-2xl bg-red-600/90 text-white px-6 py-3 text-sm md:text-base"
          >
            {copy.errorText}
          </motion.div>
        )}
      </div>
    </section>
  )
}

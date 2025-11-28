"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

import { palette } from "@/lib/palette"
import { SectionLabel } from "./section-label"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          _subject: `Nuevo mensaje desde LAND DV: ${formData.asunto || "Contacto web"}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al enviar")
      }

      setStatus("success")
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })
    } catch (error) {
      console.error(error)
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
      {/* CABECERA MOBILE NUEVA */}
      {/* ===================== */}
      <motion.div
        className="md:hidden relative w-full"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Image
          src="/images/contacto-banner-mobile.png" 
          alt="LAND Global Group mensaje"
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      {/* ========================== */}
      {/* CABECERA DESKTOP ORIGINAL */}
      {/* ========================== */}
      <motion.div
        className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] hidden md:block"
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src="/images/web-land-filo-meto.jpg"
          alt="Mensaje corporativo LAND Global Group"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* ========================== */}
      {/* CONTENIDO + FORMULARIO     */}
      {/* ========================== */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 text-white space-y-10">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <SectionLabel
              label="Contacto"
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
                <span className="font-semibold">E-Mail:</span> info@landdv.com
              </p>

              <p>
                20801 Biscayne Blvd., Suite 403
                <br />
                Aventura, FL 33180
              </p>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {[
              { name: "nombre", label: "Nombre" },
              { name: "email", label: "Email" },
              { name: "asunto", label: "Asunto" },
            ].map((field) => (
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
              <label className="text-sm uppercase tracking-[0.35em]">Mensaje</label>
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
                {status === "sending" ? "Enviando..." : "Enviar"}
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Feedback */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-6xl mx-auto rounded-2xl bg-white/95 text-[#7d6d5d] px-6 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.18)]"
          >
            <div className="flex flex-col gap-0.5 text-sm md:text-base">
              <span className="font-semibold uppercase tracking-[0.25em] text-xs">
                Gracias
              </span>
              <span>
                Gracias por enviarnos tu mensaje. Nos pondremos en contacto a la brevedad.
              </span>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-6xl mx-auto rounded-2xl bg-red-600/90 text-white px-6 py-3 text-sm md:text-base"
          >
            Ocurrió un error al enviar el mensaje. Por favor, inténtalo nuevamente.
          </motion.div>
        )}
      </div>
    </section>
  )
}

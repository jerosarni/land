"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {

  const backgroundImage = "/images/lcom1.jpg" // MISMA IMAGEN PARA TODO

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Fondo con animación */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/25" />
      </motion.div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col items-center justify-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          <Image
            src="/images/Logo-Land-Global-blanco.png"
            alt="LAND Global Group"
            width={300}
            height={80}
            className="w-auto h-20 md:h-24"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}

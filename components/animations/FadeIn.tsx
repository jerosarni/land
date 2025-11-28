"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

type FadeInProps = {
  children: ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

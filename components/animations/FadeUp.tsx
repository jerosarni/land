"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  delay?: number
}

export default function FadeUp({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

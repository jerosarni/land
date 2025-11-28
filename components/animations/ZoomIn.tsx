"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  delay?: number
}

export default function ZoomIn({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

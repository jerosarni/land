"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  delay?: number
}

export default function SlideLeft({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

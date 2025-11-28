// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import { palette } from "@/lib/palette"

// const borderColor = palette.sand
// const headingColor = palette.brown
// const bodyColor = palette.graphite
// const accentColor = palette.bronze

// const pillars = [
//   {
//     title: "Ground–Truth Luxury",
//     desc: "Creamos proyectos que nacen desde la tierra, a partir del conocimiento profundo de cada lugar para potenciar su identidad y valor real.",
//   },
//   {
//     title: "End–to–End",
//     desc: "Acompañamos cada etapa del proceso e integramos desarrollo, gestión y capital en un mismo ecosistema.",
//   },
// ]

// export default function GroundTruth() {
//   return (
//     <section
//       id="ground-truth"
//       className="bg-white border-t"
//       style={{ borderColor }}
//     >
//       <div className="max-w-[1040px] mx-auto px-4 lg:px-0 py-16 lg:py-20">

//         {/* ---------- DESKTOP (>= lg) ---------- */}
//         <div className="hidden lg:grid grid-cols-[1.05fr_0.95fr] gap-12 items-start">
//           {/* Columna izquierda: gran titular */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.4 }}
//             className="space-y-6"
//           >
//             <h2
//               className="font-serif text-[40px] leading-[1.12] tracking-[0.08em] uppercase"
//               style={{ color: headingColor }}
//             >
//               NUESTRA MANERA DE HACER COMBINA CONOCIMIENTO TÉCNICO,
//               SENSIBILIDAD ESTÉTICA Y COMPROMISO CON EL ENTORNO.
//             </h2>
//           </motion.div>

//           {/* Columna derecha: imágenes + textos */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.4 }}
//             className="space-y-10"
//           >
//             {/* Dos imágenes verticales */}
//             <div className="grid grid-cols-2 gap-8">
//               <div className="relative w-full aspect-[3/5] overflow-hidden rounded-[26px]">
//                 <Image
//                   src="/images/piscina-vertical.jpg" // 🔁 cambia por tu imagen 1
//                   alt="Piscina y entorno"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="relative w-full aspect-[3/5] overflow-hidden rounded-[26px]">
//                 <Image
//                   src="/images/masterplan-vertical.jpg" // 🔁 cambia por tu imagen 2
//                   alt="Masterplan"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             {/* Textos Ground–Truth / End–to–End */}
//             <div className="space-y-10 pt-4 border-t" style={{ borderColor }}>
//               {pillars.map((item) => (
//                 <div key={item.title} className="space-y-2 max-w-md">
//                   <h3
//                     className="text-[20px] font-serif"
//                     style={{ color: headingColor }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     className="text-[15px] leading-relaxed"
//                     style={{ color: bodyColor }}
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* ---------- MOBILE / TABLET (< lg) ---------- */}
//         <div className="lg:hidden space-y-8">
//           {/* Imagen 1 con texto encima */}
//           <motion.div
//             className="relative w-full aspect-[4/3] overflow-hidden"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.4 }}
//           >
//             <Image
//               src="/images/piscina-horizontal.jpg" // 🔁 misma imagen, versión horizontal
//               alt="Piscina y entorno"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
//             <p className="absolute bottom-6 left-6 right-6 text-white text-[14px] leading-relaxed">
//               Nuestra manera de hacer combina conocimiento técnico, sensibilidad
//               estética y compromiso con el entorno.
//             </p>
//           </motion.div>

//           {/* Imagen 2 debajo */}
//           <motion.div
//             className="relative w-full aspect-[4/3] overflow-hidden"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
//             viewport={{ once: true, amount: 0.4 }}
//           >
//             <Image
//               src="/images/masterplan-horizontal.jpg" // 🔁 segunda imagen horizontal
//               alt="Masterplan"
//               fill
//               className="object-cover"
//             />
//           </motion.div>

//           {/* Textos Ground–Truth / End–to–End (solo una vez en mobile) */}
//           <div className="pt-10 space-y-8 border-t" style={{ borderColor }}>
//             {pillars.map((item) => (
//               <div key={item.title} className="space-y-2">
//                 <h3
//                   className="text-[18px] font-serif"
//                   style={{ color: headingColor }}
//                 >
//                   {item.title}
//                 </h3>
//                 <p
//                   className="text-[14px] leading-relaxed"
//                   style={{ color: bodyColor }}
//                 >
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

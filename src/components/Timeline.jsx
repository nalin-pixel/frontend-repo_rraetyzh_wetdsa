import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    role: 'Senior Software Engineer',
    company: 'Fintech Co',
    year: '2023 — Present',
    desc: 'Leading frontend architecture and crafting design systems for scalable product surfaces.'
  },
  {
    role: 'Product Engineer',
    company: 'Startup Studio',
    year: '2021 — 2023',
    desc: 'Shipped end-to-end features across web and mobile with a strong focus on UX.'
  },
  {
    role: 'UI Developer',
    company: 'Creative Agency',
    year: '2019 — 2021',
    desc: 'Built interactive marketing sites and prototypes with smooth motion and accessibility.'
  }
]

const Timeline = () => {
  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Experience</h2>

        <div className="mt-10 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200" />
          <div className="space-y-10">
            {items.map((i, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="relative grid md:grid-cols-2 gap-6"
              >
                <div className="md:text-right pr-10 md:pr-12">
                  <div className="inline-block rounded-full bg-white px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200 shadow-sm">{i.year}</div>
                </div>
                <div className="pl-10 md:pl-12">
                  <div className="absolute left-3.5 md:left-1/2 top-3 -translate-x-1/2 md:translate-x-0 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-white" />
                  <h3 className="text-lg font-semibold text-slate-800">{i.role} • <span className="text-slate-500">{i.company}</span></h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{i.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

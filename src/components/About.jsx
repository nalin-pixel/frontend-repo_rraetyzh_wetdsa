import React from 'react'
import { motion } from 'framer-motion'

const skills = ['React', 'TypeScript', 'Node.js', 'Design Systems', 'Tailwind CSS', 'Framer Motion', 'Figma', 'FastAPI']

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-lg ring-1 ring-slate-200 bg-white">
              <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">About</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I’m Alex, a product-focused engineer who bridges design and development. Over the past years I’ve helped startups and teams ship polished experiences across web and mobile.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              I love crafting interfaces that feel effortless, with a focus on clarity, accessibility, and performance.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200 shadow-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

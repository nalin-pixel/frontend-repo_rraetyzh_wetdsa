import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[88vh] flex items-center">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil so text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80"></div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200">
            Friendly • Minimal • Modern
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800">
            Alex Carter
          </h1>
          <p className="mt-3 text-lg md:text-xl text-slate-600">
            Software Engineer • UI/UX-minded builder
          </p>
          <p className="mt-5 text-slate-600 leading-relaxed">
            I design and build calm, human-centered digital products. I care about elegant systems, thoughtful details, and delightful user experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 px-5 py-2.5 text-white shadow-sm transition hover:shadow-md hover:brightness-105"
            >
              Contact
            </a>
            <a
              href="/Alex-Carter-CV.pdf"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-slate-700 backdrop-blur transition hover:bg-white"
              download
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

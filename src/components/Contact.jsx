import React from 'react'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Let’s build something great</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            I’m open to freelance work, collaborations, and full-time opportunities. Reach out and I’ll respond soon.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="mailto:alex@example.com" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-2.5 hover:bg-slate-800 transition">
              <Mail size={16} /> alex@example.com
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
              <Github size={18} /> <span className="text-sm">GitHub</span>
              <span className="w-0 group-hover:w-8 h-px bg-slate-400 transition-all" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
              <Linkedin size={18} /> <span className="text-sm">LinkedIn</span>
              <span className="w-0 group-hover:w-8 h-px bg-slate-400 transition-all" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
              <Instagram size={18} /> <span className="text-sm">Instagram</span>
              <span className="w-0 group-hover:w-8 h-px bg-slate-400 transition-all" />
            </a>
          </div>
        </motion.div>

        <p className="mt-10 text-xs text-slate-400">© {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Contact

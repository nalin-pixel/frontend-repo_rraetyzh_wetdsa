import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'CardFlow',
    description: 'A sleek budgeting app with smart category insights and real-time syncing.',
    stack: ['React', 'Tailwind', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1709540235921-7461bad57595?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXJkRmxvd3xlbnwwfDB8fHwxNzYzNTkyNjI1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    title: 'Nimbus UI',
    description: 'Design system starter with accessible components and motion presets.',
    stack: ['Storybook', 'Framer Motion', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Atlas Docs',
    description: 'Minimal documentation theme with search and code snippet blocks.',
    stack: ['Next.js', 'MDX'],
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Projects</h2>
          <a href="#contact" className="text-sm text-slate-500 hover:text-slate-700">See something you like? Let’s talk →</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-slate-50 px-2.5 py-1 text-[11px] text-slate-600 ring-1 ring-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm font-medium text-sky-600">View Project →</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

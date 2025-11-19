import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-slate-800">AC</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition">About</a>
            <a href="#projects" className="hover:text-slate-900 transition">Projects</a>
            <a href="#experience" className="hover:text-slate-900 transition">Experience</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  )
}

export default App

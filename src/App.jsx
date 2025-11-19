import React from 'react'
import Hero from './components/Hero'
import Works from './components/Works'
import Professor from './components/Professor'
import Members from './components/Members'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#inicio" className="font-semibold tracking-tight">Inicio</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#trabajos" className="text-white/80 hover:text-white transition">Trabajos</a>
            <a href="#profesor" className="text-white/80 hover:text-white transition">Profesor</a>
            <a href="#integrantes" className="text-white/80 hover:text-white transition">Integrantes</a>
          </div>
        </nav>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Works />
        <Professor />
        <Members />
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-white/60 border-t border-white/10">
        <p>© {new Date().getFullYear()} Tu Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App

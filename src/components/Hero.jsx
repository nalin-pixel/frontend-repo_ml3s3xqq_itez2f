import React from "react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_45%)]" />

      {/* Top logos */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <img src="/flame-icon.svg" alt="Logo izquierdo" className="w-12 h-12 drop-shadow-[0_0_18px_rgba(59,130,246,0.6)]" />
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <img src="/favicon.svg" alt="Logo derecho" className="w-10 h-10 drop-shadow-[0_0_14px_rgba(16,185,129,0.6)]" />
      </div>

      {/* Content */}
      <div className="relative w-full px-6 sm:px-10 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Bienvenidos a mi página
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100/90 max-w-3xl mx-auto">
            Esta es la sección de presentación. Aquí puedes incluir una breve descripción del curso, el proyecto o el propósito del sitio.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#trabajos" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition">
              Ver trabajos
            </a>
            <a href="#integrantes" className="px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition">
              Conocer al equipo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

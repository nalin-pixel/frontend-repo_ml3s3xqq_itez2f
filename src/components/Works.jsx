import React from "react";

const works = [
  {
    title: "Proyecto 1",
    description: "Descripción breve del primer trabajo realizado.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Proyecto 2",
    description: "Resumen corto del segundo trabajo realizado.",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
];

const Works = () => {
  return (
    <section id="trabajos" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/60 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Mis trabajos</h2>
        <p className="text-blue-100/80 text-center mt-2 mb-10">Aquí muestro dos ejemplos destacados.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {works.map((w, i) => (
            <a
              key={i}
              href={w.link}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-800/40 hover:bg-slate-800/60 transition block"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{w.title}</h3>
                <p className="text-blue-100/80 mt-1">{w.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

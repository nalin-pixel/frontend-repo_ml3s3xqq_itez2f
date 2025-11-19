import React from "react";

const members = [
  { name: "Integrante 1", role: "Desarrollador", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=900&auto=format&fit=crop" },
  { name: "Integrante 2", role: "Diseñador", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop" },
  { name: "Integrante 3", role: "Tester", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=900&auto=format&fit=crop" },
  { name: "Integrante 4", role: "Documentación", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop" },
];

const Members = () => {
  return (
    <section id="integrantes" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Integrantes</h2>
        <p className="text-blue-100/80 text-center mt-2 mb-10">Presentación del equipo que participa en el proyecto.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <div key={i} className="bg-slate-800/40 border border-white/10 rounded-2xl p-5 text-center hover:bg-slate-800/60 transition">
              <img src={m.img} alt={m.name} className="w-28 h-28 object-cover rounded-full mx-auto border border-white/10 shadow mb-4" />
              <h3 className="text-lg font-semibold text-white">{m.name}</h3>
              <p className="text-blue-100/80 text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;

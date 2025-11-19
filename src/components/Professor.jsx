import React from "react";

const Professor = () => {
  return (
    <section id="profesor" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Profesor encargado</h2>
        <p className="text-blue-100/80 text-center mt-2 mb-10">Presentación de la persona responsable del curso.</p>

        <div className="grid md:grid-cols-[240px_1fr] gap-8 items-center">
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=900&auto=format&fit=crop"
              alt="Profesor"
              className="w-60 h-60 object-cover rounded-2xl mx-auto border border-white/10 shadow-lg"
            />
          </div>
          <div className="bg-slate-800/40 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-white">Nombre del profesor</h3>
            <p className="text-blue-100/85 mt-2">
              Aquí puedes escribir una reseña del profesor: su experiencia, su rol en el curso y cualquier información de contacto
              que desees compartir. Este espacio está pensado para destacar a la persona encargada del curso.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-200 border border-blue-500/30 text-sm">Docente</span>
              <span className="px-3 py-1 rounded-full bg-emerald-600/20 text-emerald-200 border border-emerald-500/30 text-sm">Coordinador</span>
              <span className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-200 border border-purple-500/30 text-sm">Mentor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professor;

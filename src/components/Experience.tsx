import React from "react";

interface ExperienceProps {
  icon: React.ReactNode; // URL de la imagen del icono
  date: string; // Fecha de la experiencia
  company: string; // Nombre de la empresa
  companyDescription: string; // Descripción de la empresa
  position: string; // Nombre del puesto
  tasks: string[]; // Lista de tareas principales
}

const Experience: React.FC<ExperienceProps> = ({
  icon,
  date,
  company,
  companyDescription,
  position,
  tasks,
}) => {
  return (
    <div id="experience" className="bg-whites mx-auto w-full rounded-lg pt-2">
      <div className="items-left bg-whites mx-auto -mt-7 mb-4 w-3/5 rounded-lg text-left font-sans">
        <div className="items-left bg-whites -mb-10 w-40">{icon}</div>
        <span className="text-tealGreen pb-10">{date}</span>
        <h3 className="text-tealGreen mb-3 mt-3 text-lg font-semibold">
          {position}
        </h3>
        <ul className="text-sageGreen list-inside list-disc">
          {tasks.map((task, index) => (
            <li key={index} className="mb-2">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;

// <!-- className="h-12 w-12" -->

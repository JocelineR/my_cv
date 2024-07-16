interface EducationProps {
  icon: string; // URL de la imagen del icono
  date: string; // Fecha de la experiencia
  nameSchool: string; // Nombre de la empresa
  schoolDescription: string; // Descripción de la empresa
  titleName: string; // Nombre del puesto
}

const Education: React.FC<EducationProps> = ({
  icon,
  date,
  nameSchool,
  schoolDescription,
  titleName,
}) => {
  return (
    <div id="education" className="bg-whites mx-auto w-full rounded-lg pt-3 ">
      <div className="items-left bg-whites mx-auto mb-2 mt-7 w-3/5 rounded-lg text-left font-sans">
        <span className="text-tealGreen pb-10">{date}</span>
        <h3 className="text-tealGreen mb-3 mt-3 text-lg font-semibold">
          {nameSchool}
        </h3>
        <h3 className="text-tealGreen mb-3 mt-3 text-lg font-semibold">
          {titleName}
        </h3>
      </div>
    </div>
  );
};

export default Education;

import React from "react";

export const selectOptions = [
  'Aplicações web',
  'Aplicações mobile',
  'Bots',
  'Scritps',
  'Consultoria'
];

const ProjectsFilter: React.FC<{
  setSelectProject: (e: string) => void;
}> = ({setSelectProject}) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="font-general-medium
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
    >
      <option value="All Projects" className="text-sm sm:text-md">
        Todos os projetos
      </option>
      
      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;

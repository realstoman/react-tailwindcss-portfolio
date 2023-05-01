import React, { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { ProjectSingleProps } from "../../pages/ProjectSingle";

const ProjectRelatedProjects: React.FC<ProjectSingleProps> = ({id}) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const currentProject = singleProjectData.find(project => project.id === id);
	
	if (!currentProject) return null;
	
	if (!currentProject.RelatedProject) return null
	
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{currentProject.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{currentProject.RelatedProject.Projects.map((project) => {
					return (
						<img
							src={project.img}
							className="rounded-xl cursor-pointer"
							alt={project.title}
							key={project.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;

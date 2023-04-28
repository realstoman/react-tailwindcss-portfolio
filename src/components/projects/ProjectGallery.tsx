import React, { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { ProjectSingleProps } from "../../pages/ProjectSingle";

const ProjectGallery: React.FC<ProjectSingleProps> = ({id}) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const currentProject = singleProjectData.find(project => project.id === id);
	
	if (!currentProject) return null;
	
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{currentProject.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							key={project.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;

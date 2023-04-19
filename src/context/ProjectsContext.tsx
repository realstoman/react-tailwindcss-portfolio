import React, { createContext, PropsWithChildren, useState } from 'react';
import { ProjectsData, projectsData } from '../data/projects';

interface IProjectsContext {
	projects: ProjectsData[];
	setSearchProject: React.Dispatch<React.SetStateAction<string>>;
	setSelectProject: React.Dispatch<React.SetStateAction<string>>;
	setProjects: React.Dispatch<React.SetStateAction<ProjectsData[]>>;
	searchProject: string;
	selectProject: string;
	searchProjectsByTitle: ProjectsData[];
	selectProjectsByCategory: ProjectsData[];
}

// Create projects context
export const ProjectsContext = createContext<IProjectsContext>(null!);

// Create the projects context provider
export const ProjectsProvider: React.FC<PropsWithChildren> = (props) => {
	const [projects, setProjects] = useState<ProjectsData[]>(projectsData);
	const [searchProject, setSearchProject] = useState<string>('');
	const [selectProject, setSelectProject] = useState<string>('');

	// Search projects by project title
	const searchProjectsByTitle = projects.filter((item) => {
		return item.title && item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
				? item
				: '';
	});

	// Select projects by project category
	const selectProjectsByCategory = projects.filter((item) => {
		let category = item.category && (item.category.charAt(0).toUpperCase() + item.category.slice(1));
		return category?.includes(selectProject);
	});

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};

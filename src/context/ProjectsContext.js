import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(projectsData);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');

	// Search projects by project title
	const searchProjectsByTitle = projects.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
			? item
			: '';
		return result;
	});

	// Select projects by project category
	const selectProjectsByCategory = projects.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
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

import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(projectsData);
	const [searchProject, setSearchProject] = useState('');

	// Search projects
	const searchProjectsByTitle = projects.filter((item) => {
		if (item.title.toLowerCase().includes(searchProject.toLowerCase()))
			return item;
		else if (searchProject === '') return item;
	});

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				setSearchProject,
				searchProjectsByTitle,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};

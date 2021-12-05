import { useState, createContext } from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState();

	return (
		<ProjectsContext.Provider values={[projects, setProjects]}>
			{props.children}
		</ProjectsContext.Provider>
	);
};

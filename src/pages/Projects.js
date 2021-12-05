import ProjectsGrid from '../components/ProjectsGrid';
import { ProjectsProvider } from '../store/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;

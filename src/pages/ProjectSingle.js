import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects//ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { ProjectsProvider } from '../context/ProjectsContext';

const ProjectSingle = () => {
	return (
		<div className="container mx-auto mt-5 sm:mt-10">
			<ProjectsProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				<ProjectRelatedProjects />
			</ProjectsProvider>
		</div>
	);
};

export default ProjectSingle;

import ProjectGallery from '../components/ProjectGallery';
import ProjectHeader from '../components/ProjectHeader';
import ProjectInfo from '../components/ProjectInfo';
import ProjectRelatedProjects from '../components/ProjectRelatedProjects';
import { ProjectsProvider } from '../store/ProjectsContext';

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

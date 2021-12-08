import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects//ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';

const ProjectSingle = () => {
	return (
		<div className="container mx-auto mt-5 sm:mt-10">
			<SingleProjectProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				<ProjectRelatedProjects />
			</SingleProjectProvider>
		</div>
	);
};

export default ProjectSingle;

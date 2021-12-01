import ProjectGallery from '../components/ProjectGallery';
import ProjectHeader from '../components/ProjectHeader';
import ProjectInfo from '../components/ProjectInfo';
import ProjectRelatedProjects from '../components/ProjectRelatedProjects';

const ProjectSingle = () => {
	return (
		<div className="container mx-auto mt-5 sm:mt-10">
			<ProjectHeader />
			<ProjectGallery />
			<ProjectInfo />
			<ProjectRelatedProjects />
		</div>
	);
};

export default ProjectSingle;

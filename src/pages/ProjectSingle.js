import ProjectGallery from '../components/ProjectGallery';
import ProjectHeader from '../components/ProjectHeader';

const ProjectSingle = () => {
	return (
		<div className="container mx-auto mt-5 sm:mt-10">
			<ProjectHeader />
			<ProjectGallery />
		</div>
	);
};

export default ProjectSingle;

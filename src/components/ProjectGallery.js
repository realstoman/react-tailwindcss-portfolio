import { ProjectImages } from '../utils/SingleProjectData';

const ProjectGallery = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-2xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							key={project.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;

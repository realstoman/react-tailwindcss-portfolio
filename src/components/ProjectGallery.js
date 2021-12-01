import { ProjectImages } from '../utils/SingleProjectData';

const ProjectGallery = () => {
	return (
		<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{ProjectImages.map((project) => {
				return (
					<div class="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							class="rounded-2xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;

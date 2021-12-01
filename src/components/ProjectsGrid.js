import { FiSearch } from 'react-icons/fi';
import ProjectsFilter from './ProjectsFilter';
import ProjectSingle from './ProjectSingle';

const ProjectsGrid = () => {
	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			{/* Projects grid title start */}
			<div className="text-center">
				<p className="text-2xl sm:text-5xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
				<p className="text-md sm:text-xl text-gray-500 dark:text-ternary-light">
					Some of my projects are listed below
				</p>
			</div>
			{/* Projects grid title end */}

			{/* Filter and search projects start */}
			<div className="mt-10 sm:mt-16">
				<h3
					className="
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        font-normal
                        mb-3
                        "
				>
					Search projects by title or filter by category
				</h3>
				<div
					className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							className="
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>
					{/* <ProjectsFilter @change="selectedProject = $event" /> */}
					<ProjectsFilter />
					{/* <p>Filter projects</p> */}
				</div>
			</div>
			{/* Filter and search projects end */}

			{/* Projects grid start */}
			<div className="grid grid-cols-1 sm:grid-cols-3 mt-6 sm:gap-10">
				{/* <ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/> */}
				<ProjectSingle />
			</div>
			{/* Projects grid end */}
		</section>
	);
};

export default ProjectsGrid;

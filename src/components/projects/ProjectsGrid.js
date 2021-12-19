import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			{/* Projects grid title start */}
			<div className="text-center">
				<p className="text-2xl sm:text-5xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
				{/* Note: This description is commented, but if you want to have it, just uncomment it */}
				{/* <p className="text-md sm:text-xl text-gray-500 dark:text-ternary-light">
					Some of my projects are listed below
				</p> */}
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
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
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

					<ProjectsFilter setSelectProject={setSelectProject} />
					{/* <p>Filter projects</p> */}
				</div>
			</div>
			{/* Filter and search projects end */}

			{/* Projects grid start */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{selectProject
					? selectProjectsByCategory.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))
					: searchProject
					? searchProjectsByTitle.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))
					: projects.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
					  ))}
			</div>
			{/* Projects grid end */}
		</section>
	);
};

export default ProjectsGrid;

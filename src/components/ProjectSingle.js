import { Link } from 'react-router-dom';

const ProjectSingle = () => {
	return (
		<Link
			to="/projects/single-project"
			class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			aria-label="Single Project"
		>
			<div>
				<img src="" class="rounded-t-3xl border-none" />
			</div>
			<div class="text-center px-4 py-6">
				<p class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
					A Simple Project
				</p>
				<span class="text-lg text-ternary-dark dark:text-ternary-light">
					Here is the description
				</span>
			</div>
		</Link>
	);
};

export default ProjectSingle;

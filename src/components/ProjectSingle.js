import { Link } from 'react-router-dom';
import webProject2 from '../images/web-project-2.jpg';

const ProjectSingle = () => {
	return (
		<Link
			to="/projects/single-project"
			className="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			aria-label="Single Project"
		>
			<div>
				<img
					src={webProject2}
					className="rounded-t-3xl border-none"
					alt="Single Project"
				/>
			</div>
			<div className="text-center px-4 py-6">
				<p className="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
					Google Health Platform
				</p>
				<span className="text-lg text-ternary-dark dark:text-ternary-light">
					Web Application
				</span>
			</div>
		</Link>
	);
};

export default ProjectSingle;

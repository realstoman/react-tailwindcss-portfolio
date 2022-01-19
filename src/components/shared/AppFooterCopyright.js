import { Link } from 'react-router-dom';

function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<Link
					to="https://github.com/realstoman/react-tailwindcss-portfolio"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1"
				>
					React & TailwindCSS Portfolio
				</Link>
				.
				<Link
					to="https://stoman.me"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1"
				>
					Stoman
				</Link>
			</div>
		</div>
	);
}

export default AppFooterCopyright;

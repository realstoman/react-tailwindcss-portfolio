import { Link } from 'react-router-dom';
import AppBanner from '../components/AppBanner';
import ProjectsGrid from '../components/ProjectsGrid';
import { ProjectsProvider } from '../store/ProjectsContext';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div class="mt-10 sm:mt-15 flex justify-center">
				<Link
					to="/projects"
					class="flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl font-medium"
					aria-label="More Projects"
				>
					More Projects
				</Link>
			</div>
		</div>
	);
};

export default Home;

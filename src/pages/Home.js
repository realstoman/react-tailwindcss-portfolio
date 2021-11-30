import AppBanner from '../components/AppBanner';
import ProjectsGrid from '../components/ProjectsGrid';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<ProjectsGrid></ProjectsGrid>
		</div>
	);
};

export default Home;

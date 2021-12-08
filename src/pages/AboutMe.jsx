import AboutClients from '../components/about/AboutClients';
import AboutCounter from '../components/about/AboutCounter';
import AboutMeBio from '../components/about/AboutMeBio';

const About = () => {
	return (
		<div>
			<div className="container mx-auto">
				<AboutMeBio />
			</div>

			{/** Counter without paddings */}
			<AboutCounter />

			<div className="container mx-auto">
				<AboutClients />
			</div>
		</div>
	);
};

export default About;

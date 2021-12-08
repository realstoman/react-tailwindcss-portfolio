import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients.js';

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

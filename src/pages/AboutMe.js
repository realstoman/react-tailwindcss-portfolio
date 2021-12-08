import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients.js';
import { AboutMeProvider } from '../context/AboutMeContext';

const About = () => {
	return (
		<AboutMeProvider>
			<div className="container mx-auto">
				<AboutMeBio />
			</div>

			{/** Counter without paddings */}
			<AboutCounter />

			<div className="container mx-auto">
				<AboutClients />
			</div>
		</AboutMeProvider>
	);
};

export default About;

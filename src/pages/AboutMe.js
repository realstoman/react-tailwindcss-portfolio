import AboutClients from '../components/AboutClients';
import AboutCounter from '../components/AboutCounter';
import AboutMeBio from '../components/AboutMeBio';

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

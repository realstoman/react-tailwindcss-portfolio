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
		</div>
	);
};

export default About;

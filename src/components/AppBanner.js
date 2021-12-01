import useThemeSwitcher from '../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../images/developer.svg';
import developerDark from '../images/developer-dark.svg';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-2">
			<div className="w-full sm:w-1/3 text-left">
				<h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left font-semibold text-ternary-dark dark:text-primary-light uppercase">
					Hi, Iam Stoman
				</h1>
				<p className="mt-4 text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left font-semibold leading-none text-gray-400">
					A Full-Stack Developer & Design Enthusiast
				</p>
				<div className="flex justify-center sm:block">
					<a
						download="Stoman-Resume.pdf"
						href="/files/Stoman-Resume.pdf"
						className="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg">Download CV</span>
					</a>
				</div>
			</div>
			<div className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0">
				<img
					src={
						activeTheme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
				/>
			</div>
		</section>
	);
};

export default AppBanner;

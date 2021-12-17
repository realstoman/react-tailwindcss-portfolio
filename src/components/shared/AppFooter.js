import {
	FiGithub,
	FiTwitter,
	FiInstagram,
	FiFeather,
	FiBook,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/realstoman',
	},
	{
		id: 2,
		icon: <FiTwitter />,
		url: 'https://twitter.com/realstoman',
	},
	{
		id: 3,
		icon: <FiBook />,
		url: 'https://stoman.medium.com',
	},
	{
		id: 4,
		icon: <FiInstagram />,
		url: 'https://instagram.com/realstoman',
	},
	{
		id: 5,
		icon: <FiFeather />,
		url: 'https://behance.net/realstoman',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links start */}
				<div className="flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
				{/* Footer social links end */}

				{/* Footer copyright start */}
				<div className="flex justify-center items-center text-center">
					<div className="text-lg text-ternary-dark dark:text-ternary-light">
						&copy; 2021
						<Link
							to="https://github.com/realstoman/react-tailwindcss-portfolio"
							className="hover:underline ml-1"
						>
							React & TailwindCSS Portfolio
						</Link>
						.
						<Link
							to="https://stoman.me"
							target="__blank"
							className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline ml-1"
						>
							Stoman
						</Link>
					</div>
				</div>
				{/* Footer copyright end */}
			</div>
		</div>
	);
};

export default AppFooter;

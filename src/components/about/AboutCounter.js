const AboutCounter = () => {
	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<div className="mb-20 sm:mb-0">
					<h2 className="text-4xl text-center font-bold text-secondary-dark dark:text-secondary-light mb-2">
						12
					</h2>
					<span className="block text-md text-center text-ternary-dark dark:text-ternary-light">
						Years of experience
					</span>
				</div>

				<div className="mb-20 sm:mb-0">
					<h2 className="text-4xl text-center font-bold text-secondary-dark dark:text-secondary-light mb-2">
						20k+
					</h2>
					<span className="block text-md text-center text-ternary-dark dark:text-ternary-light">
						Stars on GitHub
					</span>
				</div>

				<div className="mb-20 sm:mb-0">
					<h2 className="text-4xl text-center font-bold text-secondary-dark dark:text-secondary-light mb-2">
						92%
					</h2>
					<span className="block text-md text-center text-ternary-dark dark:text-ternary-light">
						Positive feedback
					</span>
				</div>

				<div className="mb-20 sm:mb-0">
					<h2 className="text-4xl text-center font-bold text-secondary-dark dark:text-secondary-light mb-2">
						77
					</h2>
					<span className="block text-md text-center text-ternary-dark dark:text-ternary-light">
						Projects completed
					</span>
				</div>
			</div>
		</div>
	);
};

export default AboutCounter;

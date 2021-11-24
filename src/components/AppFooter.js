const AppFooter = () => {
	return (
		<div class="container mx-auto ">
			<div class="innercontent pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links start */}
				<div class="flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p class="text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul class="flex gap-4 sm:gap-8">
						<a
							href="/fb"
							target="__blank"
							class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4"
						>
							FB
						</a>
					</ul>
				</div>
				{/* Footer social links end */}

				{/* Footer copyright start */}
				<div class="flex justify-center items-center text-center">
					<div class="text-lg text-ternary-dark dark:text-ternary-light">
						&copy; Copyright 2021. Vue.js & TailwindCSS Portfolio.
						<a
							href="https://stoman.me"
							target="__blank"
							class="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline"
						>
							Stoman
						</a>
					</div>
				</div>
				{/* Footer copyright end */}
			</div>
		</div>
	);
};

export default AppFooter;

const HireMeModal = () => {
	return (
		<div className="fixed inset-0 z-30">
			{/* Modal Background */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-xl relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className=" text-primary-dark dark:text-primary-light text-2xl">
								What project are you looking for?
							</h5>
							<button className="px-4 font-bold text-primary-dark dark:text-primary-light">
								X
							</button>
						</div>
						<div className="modal-body p-5 w-full h-full">
							<form className="max-w-xl m-4 text-left">
								<div className="">
									<input
										className="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="name"
										name="name"
										type="text"
										required=""
										placeholder="Name"
										aria-label="Name"
									/>
								</div>
								<div className="mt-6">
									<input
										className="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="email"
										name="email"
										type="text"
										required=""
										placeholder="Email"
										aria-label="Email"
									/>
								</div>
								<div className="mt-6">
									<select
										className="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="subject"
										name="subject"
										type="text"
										required=""
										aria-label="Project Category"
									>
										<option>Something</option>
									</select>
								</div>

								<div className="mt-6">
									<textarea
										className="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="message"
										name="message"
										cols="14"
										rows="6"
										aria-label="Details"
										placeholder="Project description"
									></textarea>
								</div>

								<div className="mt-6 pb-4 sm:pb-1">
									<button
										className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											font-normal
											sm:font-medium
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											sm:rounded-lg
											focus:ring-1 focus:ring-indigo-900"
										type="submit"
										aria-label="Submit Request"
									>
										Send Request
									</button>
								</div>
							</form>
						</div>
						<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
							<button
								className=" px-4
									sm:px-6
									py-2
									bg-indigo-400
									hover:bg-indigo-500
									rounded-md
									sm:rounded-lg
									font-normal
									sm:font-bold
									text-primary-light
									focus:ring-1 focus:ring-indigo-900"
								aria-label="Close Modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default HireMeModal;

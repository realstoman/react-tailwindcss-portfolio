const ContactForm = () => {
	return (
		<div classNameName="w-full sm:w-1/2">
			<div className="leading-loose">
				<form className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
					<p className="text-primary-dark dark:text-primary-light text-2xl font-semibold mb-8">
						Contact Form
					</p>
					<div className="">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							for="name"
						>
							Full Name
						</label>
						<input
							className="w-full px-5 py-2 border-0 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md dark:font-medium"
							id="name"
							name="name"
							type="text"
							required
							placeholder="Your Name"
							aria-label="Name"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							for="email"
						>
							Email
						</label>
						<input
							className="w-full px-5 py-2 border-0 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md dark:font-medium"
							id="email"
							name="email"
							type="text"
							required
							placeholder="Your Email"
							aria-label="Email"
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							for="subject"
						>
							Subject
						</label>
						<input
							className="w-full px-5 py-2 border-0 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md dark:font-medium"
							id="subject"
							name="subject"
							type="text"
							required
							placeholder="Subject"
							aria-label="Subject"
						/>
					</div>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							for="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border-0 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md dark:font-medium"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="mt-6">
						<button
							className="px-4 py-2.5 text-white font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg"
							type="submit"
							aria-label="Send Message"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;

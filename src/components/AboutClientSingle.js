const AboutClientSingle = ({ clients }) => {
	return (
		<>
			{clients.map((client) => (
				<img
					src={client.img}
					className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-xl mb-8 cursor-pointer"
					alt={client.title}
				/>
			))}
		</>
	);
};

export default AboutClientSingle;

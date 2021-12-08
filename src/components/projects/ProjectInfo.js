import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details start */}
				<div className="mb-7">
					<p className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{singleProjectData.ProjectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{singleProjectData.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
										<span>{info.title}: </span>
										<a
											href="https://stoman.me"
											className={
												info.title === 'Website' ||
												info.title === 'Phone'
													? 'hover:underline cursor-pointer'
													: ''
											}
											aria-label="Project Website and Phone"
										>
											{info.details}
										</a>
									</li>
								);
							}
						)}
					</ul>
				</div>
				{/* Single project client details end */}

				{/* Single project objectives start */}
				<div className="mb-7">
					<p className="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.ObjectivesDetails}
					</p>
				</div>
				{/* Single project objectives end */}

				{/* Single project technologies start */}
				<div className="mb-7">
					<p className="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div>
				{/* Single project technologies end */}

				{/* Single project social sharing start */}
				<div>
					<p className="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{singleProjectData.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<Link
										key={social.id}
										to={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</Link>
								);
							}
						)}
					</div>
				</div>
				{/* Single project social sharing end */}
			</div>
			{/*  Single project left section details end */}

			{/*  Single project right section details start */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					);
				})}
			</div>
			{/* Single project right section details end  */}
		</div>
	);
};

export default ProjectInfo;

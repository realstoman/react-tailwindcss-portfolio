import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';
import React from "react";

const AboutCounter: React.FC = () => {
	useCountUp({ ref: 'experienceCounter', end: 6, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 70, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 90, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Anos de experiência"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Feedbacks positivos"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Projetos completos"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;

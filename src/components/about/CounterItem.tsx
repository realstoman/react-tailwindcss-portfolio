import React, { ReactElement } from 'react';

const CounterItem: React.FC<{
  title: string, counter: ReactElement<any, any>, measurement: string
}> = ({
  title, counter, measurement
}) => {
	return (
		<div className="mb-20 sm:mb-0">
			<h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
				<>
					{counter} {measurement}
				</>
			</h2>
			<span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
				{title}
			</span>
		</div>
	);
};

export default CounterItem;

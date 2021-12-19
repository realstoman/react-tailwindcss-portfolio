import { useState } from 'react';
import { FIChevronUp } from 'react-icons/fi';

const useScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const scrollToTop = () => {
		if (!showScroll & (window.pageYOffset > 500)) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 500) {
			setShowScroll(false);
		}
	};

	const backToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', scrollToTop);

	return (
		<>
			<FIChevronUp
				className="scrollToTop"
				onClick={backToTop}
				style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
			/>
		</>
	);
};

export default useScrollToTop;

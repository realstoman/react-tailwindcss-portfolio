import { render, screen } from '@testing-library/react';
import AppBanner from '../components/shared/AppBanner';
import userEvent from '@testing-library/user-event';

// This runs before each test. This is good instead of having the component render in each test case
const setup = () => render(<AppBanner />);

// Get user event
function setupUserEvent(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

test('it shows the name in banner', () => {
	setup();
	const titleElement = screen.getByText(/Hi, Iam Stoman/i);
	expect(titleElement).toBeInTheDocument();
});

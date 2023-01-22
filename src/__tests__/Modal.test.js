import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HireMeModal from '../components/HireMeModal';

// Get user event
function setupUserEvent(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

test('modal shows the children and a close button', async () => {
	const { user } = setupUserEvent(<HireMeModal />);

	expect(
		screen.getByText(/What project are you looking for?/i)
	).toBeInTheDocument();

	const closeModal = screen.getByText(/Close/i);
	expect(closeModal).toBeInTheDocument();

	const closeModalButton = closeModal.parentElement;
	expect(closeModalButton).toBeInTheDocument();
});

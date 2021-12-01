import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';

const Contact = () => {
	return (
		<div className="container mx-auto sm:flex py-5 sm:py-10 mt-5 sm:mt-10">
			<ContactForm />
			<ContactDetails />
		</div>
	);
};

export default Contact;

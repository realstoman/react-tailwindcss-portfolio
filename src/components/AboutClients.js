import AmazonImage from '../images/brands/amazon_gray.png';
import SonyImage from '../images/brands/sony_gray.png';
import AdidasImage from '../images/brands/adidas_gray.png';
import FilaImage from '../images/brands/fila_gray.png';
import NBImage from '../images/brands/nb_gray.png';
import SamsungImage from '../images/brands/samsung_gray.png';
import CanonImage from '../images/brands/canon_gray.png';
import PumaImage from '../images/brands/puma_gray.png';
import AboutClientSingle from './AboutClientSingle';

const clientsHeading = 'Some of the brands I worked with';
const clientsData = [
	{
		id: 1,
		title: 'Amazon',
		img: AmazonImage,
	},
	{
		id: 2,
		title: 'Sony',
		img: SonyImage,
	},
	{
		id: 3,
		title: 'Adidas',
		img: AdidasImage,
	},
	{
		id: 4,
		title: 'FILA',
		img: FilaImage,
	},
	{
		id: 5,
		title: 'NB',
		img: NBImage,
	},
	{
		id: 6,
		title: 'SAMSUNG',
		img: SamsungImage,
	},
	{
		id: 7,
		title: 'CANON',
		img: CanonImage,
	},
	{
		id: 7,
		title: 'PUMA',
		img: PumaImage,
	},
];

const AboutClients = () => {
	return (
		<div className="mt-10 sm:mt-20">
			<p className="text-2xl sm:text-4xl text-primary-dark dark:text-primary-light font-sans font-semibold">
				{clientsHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-20 gap-2">
				<AboutClientSingle clients={clientsData} />
			</div>
		</div>
	);
};

export default AboutClients;

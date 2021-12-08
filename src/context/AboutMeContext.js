import { useState, createContext } from 'react';

import AmazonImage from '../images/brands/amazon_gray.png';
import SonyImage from '../images/brands/sony_gray.png';
import AdidasImage from '../images/brands/adidas_gray.png';
import FilaImage from '../images/brands/fila_gray.png';
import NBImage from '../images/brands/nb_gray.png';
import SamsungImage from '../images/brands/samsung_gray.png';
import CanonImage from '../images/brands/canon_gray.png';
import PumaImage from '../images/brands/puma_gray.png';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState([
		{
			id: 1,
			bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
		},
		{
			id: 2,
			bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
		},
	]);

	const clientsHeading = 'Some of the brands I worked with';

	const [clientsData, setClientsData] = useState([
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
			id: 8,
			title: 'PUMA',
			img: PumaImage,
		},
	]);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				clientsHeading,
				clientsData,
				setClientsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;

import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

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

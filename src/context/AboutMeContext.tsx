import React, { useState, createContext, PropsWithChildren } from 'react';
import { AboutMeData, aboutMeData } from '../data/aboutMeData';
import { ClientsData, clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';

interface IAboutMeContext {
	aboutMe: AboutMeData[];
	setAboutMe: React.Dispatch<React.SetStateAction<AboutMeData[]>>;
	clientsHeading: string;
	clientsData: ClientsData[];
	setClientsData: React.Dispatch<React.SetStateAction<ClientsData[]>>
}

const AboutMeContext = createContext<IAboutMeContext>(null!);

export const AboutMeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [aboutMe, setAboutMe] = useState<AboutMeData[]>(aboutMeData);
	const [clientsData, setClientsData] = useState<ClientsData[]>(clientsDataJson);

	const clientsHeading = clientsPageHeading;

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

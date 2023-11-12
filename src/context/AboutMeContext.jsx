import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { careersData } from "../data/careersData";
import { skillsData } from "../data/skillsData";
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	const [careers, setCareers] = useState(careersData);
  const [skills, setSkills] = useState(skillsData);

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
        careers,
        setCareers,
        skills,
        setSkills,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;

import React, { createContext, PropsWithChildren, useState } from 'react';
import { SingleProjectData, projectsData as projectsDataJson } from '../data/singleProjectData';

interface ISingleProjectContext {
  setSingleProjectData: React.Dispatch<React.SetStateAction<SingleProjectData[]>>;
  singleProjectData: SingleProjectData[];
}

const SingleProjectContext = createContext<ISingleProjectContext>(null!);

export const SingleProjectProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [singleProjectData, setSingleProjectData] = useState<SingleProjectData[]>(projectsDataJson);
  
  return (
    <SingleProjectContext.Provider
      value={{singleProjectData, setSingleProjectData}}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;

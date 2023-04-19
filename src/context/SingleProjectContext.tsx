import React, { createContext, PropsWithChildren, useState } from 'react';
import { SingleProjectData, singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

interface ISingleProjectContext {
  setSingleProjectData: React.Dispatch<React.SetStateAction<SingleProjectData>>;
  singleProjectData: SingleProjectData;
}

const SingleProjectContext = createContext<ISingleProjectContext>(null!);

export const SingleProjectProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [singleProjectData, setSingleProjectData] = useState<SingleProjectData>(singleProjectDataJson);
  
  return (
    <SingleProjectContext.Provider
      value={{singleProjectData, setSingleProjectData}}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;

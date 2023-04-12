import React, { useState, createContext, ReactElement } from 'react';
export const TagContainerContext = createContext({});

interface ContextProps {
    click?: boolean;
    children: ReactElement
}

const TagContainerContextProvider: React.FC<ContextProps> = ({ children }) => {

    const [clicked, setClicked] = useState(true)

    const DropDownContainer = { clickedState: [clicked, setClicked] }

    return <TagContainerContext.Provider value={DropDownContainer}>{children}</TagContainerContext.Provider>
}

export default TagContainerContextProvider
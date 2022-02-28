import React, { createContext, useState, useEffect} from 'react';


export const ContextState = createContext();

export const ContextProvider = ({ children }) => {
    const [newPage, setNewPag] = useState(false);

        useEffect(() => {
        localStorage.setItem("newPage",true)

    }, [newPage]);
    return (
        <ContextState.Provider value={{newPage, setNewPag}}>
            {children}
        </ContextState.Provider>
    )
}
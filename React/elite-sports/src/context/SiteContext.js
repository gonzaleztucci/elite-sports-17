import { createContext, useState } from "react";

export const SiteContext = createContext(); 

export const SiteContextProvider = props => {
    const [currentUsers, setCurrentUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    // const [darkMode, setDarkMode] = useState(false);


    return (
        <SiteContext.Provider value = {{currentUsers, setCurrentUsers, selectedUser, setSelectedUser}}>
            {props.children}
        </SiteContext.Provider>
    
    );
}


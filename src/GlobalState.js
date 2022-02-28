import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import UserAPI from './API/UserAPI';
// import ContactsAPI from './API/ContactsAPI';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false);

    const refreshToken = async () => {
        // try {
            const res = await axios.get("/user/refresh_token")
            // console.log("Refresh token :", res)
            setToken(res.data.accessToken);
            setTimeout(()=>{
                refreshToken()
            }, 10 * 60 * 1000)
        // } catch (err) {
            // alert(err.response.data.message)
        // }
    };
    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin")
        if (firstLogin)
            refreshToken();
    }, [refreshToken]);
    
    const state = {
        token: [token, setToken],
        userAPI: UserAPI(token),
        // usersAPI: UserAPI(),
        // contactsAPI: ContactsAPI()
        isAnswersAPI: UserAPI()
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
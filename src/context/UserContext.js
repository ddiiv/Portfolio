import React, { useContext, createContext, useState } from "react";
import { getInfo } from "../api/apiFunctions";

const UserContext = createContext();
const UserFunctions = createContext();

export function useUserContext() {
    return useContext(UserContext);
}
export function useUserFunctions() {
    return useContext(UserFunctions);
}

export const UserProvider = ({ children }) => {
    const [User, setUser] = useState(null);
    const [Logged, setLogged] = useState(false);

    async function initializeInfo() {

        if (User === null) {
            await getInfo().then((data) => {
                if (data) {
                    setUser({ ...data })
                    setLogged(true)
                    return User
                }
                else {
                    setUser(null)
                    setLogged(false)
                    return console.log("no llego la info")
                }
            })
        }
        else {
            setUser(null)
        }
    }


    return <UserFunctions.Provider value={{ Logged, initializeInfo }}>
        <UserContext.Provider value={User}>
            {children}
        </UserContext.Provider>
    </UserFunctions.Provider>
}
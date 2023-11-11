import React, { useContext, createContext, useState, useEffect } from "react";
import { getInfoProyects } from "../api/apiFunctions";

const ProyectContext = createContext();
const ProyectFunctions = createContext();

export const ProyectProvider = ({ children }) => {
    const [Proyect, setProyect] = useState(null);

    const initInfo = async () => {
        if (Proyect === null) {
            await getInfoProyects().then((data) => {
                setProyect(data)
                
            })
        }
        else {
            setProyect(null)
        }
    }

    useEffect(() => {
        initInfo();
    },[])

    return (
    <ProyectContext.Provider value={Proyect}>
        {children}
        </ProyectContext.Provider>
        );
}

export function useProyectContext(){
    return useContext(ProyectContext)
}

export function useProyectFunctions(){
    return useContext(ProyectFunctions)
}
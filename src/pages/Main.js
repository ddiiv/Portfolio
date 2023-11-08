import React from "react";
import Proyects from "../components/main/Proyects";
import { useUserContext } from "../context/UserContext.js";

const Main = () => {
    const context = useUserContext();


    return (
        <>  
            <div>
                <Proyects />
            </div>

        </>
    )
}

export default Main;
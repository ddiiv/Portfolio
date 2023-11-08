import React from "react";
import MainBeginning from "../components/main/MainBeginning";
import { useUserContext } from "../context/UserContext.js";
import { useUserFunctions } from "../context/UserContext.js";
const Main = () => {
    const context = useUserContext();
    const contextFunctions = useUserFunctions();
    function getInfo() {
        if (context === null) {
            const ok = true;
            contextFunctions.initializeInfo(ok).then((data) => {
                console.log(data)
            })
        }
    }
    return (
        <>{getInfo()}
            <MainBeginning />
        
        </>
    )
}

export default Main;
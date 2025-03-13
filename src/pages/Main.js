import React, { useState } from "react";
import Proyects from "../components/main/Proyects";
import AboutMe from "../components/main/AboutMe";
import { useUserContext } from "../context/UserContext.js";
import "../styles/Main.css"
import svgarrowdown from "../assets/arrowdown.svg"
import cv from "../assets/cv.pdf"
import cvingles from "../assets/cv-ingles.pdf"


const Main = () => {
    const context = useUserContext();
    const [cvstate, setCvstate] = useState(true);
    const handleSwitchCVState = () => {

        setCvstate(!cvstate);
        console.log(cvstate);
    }

    const switchCV = () => {
        if (cvstate) {

            return (
                <>
                    <iframe
                        className="cvarchive-css"
                        src={cv}
                        type="application/pdf"
                        allowfullscreen="true"

                    />
                </>
            )
        }
        else {
            return (
                <>
                    <iframe
                        className="cvarchive-css"
                        src={cvingles}
                        type="application/pdf"
                        allowfullscreen="true"

                    />
                </>
            )
        }


    }
    return (
        <>

            <section className="ticket-row noflex" >
                <div className="ticket-row--conteiner">
                    <div className="columns-presentation">
                        <div className="ticket-right-column">
                            <h5 className="ticket-row__right-column--primary-text"><span className="richtext textname"> Hola, Soy Dante Insaurralde.</span></h5>
                        </div>
                        <div className="ticket-row__left-column">
                            <h5 className="ticket-row__left-column--primary-text"><span className="richtext description"> ¡Bienvenidos a mi portfolio! </span></h5>
                        </div>
                    </div>
                    <section className="ticket-column-page__reduced">
                        <div className="ticket-row--aboutme">
                            <div className="arrow-section">
                                <img className="arrow-img" alt="arrow-img" src={svgarrowdown} />
                            </div>
                            <AboutMe />
                        </div>
                        <div className="ticket-row--proyects">

                            <Proyects />
                        </div>
                        <div className="ticket-row--download_CV">
                            <div className="handlers-switch">
                                <h5 className="ticket-row__left-column--primary-text"><span className="richtext description">{cvstate == true && "Estas viendo el CV en Español" || cvstate == false && "You are viewing this CV in English"} </span></h5>

                                <label class="switch" for="checkbox">
                                    <input type="checkbox" id="checkbox" onClick={handleSwitchCVState} />
                                    <div class="slider round"></div>
                                </label>
                            </div>
                            {switchCV()}
                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}

export default Main;
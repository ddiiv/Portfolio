
import "../../styles/AboutMe.css";
import React from "react";
const AboutMe = () => {

    const onButtonClick = () => {
    
        // using Java Script method to get PDF file
        fetch("cv.pdf").then((response) => {
            response.blob().then((blob) => {
            
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                    
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "cv.pdf";
                alink.click();
            });
        });
    };
    return (
        <div className="ticket-aboutme">
            <header className="ticket-aboutme__header">
                <svg class="svg-aboutme" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
                </svg>
                <h1 className="ticket-aboutme__header--title">Sobre mi</h1>
            </header>
            <div className="ticket-aboutme__container">

                <div className="ticket-aboutme__left-column">
                    <h5 className="ticket-aboutme__left-column--primary-text"><p className="richtext-aboutme">Soy Dante y tengo 18 años, estudio Ingeniería en Sistemas en la UTN, por otro lado estoy tambien cursando en Técnico de reparación de celulares. En cuanto a mi en lo personal soy alguien disciplinado y muy activo en mi dia a dia, también compito en un equipo de basquet y trabajo de vendedor en una galería. Estoy buscando oportunidades laborales en donde los puestos que encuentre, me ayuden a explotar mis habilidades, aprender y obtener resultados. </p></h5>
                </div>
                <div className="ticket-aboutme__right-column">
                    <div className="buttons-aboutme-container">
                       <button className="button-aboutme" onClick={onButtonClick}><p className="textbutton">Descargar CV</p></button>
                       <button className="button-aboutme"><p className="textbutton">Contactame</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;
import React from "react";
import "../../styles/Education.css"
import cetia from "../../assets/cetia_logo.jpg"
import utn from "../../assets/UTN_logo.jpg"
import ort from "../../assets/ort.png"
import iac from "../../assets/iac.png"


const Education = () => {
    return (
        <>
            <header className="ticket-aboutme__header">
                <svg class="svg-aboutme" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd" />
                </svg>
                <h1 className="ticket-aboutme__header--title">Educacion</h1>
            </header>
            <section className="ticket-row education__container">
                <article className="grid-cardcontainer">
                    <div className="left-card">
                        <img src={utn} alt="utn" className="img-education" />
                    </div>
                    <div className="right-card">
                        <div className="card-header">
                            <svg class="cardSelector" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clip-rule="evenodd" />
                            </svg>
                            <h5 className="card-title">Ingeniería en Sistemas - UTN</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-subtext-date">2025</p>
                            <p className="card-text">Actualmente cursando primer año de la carrera.</p>
                        </div>
                    </div>

                </article>
                <article className="grid-cardcontainer">
                    <div className="left-card">
                        <img src={ort} alt="utn" className="img-education" />
                    </div>
                    <div className="right-card">
                        <div className="card-header">
                            <svg class="cardSelector" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clip-rule="evenodd" />
                            </svg>
                            <h5 className="card-title">Bachiller Informatica - ORT</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-subtext-date">2018-2023</p>
                            <p className="card-text">Graduado de la secundaria ORT, orientado en informatica y con experiencia en pasantías.</p>
                        </div>
                    </div>
                </article>
                <article className="grid-cardcontainer">
                    <div className="left-card">
                        <img src={iac} alt="utn" className="img-education" />
                    </div>
                    <div className="right-card">
                        <div className="card-header">
                            <svg class="cardSelector" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clip-rule="evenodd" />
                            </svg>
                            <h5 className="card-title">Curso FullStack.NET - IAC Flores</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-subtext-date">2021</p>

                            <p className="card-text">Curso de desarrollo web .net en donde recibí una nota de 8 en el final. El framework que usamos para desarrollar aplicaciones fue ASP.NET en C#.  </p>
                        </div>
                    </div>

                </article>
                <article className="grid-cardcontainer">
                    <div className="left-card">
                        <img src={cetia} alt="utn" className="img-education" />
                    </div>
                    <div className="right-card">
                        <div className="card-header">
                            <svg class="cardSelector" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clip-rule="evenodd" />
                            </svg>
                            <h5 className="card-title">Técnico en celulares - CETIA</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-subtext-date">2025</p>

                            <p className="card-text">Aquí curse la tecnicatura en arreglo de celulares, donde aprendi a diagnosticar, resolver y presupestar arreglos. A nivel software como hardware y un poco de microsoldadura.</p>
                        </div>
                    </div>
                </article>
            </section>

        </>
    )
}
export default Education
import React from "react";
import "../../styles/Proyects.css"
import { useProyectContext } from "../../context/ProyectContext";

const Proyects = () => {
    const proyectContext = useProyectContext();
    return (
        <>
            <header className="ticket-aboutme__header">
                <svg class="svg-aboutme" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
                    <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
                </svg>
                <h1 className="ticket-aboutme__header--title">Proyectos</h1>
            </header>
            <article className="ticket-row proyects__container">
                <div className="columns-proyects">
                    {proyectContext?.map(pc => (
                        <>
                            <div className="ticket-row__columns">
                                <div className="ticket-row__right-container">
                                    <div className="img-proyect-container">
                                        <img src={pc.img} alt="img-proyect" className="img-proyect" />
                                    </div>
                                </div>
                                <div className="ticket-row__left-column" id="proyect">
                                    <div className="ticket-row__column-item" key={pc.id}>
                                        <div className="content">
                                            <h5 className="ticket-row__column--primary-text"><span className="richtext title-proyect">{pc.title}</span></h5>
                                        </div>
                                    </div>
                                    <div className="ticket-row__column-item">
                                        <div className="content">
                                            <h5 className="ticket-row__column--primary-text"><span className="richtext descriptionProyect">{pc.descriptionProyect}</span></h5>
                                        </div>
                                    </div>
                                    <div className="ticket-row__column-item">
                                        <div className="content">
                                            <h5 className="ticket-row__column--primary-text"><span className="richtext ">{pc.technologies}</span></h5>
                                        </div>
                                    </div>
                                    <div className="ticket-row__column-item-down">
                                        <h5 className="ticket-row__column--primary-text"><a href={pc.git} className="richtext linkProyect">Ver mas de este proyecto ↗</a></h5>
                                    </div>
                                </div>

                            </div>
                            <div className="separator-container">
                                <div className="separator-ui"></div>
                            </div>
                        </>
                    ))}

                </div>
            </article >

        </>
    )
}
export default Proyects
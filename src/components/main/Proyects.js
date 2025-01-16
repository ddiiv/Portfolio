import React from "react";
import "../../styles/Proyects.css"
import { useProyectContext } from "../../context/ProyectContext";

const Proyects = () => {
    const proyectContext = useProyectContext();
    return (
        <>

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
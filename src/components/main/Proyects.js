import React from "react";
import "../../styles/Proyects.css"

const Proyects = () => {


    return (
        <>
            <article className="ticket-row proyects__container">
                <div className="columns-proyects">
                    <div className="ticket-row__left-container">
                        <div className="ticket-row__column-item">
                            <h5 className="ticket-row__column--primary-text"><span className="richtext title-proyect">asddsaasfasfsafasdsadsa</span></h5>
                        </div>
                        <div className="ticket-row__column-item">
                            <h5 className="ticket-row__column--primary-desciption"><span className="richtext description">asdasdasdasdasdasfdasfsaasdasdasdasdasdasfdasfsaasdasdasdasdasdasfdasfsaasdasdasdasdasdasfdasfsa</span></h5>
                        </div>
                        <div className="ticket-row__column-item">
                            <h5 className="ticket-row__column--primary-desciption"><span className="richtext description">asdasdasdasdasdasdasdasdasdasfdasfsaasdasdasdasdasdasfdasfsaasdasdasdasdasdasfdasfsaasdasdasdasdasdasfdasfsa</span></h5>
                        </div>
                        <div className="ticket-row__column-item-down">
                            <h5 className="ticket-row__column--primary-text"><span className="richtext description">asdasdasdasdasdasdasdasdasdasfdasfsa</span></h5>
                        </div>
                    </div>
                </div>
                <div className="ticket-row__right-container">
                    <div className="ticket-row__column-item">
                        <h5 className="ticket-row__column--primary-text"><img src="https://www.labrujula24.com/wp-content/uploads/2022/05/pelado.jpg" alt="img-proyect" className="img-proyect" /></h5>
                    </div>
                </div>
                
            </article>
            <div className="separator-ui"></div>
        </>
    )
}
export default Proyects
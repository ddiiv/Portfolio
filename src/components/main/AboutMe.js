import photo from "../../assets/example.avif";
import "../../styles/AboutMe.css";

const AboutMe = () => {
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
                    <h5 className="ticket-aboutme__left-column--primary-text"><p className="richtext-aboutme">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p></h5>
                </div>
                <div className="ticket-aboutme__right-column">
                    <div className="img-aboutme-container">
                        <img src={photo} alt="img-aboutme" className="img-aboutme" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;
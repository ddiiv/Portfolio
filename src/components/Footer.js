import "../styles/Footer.css"
import { useUserContext } from "../context/UserContext"

const Footer = () => {
    const usercontext = useUserContext();
    console.log(usercontext)
    return (
        <>
            <footer>
                <div className="container-all__items">

                    <div className="container-item__left"> <span className="item-span-footer">Dante Insaurralde Viola - 2023</span>
                    </div>
                    <div className="container-items__right">
                        <div className="item__right">
                            <span className="item-span-footer"><a className="nothing" href={usercontext?.linkedin} alt=""> LinkedIn</a></span>
                        </div>
                        <div className="item__right">
                            <span className="item-span-footer"><a className="nothing" href={usercontext?.github} alt="">Github</a></span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer
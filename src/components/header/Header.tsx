import "./style.css"
import mobimg from "../../img/Group 1332.png"

const Header = () => {
    return (
        <header className="header">
            <div className="header_wrapper">
            <h1 className="header_title">Retaily</h1>
            </div>
            <img src={mobimg} alt="" className="imag" />
        </header>

    )
}

export default Header
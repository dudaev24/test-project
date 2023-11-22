import "./style.css"
import mobimg from "../../../../img/Group 1332.png"
import logo_back from "../../../../img/Retaily.png"


const Header = () => {
    return (
        <header className="header">
            <div className="header_wrapper">
            <img src={logo_back} alt="logo_back" />
            
            <img src={mobimg} alt="mobile_img" className="imag" />
            </div>
        </header>

    )
}

export default Header
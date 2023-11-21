import './style.css';
import logo from '../../../../img/logo.png';

const Navbar = () => {
    return <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href='/' className= "logo"><img  src= {logo} alt="txt" /></a>
                <ul className="nav-list" >
                    <li className="nav-item_list"><a href="./" className="nav-list_link">Что такое Ретейли?</a></li>
                    <li className="nav-item_list"><a href="https://apps.apple.com/ru/app/retaily-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D1%8B/id1561434758" className="nav-list_link">Установить на IOS</a></li>
                    <li className="nav-item_list"><a href="https://play.google.com/store/apps/details?id=retaily.online" className="nav-list_link">Утсановить на Android</a></li>
                    <li className="nav-item_list"><a href="./login" className="nav-list_link">Войти</a></li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar
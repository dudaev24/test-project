import logo from "../../../img/logo.png"
import './style.css'

const NavCol = () => {
    return (
    <div className="nav_col">
        <img src={logo} alt="logo"/>
        <div className="navCol_list">
            <h1>Личный кабинет</h1>
            <h1>Корзина</h1>
            <h1>Мои заявки</h1>
            <h1>Поставщики</h1>
            <h1>Статистика</h1>
        </div>
    </div>);
}
export default NavCol;

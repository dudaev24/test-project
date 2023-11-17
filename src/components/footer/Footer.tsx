import "./style.css";
import logo from '../../img/logo.png';
import tel from '../../img/tel.png';
import vk from '../../img/vk.png';
import wa from '../../img/wa.png';
import QR from '../../img/QR.png';
import appstore from '../../img/appstore.png';
import googleplay from '../../img/googleplay.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer_links">
                    <div className="sb_footer_links-div">
                        <ul className="social">
                            <li className="social_item"><a href="#!"><img src={tel} alt="" /></a></li>
                            <li className="social_item"><a href="#!"><img src={vk} alt="" /></a></li>
                            <li className="social_item"><a href="#!"><img src={wa} alt="" /></a></li>
                        </ul>
                        <div className="Group1">
                        <div className="item1"> <img src={QR} alt="" /></div>
                        <div className="item2"> <img src={appstore} alt="" /></div>
                        <div className="item3"> <img src={googleplay} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sb_footer-below">
                <ul className="social">
                <li>info@retaily.online</li>
                <li>+7 (983) 531-55-69</li>
                <li>с 2021, ООО «Ретейли», официальный сайт</li>
                <li><img src={logo} alt="" /></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer
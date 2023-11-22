import "./style.css";
import logo from '../../../../img/logo.png';
import tel from '../../../../img/tel.png';
import vk from '../../../../img/vk.png';
import wa from '../../../../img/wa.png';
import QR from '../../../../img/QR.png';
import appstore from '../../../../img/appstore.png';
import googleplay from '../../../../img/googleplay.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="sb_footer">
                <div className="sb_footer_links">
                         <div className="Group1">
                            <div className="item2"> <img src={appstore} alt="" /></div>
                            <div className="item3"> <img src={googleplay} alt="" /></div>
                            <div className="item1"> <img src={QR} alt="" /></div>
                        </div>
                        <div className="social">
                            <a href="#!" className="social_item"><img src={tel} alt="" /></a>
                            <a href="#!" className="social_item"><img src={vk} alt="" /></a>
                            <a href="#!" className="social_item"><img src={wa} alt="" /></a>
                        </div>
                        
                    </div>
            </div>
            <div className="sb_footer-below">
                <div className="sb_footer-below-span">
                <span>info@retaily.online</span>
                <span>+7 (983) 531-55-69</span>
                <span>с 2021, ООО «Ретейли», официальный сайт</span>
                
                </div>
                <a href="#!"><img src={logo} alt="" /></a>
            </div>
        </footer>
    );
}

export default Footer
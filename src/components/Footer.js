import playstore from '../assets/playstore.png';
import appstore from '../assets/appstore.png';

import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <div className="footer__box">
                    <h3 className="footer__title">TrollBasket</h3>
                    <p className="footer__deal">Product Store</p>
                    <a href="#"><img src={appstore} alt="appstore_logo" className="footer__store appstore"/></a>
                    <a href="#"><img src={playstore} alt="playstore_logo" className="footer__store"/></a>
                </div>

                <div className="footer__box">
                    <h3 className="footer__title">EXPLORE</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Home</a></li>
                        <li><a href="#featured" className="footer__link">Featured</a></li>
                        <li><a href="#new" className="footer__link">New</a></li>
                        <li><a href="#subscribe" className="footer__link">Subscribe</a></li>
                    </ul>
                </div>

                
                <div className="footer__box">
                    <h3 className="footer__title">OUR SERVICES</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Pricing</a></li>
                        <li><a href="#" className="footer__link">Free Shipping</a></li>
                        <li><a href="#" className="footer__link">Gift Cards</a></li>
                    </ul>
                </div>

                
                <div className="footer__box">
                    <h3 className="footer__title">FOLLOW</h3>
                    <a href="#" className="footer__social"><FaFacebookSquare /></a>
                    <a href="#" className="footer__social"><FaInstagramSquare /></a>
                    <a href="#" className="footer__social"><FaTwitter /></a>
                </div>
            </div>
            <p className="footer__powered">Designed by Prince Ndu | &copy; 2021 copyright all rights reserved</p>
        </footer>
    )
}

export default Footer;
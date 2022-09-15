import Navigation from "../app-navigation/app-navigation";
import Divider from "../app-divider/app-divider";
import './app-footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_main">
                    <Navigation 
                        color= {'black'}
                        logo={'footer-logo.png'}/>
                    <Divider 
                        logo = {'beetwenlinelogoblack.png'}
                        color = {'black'}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
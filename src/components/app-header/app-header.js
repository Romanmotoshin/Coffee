import './app-header.scss';
import Navigation from '../app-navigation/app-navigation';
import Divider from '../app-divider/app-divider';

const Header = () => {
    return (
        <div className='main'>
            <div className="container">
                <Navigation
                    color={'white'}
                    logo={'header-logo.png'}/>
                <h1>Everything You Love About Coffee</h1>
                <Divider 
                    color = {null}
                    logo = {'beetwenlinelogo.png'}/>
                <div className="main_descr">We makes every day full of energy and taste</div>
                <div className="main_descr second-descr">Want to try our beans?</div>
                <button className="main_more">More</button>
            </div>
        </div>
    )
}

export default Header;
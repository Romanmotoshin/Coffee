import classNames from 'classnames';
import './app-navigation.scss'

const Navigation = ({color, logo}) => {
    return (
        <div className={classNames('nav', color)}>
            <img src={require(`../../img/${logo}`)} alt="logo" className="nav_logo" />
            <a href="/#" className="link">Coffee house</a>
            <a href="/#" className="link">Our coffee</a>
            <a href="/#" className="link">For your pleasure</a>
        </div>
    )
}

export default Navigation;
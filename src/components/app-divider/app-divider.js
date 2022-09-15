import './app-divider.scss';
var classNames = require('classnames');

const Divider = ({color, logo}) => {
    return (
        <div className="divider">
            <div className={classNames("divider_line", color)}></div>
            <img src={require(`../../img/${logo}`)} alt="logo" className="divider_img" />
            <div className={classNames("divider_line", color)}></div>
        </div>
    )
}

export default Divider;
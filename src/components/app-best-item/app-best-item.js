import './app-best-item.scss'

const BestItem = ({img, descr, price}) => {
    return (
        <div className="item">
            <img src={require(`../../img/${img}`)} alt="best coffee" className="item_img" />
            <div className="item_descr">{descr}</div>
            <div className="item_price">{price}$</div>
        </div>
    )
}

export default BestItem;
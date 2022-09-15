import './app-best.scss'
import BestItem from '../app-best-item/app-best-item';

const Best = () => {
    return (
        <div className="best">
            <div className="container">
                <div className="best_header">Our best</div>
                <div className="best_items">
                    <BestItem 
                        img={'Bestitem1.png'}
                        descr={'Solimo Coffee Beans 2 kg'}
                        price={'10.73'}/>
                    <BestItem 
                        img={'Bestitem2.png'}
                        descr={'Solimo Coffee Beans 2 kg'}
                        price={'10.73'}/>
                    <BestItem 
                        img={'Bestitem3.png'}
                        descr={'Solimo Coffee Beans 2 kg'}
                        price={'10.73'}/>
                </div>
            </div>
        </div>
    )
}

export default Best;
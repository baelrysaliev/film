import { useSelector } from 'react-redux'
import './order-page'
import { calctotalPrice } from '../../components/utils'

export default function OrderPage() {

    const items = useSelector(state => state.cart.itemsIbCart)\

    if (items.length < 1 ) {
        return <h1 className='order-not'>Ваша корзина пуста</h1>
    }
    return (
        <div className='order-page'>
            <div className='order-page_left'>
                {items.map(film => <OrderItem film={film} />)}
            </div>
            <div className='order-page_right'>
                <span>{items.length} товар на сумму {calctotalPrice(items)}сом</span>
                <button className='buy-btn'>Купить</button>
            </div>
        </div>
    )
}
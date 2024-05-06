import './cart-menu.css'
import Button from '../button/button'
import { calctotalPrice } from '../utils'
import CartItems from '../cart-item/cart-item'
import { useNavigate } from 'react-router-dom'


export default function CartMenu({ items }) {

    const sum_cart = items.reduce((sum, items) => sum += items.price, 0)
    const navigate = useNavigate()

    
    return (
        <div className='cart-menu'>
            <div className='cart-menu__film-list'>
                {
                    items.length > 0 ? items.map(film => <CartItems film={film} />) : 'Корзина пуста'
                }
                {
                    items.length > 0 ? (
                        <div className='cart-modal'>
                            <div className='cart-modal__total-price'>
                                <span>Итого:</span>
                                <span>{calctotalPrice(items)}0</span>
                            </div>
                            <Button onClick={()=> navigate('/order')} type="primary" size='m'>
                                Оформить заказ
                            </Button>
                        </div>
                    ) : ""
                }
            </div>
            <div className='cart_sum'>
                <p>общая сумма: {sum_cart} сом</p>
            </div>
            <button>Перейти к оплате</button>
        </div>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
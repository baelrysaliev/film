import { deleteItemsFromCard, setItemsInCard } from '../../redux/cart/cart'
import Button from '../button/button'
import './film-buy.css'
import {useDispatch, useSelector} from 'react-redux'

export default function FilmBuy ({film}) {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === film.id)


    const handleClick = () => {
        if(isItemInCart) {
            dispatch(deleteItemsFromCard(film.id))
        }else {
            dispatch(setItemsInCard(film))
        }
    }

    return (
        <div className='film-buy'>
            <span className='filmBuy-price'>{film.price} сом</span>
            <Button 
                type={isItemInCart ? 'secondary' : 'primary'}
             onClick={handleClick}>{isItemInCart ? 'Убрать из корзины' : 'В корзину'}</Button>
        </div>
    )
}
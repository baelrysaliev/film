import React from "react";
import './cart-item.css'
import { FaDeleteLeft } from 'react-icons/fa6'
import { deleteItemsFromCard } from '../../redux/cart/cart'
import { useDispatch, useSelector } from "react-redux";


export default function CartItems({ film }) {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === film.id)


    const deleteClick = () => {
        if (isItemInCart) {
            dispatch(deleteItemsFromCard(film.id))
        }
    }
    return (
        <div className="cart-item">
            <img src={film.image} className="cart-image" alt="" />
            <div className="block-right">
                <span className="cart-title">{film.title}</span>
                <div className="cart-itemPrice">
                    <span>{film.price} сом</span>
                </div>
            </div>
            <FaDeleteLeft onClick={deleteItemsFromCard(film.id)} />
        </div>
    )


}
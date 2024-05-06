import React from 'react'
import './order-items.css' 
export default function OrderItem({ film }) {
    
    return (
        <div className='order-item'>
        <div className='resp-order'>
        <div className='order-item_cover'>
            <img className='order-item_image' src={film.image} alt={film.title} />
            </div>
                <div className='order-item_title'>
                    <span className='film_title'>{film.title}</span> 
                    <div>
                        <span className='order-item_genres'>Жанр:</span>
                        <span className='order-item_genre'>{film.genres}</span>
                    </div>
                    <h1 className='order-item_genre'>Описание</h1>
                    <p className='order-item_genre'>{film.description}</p>
        </div>
        </div>
        </div>
    )
}
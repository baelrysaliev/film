import { configureStore } from '@reduxjs/toolkit'
import cart from './cart/cart'
import film from './film/film'

export const store = configureStore({
    reducer: {
        cart: cart,
        film: film
    }
})
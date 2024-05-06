
 export const calctotalPrice = (items) => items.reduce((acc, film) => acc += film.price, 0)
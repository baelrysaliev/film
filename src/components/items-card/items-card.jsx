import React from "react";
import './items-card.css'

export default function ItemsInCart ({count}) {
    return count > 0 ? (
        <div className="items-cart">
            {count}
        </div>
    ) : null
}
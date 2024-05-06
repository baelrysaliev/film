import React from "react";
import './film-cover.css'

export default function FilmCover({ image, onClick }) {
    return (
        <img onClick={onClick} className= 'film-cover' src={image} alt="" />
    )
}
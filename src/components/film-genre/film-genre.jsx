import './film-genre.css'

export default function FilmGenre({ genre }) {
    return(
        <div>
            <span className='film-genres'>{genre}</span>
        </div>
    )
}
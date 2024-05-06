import { useDispatch } from 'react-redux'
import FilmBuy from '../film-buy/film-buy'
import FilmCover from '../film-cover/film-cover'
import FilmGenre from '../film-genre/film-genre'
import './film-item.css'
import { useNavigate } from 'react-router-dom'
import { setCurrentFilm } from '../../redux/film/film'

export default function FilmItem({ film }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(setCurrentFilm(film))
        navigate(`/film/${film.title}`)
    }
    return (
        <div className='film-item'>
            <FilmCover onClick={handleClick} image={film.image} />
            <div className='details'>
                <span className='film-title'>{film.title}</span>
                <div className='film-genre'>
                        {film.genres.map(genre => <FilmGenre genre={genre} key={genre} />)}
                </div>
                <div className='filmItem-buy'>
                    <FilmBuy film={film} />
                </div>
            </div>
        </div>
    )
}
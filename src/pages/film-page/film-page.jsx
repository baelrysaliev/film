import { useSelector } from 'react-redux'
import FilmCover from '../../components/film-cover/film-cover'
import './film-page.css'
import FilmGenre from '../../components/film-genre/film-genre'
import FilmBuy from '../../components/film-buy/film-buy'

export default function FilmPage() {



    const film = useSelector(state => state.film.currentFilm)


    return (

        <div>
            {
                film ? (
                    <div className='film-page page'>
                        <h1 className='film-page_title'>{film.title}</h1>
                        <div className='film-page_content'>
                            <div className='film-page_left'>
                                <iframe src={film.video} frameBorder="0"></iframe>
                            </div>
                            <div className='film-page_right'>
                                <div className='class-for-responsive'>
                                    <FilmCover image={film.image} />
                                </div>
                                <p>{film.description}</p>
                                <p className='secondary-text'>Популярные метки этого продукта:</p>
                                {film.genres.map(genre => <FilmGenre key={genre} genre={genre} />)}
                                <div className='film-page_buy-film'>
                                    <FilmBuy film={film} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : 'Загрузка...'
            }
        </div>
    )
}
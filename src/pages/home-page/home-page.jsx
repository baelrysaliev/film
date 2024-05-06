import FilmItem from '../../components/film-item/film-item'
import './home-page.css'

export default function HomPage({ data }) {
    return (
        <div className='home-page'>
            {data.map(item => <FilmItem film={item} key={item.id} />)}
        </div>
    )
}
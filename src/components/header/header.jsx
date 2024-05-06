import { useState } from 'react'
import './header.css'
import { FaTimes, FaBars } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import CartBlock from '../cart-block/cart-block'
import { useDispatch } from 'react-redux'
import { setCurrentFilm } from '../../redux/film/film'

export default function Header({ data }) {

    const [show, setShow] = useState(false)
    const [viewSearch, setViewSearch] = useState(false)
    const [search, setSearch] = useState('')
    const toggleClass = show ? 'resp_nav' : ''
    const toggleSearch = viewSearch ? 'view-search' : ''

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (title) => {
        navigate(`/film/${title.title}`)
        dispatch(setCurrentFilm(title))
        setSearch('')
    }

    return (
        <div className="header">
            <button className='burger-btn' onClick={() => setShow(!show)}><FaBars /></button>
            <div className='wrapper'>
                <NavLink to="/" className='store-title'>онлайн фильмы</NavLink>
            </div>
            <div className={`nav-menu ${toggleClass}`}>
                <ul>
                    <li><NavLink className='navLink' to="/">Главная</NavLink></li>
                    <li><NavLink className='navLink' to="/search">Поиск по жанрам</NavLink></li>
                    <li><NavLink className='navLink' to="/about">Контакты</NavLink></li>

                </ul>
                <button className='burger-btn close-btn' onClick={() => setShow(!show)}>
                    <FaTimes size={20} />
                </button>
            </div>
            <div className='card-btn-wrapper'>
                <div className='serch-block'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className={`input-serch ${toggleSearch}`} type='search' placeholder='Введите запрос' />
                    {
                        search && <div className='input-values'>
                            {
                                data.filter(item => {
                                    if (search !== "") {
                                        return item.title.toLowerCase().includes(search.toLowerCase())
                                    }
                                }).map(film => {
                                    return search &&
                                        <div className='search-result' onClick={() => handleClick(film)}>
                                            <div>
                                                <img width={100} src={film.image} alt="" />
                                            </div>
                                            <div className='search-content'>
                                                <div className='search-title'>{film.title}</div>
                                                <div className='search-genre'>{film.genres}</div>
                                            </div>
                                        </div>

                                })
                            }
                        </div>
                    }
                </div>
                <FiSearch className='search-btn' size={20} />
                <CartBlock />
            </div>
        </div>
    )
}
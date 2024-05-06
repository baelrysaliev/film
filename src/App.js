import cover1 from './fim-covers/infinityVar.jpg'
import coverSmoll1 from './fim-covers/infinityVarSmoll.jpg'
import cover2 from './fim-covers/avatar.jpg'
import coverSmoll2 from './fim-covers/avatarSmoll.jpg'
import cover3 from './fim-covers/kurmanjan.jpg'
import coverSmoll3 from './fim-covers/kurmanjanSmoll.webp'
import cover4 from './fim-covers/parazity.jpg'
import coverSmoll4 from './fim-covers/parazitySmoll.webp'
import Header from './components/header/header'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import HomPage from './pages/home-page/home-page'
import OrderPage from './pages/film-page/film-page'
import FilmPage from './pages/film-page/film-page'
function App() {

  const ITEMS = [
    {
      id: 1,
      country: 'США',
      year: '2018г',
      image: cover1,
      image_smoll: coverSmoll1,
      title: 'Мстители: Война бесконечности',
      genres: ['Боевик ', 'Приключения ', 'Фэнтези '],
      video: 'https://www.youtube.com/embed/FeJKZMFJ7NA',
      price: 340,
      description: 'Несмотря на объединённые силы всех супергероев Земли, включая Человека-Паука и Чёрную Пантеру, ранее не входивших в команду, Тора и Стражей Галактики, никогда ранее судьба всего мира не была настолько неопределённой.'
    },
    {
      id: 2,
      year: '2009г',
      country: 'США',
      image: cover2,
      image_smoll: coverSmoll2,
      title: 'Аватар',
      genres: ['Фантастика ', 'Боевик ', 'Драмы '],
      video: 'https://youtube.com/embed/4HFlPcX2HFo',
      price: 300,
      description: 'История рассказывает о Джейке Салли, лишившемся возможности ходить морпехе в отставке. По трагической случайности, его брата-близнеца, который должен был стать частью инопланетного проекта, убивают в уличной драке. Вместо него Джейку предоставляется возможность стать оператором так называемого «аватара».'
    },
    {
      id: 3,
      year: '2014г',
      country: 'Киргизия',
      image: cover3,
      image_smoll: coverSmoll3,
      title: 'Курманжан датка',
      genres: ['Драма ', 'Исторический фильм ', 'Биография '],
      video: 'https://youtube.com/embed/WSPekXPtPNc',
      price: 510,
      description: 'В период с конца 18-го по начало 19-го века, когда женщины в Центральной Азии не имели никаких прав, появилась Курманжан Датка — женщина, которая благодаря своей мудрости и волевому характеру, пришла к власти в своей стране и спасла нацию от полного развала.'
    },
    {
      id: 4,
      year: '2019г',
      country: 'Корея',
      image: cover4,
      image_smoll: coverSmoll4,
      title: 'Паразиты',
      genres: ['Триллер ', 'драма ', 'Комедия '],
      video: 'https://www.youtube.com/embed/GGnM74uxjlo',
      price: 480,
      description: 'Обычное корейское семейство Кимов жизнь не балует. Однажды друг сына семейства, уезжая на стажировку за границу, предлагает тому заменить его и поработать репетитором у старшеклассницы в богатой семье Пак.Тут же ему в голову приходит необычный план по трудоустройству сестры.'
    }
  ]
  return (
    <div className="App">
      <Header data={ITEMS} />
      <Routes>
        <Route path='/' element={<HomPage data={ITEMS} />} />
        <Route path='/film/:title' element={<FilmPage />} />
        <Route path='/order' element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;

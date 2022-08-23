import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import TOP from './pages/top100';
import Playlist from './pages/Playlist';
import Mv from './pages/mv';
import PlaySong from './components/playSong';
import DetailPage from './pages/DetailPage';
import DetailMv from './pages/DetailMv';
import Search from './pages/search';
import Recommend from './components/recommend';

function App() {
  return (
    <>
      <div className='music-app pt-[70px]'>
          <Recommend />
          <Header />
  
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/top100' element={<TOP />}/>
            <Route path='/playlist' element={<Playlist />}/>
            <Route path='/mv' element={<Mv />}/>
            <Route path='/top100/:id' element={<DetailPage />} />
            <Route path='/mv/:id' element={<DetailMv />} />
            <Route path='/search/:keyword' element={<Search />} />
          </Routes>

          <PlaySong />
      </div>
    </>
  );
}

export default App;

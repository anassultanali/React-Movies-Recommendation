
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorites from "./pages/favorites";

function App() {

  return (
    <div className="main-content">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </div>
  )
}

export default App

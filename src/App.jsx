
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorites from "./pages/favorites";
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Navbar />
    <main className="main-content">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </main>
    </>
  )
}

export default App

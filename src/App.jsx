
import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={{title: "zizo" , release_date: "2020"}} />
      
      <MovieCard movie={{title: "bla" , release_date: "2025"}} />

    </>
  )
}

export default App

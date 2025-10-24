import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQurey] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Faild to load Movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handelSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <>
      <div className="home">
        <form action="" onSubmit={handelSearch} className="search-form">
          <input
            type="text"
            placeholder="Search ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQurey(e.target.value);
            }}
            name=""
            id=""
            className="search-input"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Home;

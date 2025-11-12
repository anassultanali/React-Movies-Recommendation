import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MoviesContext";
function Favorites() {
  const { favorite } = useMovieContext();

  if (favorite) {
    return (
      <div className="movies-grid">
        {favorite.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Add movies to your favorites.</p>
      </div>
    </>
  );
}

export default Favorites;

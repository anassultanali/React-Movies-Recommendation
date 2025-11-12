import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MoviesContext";
function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div>
        <h2 className="favorites">Your favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
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

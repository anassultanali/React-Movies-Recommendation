import { useContext } from "react";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorite, isFavorite } = useContext();
  const favorite = isFavorite(movie.id); 

  function onFavoriteClicked(e) {
    e.preventDefault()

    if(favorite) removeFromFavorite(movie.id)
    else addToFavorites(movie)
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "activ" : ""} `} onClick={onFavoriteClicked}>
              like
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3 className="title">{movie.title}</h3>
          <p>{movie.releaseDate?.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
}
export default MovieCard;

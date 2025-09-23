import "../css/MovieCard.css"

function MovieCard({movie}) {
    
    function onFavoriteClicked() {
        alert("Clicked");
    }
    
    return (
        <>
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn"  onClick={onFavoriteClicked}>
                        like
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="title">{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
        </>
    )
}
export default MovieCard;
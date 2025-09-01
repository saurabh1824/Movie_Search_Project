import '../css/MovieCard.css'

function MovieCard({movie}) {

    function favbutton(){
        alert("Added to favorites")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.primaryImage} alt={`${movie.originalTitle} Poster`} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={favbutton}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.originalTitle}</h3>
                <p className="release_date">{movie.releaseDate}</p>
            </div>
        </div>
    );
    
}



export default MovieCard;
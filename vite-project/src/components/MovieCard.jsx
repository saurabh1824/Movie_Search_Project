import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({movie}) {
    const {addToFavourite , removeFromFavourite , isFavourite}= useMovieContext()

    const favorite = isFavourite(movie.id)

    function favbutton(e){
        e.preventDefault();
        if (favorite){
            removeFromFavourite(movie.id)
        }
        else addToFavourite(movie)
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.primaryImage} alt={`${movie.originalTitle} Poster`} />
                <div className="movie-overlay">
                    <button className={`favorite-btn  ${favorite  ? "active":""}`} onClick={favbutton}>
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
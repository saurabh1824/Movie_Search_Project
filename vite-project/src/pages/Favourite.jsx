import "../css/Favourite.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favourite() {

  const {favourite} = useMovieContext();

  if(favourite){

    return <>
      <div className="favourites">
        <h2>
          Your Favourite Movies
        </h2>
        <div className="movies-grid">
                      {favourite.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </div>
      </div>
    </>

  }
 
  return (
    <div className="favourite-empty">
      <h2>Your Favourite Movies</h2>
      <p>You have not added any movies to your favourites yet.</p>
    </div>
  );


}

export default Favourite;

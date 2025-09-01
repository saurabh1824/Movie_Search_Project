import MovieCard from "../components/MovieCard";
import {useState ,useEffect} from "react";
import {getPopularMovies} from "../services/api";
import '../css/Home.css'

function Home() {

    const [searchQuery, setsearchQuery] = useState("");
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
                setError("Failed to loading movies.");

            } finally
            {
                setLoading(false);
            }
            
        }

        loadPopularMovies();
    } ,[]);


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Searching for " + searchQuery);
        setsearchQuery("");
    }

    return (
        <div className="home">
            <form onSubmit={handleSubmit} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => (setsearchQuery(e.target.value))}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

        {error && <p className="error-message">{error}</p>}

        {loading ? 
            (<p className="loading-message">Loading movies...</p>) 
            :(
                <div className="movies-grid">
                    {movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
                </div>
            )
        }
            

        </div>
    );

}

export default Home;
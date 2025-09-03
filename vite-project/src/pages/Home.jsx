import MovieCard from "../components/MovieCard";
import {useState ,useEffect} from "react";
import {getPopularMovies ,searchMovies} from "../services/api";
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
                // Handle API 429 or unexpected response
                let moviesArray = [];
                if (Array.isArray(popularMovies)) {
                    moviesArray = popularMovies;
                } else if (popularMovies?.results && Array.isArray(popularMovies.results)) {
                    moviesArray = popularMovies.results;
                } else if (popularMovies?.d && Array.isArray(popularMovies.d)) {
                    moviesArray = popularMovies.d;
                }
                setMovies(moviesArray);
                setError(null);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
                setError("Failed to load movies.");
                setMovies([]);
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            return;
        }
        
        if (loading) return; // Prevent multiple submissions while loading
        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            let moviesArray = [];
            if (Array.isArray(searchResults)) {
                moviesArray = searchResults;
            } else if (searchResults?.results && Array.isArray(searchResults.results)) {
                moviesArray = searchResults.results;
            } else if (searchResults?.d && Array.isArray(searchResults.d)) {
                moviesArray = searchResults.d;
            }
            if (moviesArray.length === 0) {
                setError("No movies found.");
            } else {
                setError(null);
            }
            setMovies(moviesArray);
        } catch (error) {
            setError("Failed to search movies.");
            setMovies([]);
            console.error("Error searching movies:", error);
        } finally {
            setLoading(false);
        }

        // setsearchQuery("");
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
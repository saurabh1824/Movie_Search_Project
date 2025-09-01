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


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            return;
        }
        
        if (loading) return; // Prevent multiple submissions while loading
        setLoading(true);

        try {

            const searchResults = await searchMovies(searchQuery);
            if (searchResults.length === 0) {
                setError("No movies found.");
            }
            setMovies(searchResults);
            setError(null); // Clear previous errors if any
            
        } catch (error) {
            setError("Failed to search movies.");
            console.error("Error searching movies:", error);
        }finally{
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
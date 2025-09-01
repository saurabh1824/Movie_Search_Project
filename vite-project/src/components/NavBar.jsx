import { Link } from "react-router-dom";
import '../css/Navbar.css'

function NavBar() {
  return (
    <nav className="navbar">
        <div className="nabar-brand">
            <Link to="/">Movie Search APP</Link>
        </div>
        <div className="navbar-link">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/favourite">Favourite</Link>
        </div>
    </nav>
  );
}

export default NavBar;
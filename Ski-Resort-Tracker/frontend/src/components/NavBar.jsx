import { Link } from "react-router-dom";
import "../css/NavBar.css" 

function NavBar () {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Ski Resort Tracker</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/saved" className="nav-link">Saved</Link>
        </div>
    </nav>
}

export default NavBar
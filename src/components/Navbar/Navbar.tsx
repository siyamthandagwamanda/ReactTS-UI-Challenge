import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>HYKROX</h2>
                <p>unique designs</p>
            </div>

            <ul className="nav-links">
                <li><a href="#">HOME</a></li>
                <li><a href="#">DESIGNS</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>

            <div className="search-icon">
                <FaSearch />
            </div>
        </nav>
    );
}

export default Navbar;
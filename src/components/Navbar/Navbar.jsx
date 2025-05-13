import './Navbar.css';
import logoImage from '../../assets/images/bibiBooking-logo.png';

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar__container">
            <a href="/" className="navbar__logo-link" aria-label="Homepage">
                <img src={logoImage} alt="BibiBooking Logo" className="navbar__logo" />
            </a>

            <div className="navbar__actions">
                <button className="navbar__button">Register</button>
                <button className="navbar__button">Login</button>
            </div>
        </div>
    </nav>
);

export default Navbar;

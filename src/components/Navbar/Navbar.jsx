import './Navbar.css'
import logoImage from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-container">
            <a href='/' className="logo">
                <img src={logoImage} alt="logo" />
            </a>

            <div className="nav-items">
                <button className="nav-button">Register</button>
                <button className="nav-button">Login</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
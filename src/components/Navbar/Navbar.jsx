import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-container">
            <span className="logo">BibiBooking</span>

            <div className="nav-items">
                <button className="nav-button">Register</button>
                <button className="nav-button">Login</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
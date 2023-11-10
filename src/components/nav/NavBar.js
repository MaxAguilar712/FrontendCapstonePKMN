import { Link, } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {

  return (
    <nav className="navbar">

      <ul className="nav">
      <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Gallery">Gallery</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Booster">Booster</Link>
        </li>
      
        {/* <li className="nav-item">
          <Link className="nav-link" to="/Gallery">Gallery</Link>
        </li> */}

        
        {/* <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("nutshell_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li> */}
      </ul>
    </nav>
  )
}

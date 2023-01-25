import {Link} from "react-router-dom"
import "./index.css"
export default function Navigation(){
    return(
        <div className="nav-container">
            <ul className="nav-list">
              <Link to = "/">
                <li> Home</li>
              </Link>
              <Link to = "/projects">
                <li> Projects</li>
              </Link>
              <Link to = "/signin">
                <li> Signin </li>
              </Link>

            </ul>

        </div>
    )
}
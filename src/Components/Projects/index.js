
import {Link,Outlet} from "react-router-dom"
export default function Projects(){
    return(
        <div>
            <h3> Projects</h3>
            <div className="proj-container">
                <ul className="project-list">
                 <Link to = "/projects/doggie">
                 <li> Doggie</li>
                 </Link>
                 <Link to = "/projects/dummy">
                 <li> Dummy Products</li>
                 </Link>
                 <Link to = "/projects/fakestore">
                 <li> Fakestore Products</li>
                 </Link>
                </ul>
              <Outlet/>
            </div>
        </div>
    )
}
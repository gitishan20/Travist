import { Component } from "react";
import "./NavbarSyle.css";
 
class Navbar extends Component{
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">WayTrip</h1>
                <ul className="nav-menu">
                    <li>
                        <link><i class="fa-solid fa-house"></i>Home</link>
                    </li>
                </ul>
            </nav>
        )
};
}
export default Navbar;
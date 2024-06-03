import { NavLink } from "react-router-dom";

function Header(){
    return (
        <header>
        <h1>Ecommerce</h1>
        <ul>
            <li>
               <NavLink to = "/">HOME</NavLink>
            </li>
            <li>
            <NavLink to = "/">ABOUT</NavLink>
            </li>
            <li>
            <NavLink to = "/">BLOG</NavLink>
            </li>
            <li>
            <NavLink to = "/">CONTACT US</NavLink>
            </li>
        </ul>
        </header>
    );
}
export default Header;
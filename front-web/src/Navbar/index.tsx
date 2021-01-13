import './styles.css';
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from './logo.svg';
function Navbar(){
    return (
        <nav className = "main-navbar">
            <Logo></Logo>
            <Link to="/" className="logo-text">DS Deliver</Link>
        </nav>
    );
}

export default Navbar;
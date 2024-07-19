import logo from './images/company-logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>            
            <nav className = "navigation-bar-header">
                <Link to = "/"> <img alt = "company logo" className = "organization-logo" src = {logo} /> </Link>

                <ul>
                    <li> <Link to = "/"> HOME </Link> </li>
                    <li> <Link to = "/train"> TRAIN </Link> </li>
                    <li> <Link to = "/result"> RESULTS </Link> </li>
                    <li> <Link to = "/faq"> FAQ </Link> </li>
                    <li> <Link id = "join-button" to = "/join"> JOIN </Link> </li>
                </ul>
            </nav>
        </header>
    );
  }
  
export default Navbar;
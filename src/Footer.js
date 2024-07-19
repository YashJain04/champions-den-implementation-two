import facebook from './images/facebook.png';
import linkedin from './images/linkedin.png';
import youtube from './images/youtube.png';
import instagram from './images/instagram.png';

function Footer() {
    return (
        <footer className = "footer-bar">
          <nav className = "navigation-bar-footer">
              <ul>
                  <li> <a href = "https://www.facebook.com"> <img alt="facebook icon" className = "social-media-icon" src = {facebook} /> </a> </li>
                  <li> <a href = "https://www.linkedin.com"> <img alt="linkedin icon" className = "social-media-icon" src = {linkedin} /> </a> </li>
                  <li> <a href = "https://www.youtube.com"> <img alt="youtube icon" className = "social-media-icon" src = {youtube} /> </a> </li>
                  <li> <a href = "https://www.instagram.com"> <img alt="instagram icon" className = "social-media-icon" src = {instagram} /> </a> </li>
              </ul>
          </nav>
      </footer>
    );
  }
  
export default Footer;  
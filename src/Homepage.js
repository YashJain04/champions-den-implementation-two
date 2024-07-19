//Interactive Process: NA
import landingImage from './images/landing-page-image.jpg';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
      <div className="homepage">
        <img alt = "landing image" className = "landing-image" src = {landingImage} aria-labelledby="landing-image-description"/>
        
        <div className = "organization-details" role="region" aria-labelledby="organization-details-heading">
            <h1 className = "organization-name"> CHAMPIONS DEN </h1>
            <h2 className = "slogan"> Where Every Game Matters </h2>
            <Link to="/join"><button id="homepage-join-button-special" aria-label="Join Champions Den today">JOIN TODAY</button></Link>
        </div>

        <Footer />
      </div>
    );
  }
  
export default Homepage;
import faqimage from './images/faq-image.png';

function Faq() {
    return (
        <div className=".faq-page">
            <h1 className="faq-page-title"> <span className="faq-page-title-special">FREQUENTLY ASKED QUESTIONS</span> </h1>

            <div className="all-questions">
                <h1 className="questions-title"> <span className="questions-title-moving-underline">1. HOW DO I CONTACT CHAMPIONS DEN?</span> </h1>
                <p className="questions-answers"> You can reach us at (123) 456-7890 or champions@den.com or through our social media accounts! </p>

                <h1 className="questions-title"> <span className="questions-title-moving-underline">2. WHAT SERVICES DO YOU OFFER?</span> </h1>
                <p className="questions-answers"> We offer coaching, lessons, and league registrations for various sports. </p>

                <h1 className="questions-title"> <span className="questions-title-moving-underline">3. WHERE ARE YOU LOCATED?</span> </h1>
                <p className="questions-answers"> We are located at 1234 Sports Lane, Sportstown. </p>

                <h1 className="questions-title"> <span className="questions-title-moving-underline">4. WHAT SPORTS CAN I REGISTER FOR?</span> </h1>
                <p className="questions-answers"> You can register for soccer, swimming, basketball, golf, rockclimbing, and tennis. </p>

                <h1 className="questions-title"> <span className="questions-title-moving-underline">5. HOW CAN I JOIN A LEAGUE?</span> </h1>
                <p className="questions-answers"> Visit our website and fill out the registration/join form. </p>

                <h1 className="questions-title"> <span className="questions-title-moving-underline">6. WHAT ARE YOUR OPERATION HOURS?</span> </h1>
                <p className="questions-answers"> We are open from 9 AM to 9 PM, Monday to Saturday. </p>
            </div>

            <img className="faq-image-details" src={faqimage} alt="image of a running man" />
        </div>
    );
  }
  
export default Faq;
import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';

import reviewImageOne from './images/review-image-person-one.jpg';
import reviewImageTwo from './images/review-image-person-two.webp';
import reviewImageThree from './images/review-image-person-three.avif';
import reviewImageFour from './images/review-image-person-four.jpg';

import bookingConfirmedImage from './images/booking-confirmed.png';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Join() {
  const renderTooltipSubmitReview = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Users can only write 1 review.
    </Tooltip>
  );

  const [progressValue, setProgressValue] = useState(0);
  const [currentForm, setCurrentForm] = useState(1);

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [league, setLeague] = useState([]);
  const [lesson, setLesson] = useState([]);
  const [coach, setCoach] = useState([]);
  const [field, setField] = useState([]);

  const isFormOneValid = () => email && firstName && lastName && date;
  const isFormTwoValid = () => league.length && lesson.length && coach.length && field.length;

  const handleIncreaseClick = () => {
    if (currentForm === 1 && isFormOneValid()) {
      setProgressValue(50);
      setCurrentForm(2);
    } else if (currentForm === 2 && isFormTwoValid()) {
      setProgressValue(100);
      setCurrentForm(3);
    }
  };

  const handleDecreaseClick = () => {
    setProgressValue(prevValue => Math.max(prevValue - 50, 0));
    if (currentForm === 2) {
      setCurrentForm(1);
    } else if (currentForm === 3) {
      setCurrentForm(2);
    }
  };

  const handleNextClick = () => {
    if (currentForm === 1 && !isFormOneValid()) {
      alert("Please fill in all information in the fields.");
    } else if (currentForm === 2 && !isFormTwoValid()) {
      alert("Please fill in all information in the fields.");
    } else {
      handleIncreaseClick();
    }
  };

  const [carouselItems, setCarouselItems] = useState([
    {
      title: 'Josh Smith - Endorsement',
      text: 'I love this club, you should absolutely join!',
      imgSrc: reviewImageOne,
    },

    {
      title: 'Maria Foo - Endorsement',
      text: 'This club made me a pro.',
      imgSrc: reviewImageTwo,
    },

    {
      title: 'Anne Catherine - Endorsement',
      text: 'I approve of this club. I have been a member for over 5 years!',
      imgSrc: reviewImageThree,
    },
  ]);

  const [showTextField, setShowTextField] = useState(false);
  const [newReview, setNewReview] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setReviewSubmitted(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleWriteReviewClick = () => {
    if (!reviewSubmitted) {
      setShowTextField(true);
    }
  };

  const handleInputChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleSubmitReview = () => {
    const newItem = {
      title: 'John Doe - Endorsement',
      text: newReview,
      imgSrc: reviewImageFour,
    };

    setCarouselItems([...carouselItems, newItem]);
    setShowTextField(false);
    setNewReview('');
    setReviewSubmitted(true);
    localStorage.setItem('reviewSubmitted', 'true');
  };

  return (
    <div className="join-page">

      <h1 className="join-page-title"> <span className="join-page-title-special">JOIN TODAY - BECOME A CHAMPION</span> </h1>

      <ProgressBar id="progress-bar" variant="special-progress-colour" now={progressValue} label={`${progressValue}%`} />

      <div className="form-side">
        {currentForm === 1 && (
          <Form className="form-content" id="join-page-form-one">
            <Form.Group className="mb-3" controlId="enterEmail">
              <Form.Label><strong>Email address:</strong></Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="enterFirstName">
              <Form.Label><strong>First name:</strong></Form.Label>
              <Form.Control type="text" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="enterMiddleName">
              <Form.Label><strong>Middle name:</strong></Form.Label>
              <Form.Control type="text" placeholder="Optional" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="enterLastName">
              <Form.Label><strong>Last name:</strong></Form.Label>
              <Form.Control type="text" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </Form.Group>

            <Form.Label><strong>Date:</strong></Form.Label>
            <br />
            <input type="date" id="booking-date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <br />
          </Form>
        )}
        
        {currentForm === 2 && (
          <Form className="form-content" id="join-page-form-two">
            <Form.Label><strong>Select A League:</strong></Form.Label>

            <br />

            <Form.Control as="select" className="special-dropdowns-multiselect" multiple value={league} onChange={(e) => setLeague(Array.from(e.target.selectedOptions, option => option.value))} required>
              <option>None</option>
              <option>Little League</option>
              <option>House League</option>
              <option>Representative League</option>
            </Form.Control>

            <br />

            <Form.Label><strong>Select A Lesson:</strong></Form.Label>

            <br />
            
            <Form.Control as="select" className="special-dropdowns-multiselect" multiple value={lesson} onChange={(e) => setLesson(Array.from(e.target.selectedOptions, option => option.value))} required>
              <option>None</option>
              <option>Soccer</option>
              <option>Swimming</option>
              <option>Basketball</option>
              <option>Golf</option>
              <option>Rockclimbing</option>
              <option>Tennis</option>
            </Form.Control>

            <br />

            <Form.Label><strong>Select A Coach:</strong></Form.Label>

            <br />
            
            <Form.Control as="select" className="special-dropdowns-multiselect" multiple value={coach} onChange={(e) => setCoach(Array.from(e.target.selectedOptions, option => option.value))} required>
              <option>None</option>
              <option>Lionel Messi</option>
              <option>Michael Phelps</option>
              <option>Stephen Curry</option>
              <option>Tiger Woods</option>
              <option>Chris Sharma</option>
              <option>Roger Federer</option>
            </Form.Control>

            <br />

            <Form.Label><strong>Select A Field/Court:</strong></Form.Label>

            <br />
            
            <Form.Control as="select" className="special-dropdowns-multiselect" multiple value={field} onChange={(e) => setField(Array.from(e.target.selectedOptions, option => option.value))} required>
              <option>None</option>
              <option>Soccer Indoor</option>
              <option>Soccer Outdoor</option>
              <option>Basketball Indoor</option>
              <option>Basketball Outdoor</option>
              <option>Tennis Indoor</option>
              <option>Tennis Outdoor</option>
            </Form.Control>
            
            <br />

            <p className="form-text text-muted">Hold down the <kbd>Ctrl</kbd> button on <i><b>Windows</b></i> or <kbd>Command</kbd> button on <i><b>Mac</b></i> to select multiple options.</p>
          </Form>
        )}

        {currentForm === 3 && (
          <div>
            <img id="booking-confirmed-image" src={bookingConfirmedImage} alt="Booking Confirmed" />
            <h3 id="booking-confirmed-header"> Your application has been received! <br /> Thanks for choosing us! </h3>
          </div>
        )}

        {currentForm !== 3 && (
          <div className="button-group">
            {currentForm > 1 && (
              <Button className="form-buttons-progress" onClick={handleDecreaseClick}>PREVIOUS</Button>
            )}
            {currentForm < 2 ? (
              <Button className="form-buttons-progress" onClick={handleNextClick}>NEXT</Button>
            ) : (
              <Button className="form-buttons-progress" onClick={handleNextClick}>SUBMIT</Button>
            )}
          </div>
        )}
      </div>

      <div className="carousel-side">

        <h1 className="express-opinion-title"><span className="express-opinion-title-underline">EXPRESS AN OPINION</span></h1>

        <Carousel id="carousel" fade>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img id="carousel-image-specialize" className="d-block w-100" src={item.imgSrc} alt={`Slide ${index + 1}`} />
              <Carousel.Caption id="carousel-caption">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="button-group">
          <OverlayTrigger placement="left" delay={{ show: 50, hide: 50 }} overlay={renderTooltipSubmitReview}>
            <Button className="express-opinion-button" onClick={handleWriteReviewClick} disabled={reviewSubmitted}>WRITE A REVIEW</Button>
          </OverlayTrigger>
        </div>

        {showTextField && (
          <div className="review-input-container">
            <Form.Group controlId="formReview">
              <Form.Control as="textarea" rows={3} value={newReview} onChange={handleInputChange} placeholder="Type your review here..."/>
            </Form.Group>

            <Button id = "review-input-button" onClick={handleSubmitReview}>Submit Review</Button>
          </div>
        )}
     </div>
    </div>
  );
}

export default Join;
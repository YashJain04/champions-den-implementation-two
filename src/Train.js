//Interactive Process: The interactive process shown on this page is absorb information & divergent/convergent exploration (through faceted search)
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import littleLeagueImage from './images/little-league.jpg';
import houseLeagueImage from './images/house-league.jpg';
import representativeLeagueImage from './images/representative-league.jpg';

import soccerLessonImage from './images/soccer-lesson.webp';
import swimmingLessonImage from './images/swimming-lesson.jpg';
import basketballLessonImage from './images/basketball-lesson.jpg';
import golfLessonImage from './images/golf-lesson.jpg';
import rockclimbingLessonImage from './images/rockclimbing-lesson.jpg';
import tennisLessonImage from './images/tennis-lesson.jpg';

import soccerCoachImage from './images/soccer-coach.jpg';
import swimmingCoachImage from './images/swimming-coach.jpg';
import basketballCoachImage from './images/basketball-coach.jpg';
import golfCoachImage from './images/golf-coach.webp';
import rockclimbingCoachImage from './images/rockclimbing-coach.webp';
import tennisCoachImage from './images/tennis-coach.webp';

import soccerFieldIndoorImage from './images/soccer-field-indoor.jpg';
import soccerFieldOutdoorImage from './images/soccer-field-outdoor.avif';
import basketballCourtIndoorImage from './images/basketball-court-indoor.webp';
import basketballCourtOutdoorImage from './images/basketball-court-outdoor.png';
import tennisCourtIndoorImage from './images/tennis-indoor-court.webp';
import tennisCourtOutdoorImage from './images/tennis-outdoor-court.jpg';

import searchIcon from './images/search-icon.png';

function Train() {
  const renderTooltipOne = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Refine Search
    </Tooltip>
  );

  const renderTooltipTwo = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Toggle All Leagues
    </Tooltip>
  );

  const renderTooltipThree = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Toggle All Lessons
    </Tooltip>
  );

  const renderTooltipFour = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Toggle All Coaches
    </Tooltip>
  );

  const renderTooltipFive = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Toggle All Fields/Courts
    </Tooltip>
  );

  const renderTooltipSix = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Toggle All Prices
    </Tooltip>
  );

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const [checkboxStates, setCheckboxStates] = useState({
    littleLeague: true,
    houseLeague: true,
    representativeLeague: true,
    soccerLesson: true,
    swimmingLesson: true,
    basketballLesson: true,
    golfLesson: true,
    rockclimbingLesson: true,
    tennisLesson: true,
    soccerCoach: true,
    swimmingCoach: true,
    basketballCoach: true,
    golfCoach: true,
    rockclimbingCoach: true,
    tennisCoach: true,
    indoorPlayArea: true,
    outdoorPlayArea: true,
    cheapestPrice: true,
    averagePrice: true,
    highestPrice: true,
  });


  const handleToggleAll = (keys) => {
    const allChecked = keys.every(key => checkboxStates[key]);
    const newStates = {};
    keys.forEach(key => {
      newStates[key] = !allChecked;
    });
    setCheckboxStates(prevStates => ({
      ...prevStates,
      ...newStates
    }));
  };

  const handleToggleAllLeagues = () => {
    handleToggleAll(['littleLeague', 'houseLeague', 'representativeLeague']);
  };

  const handleToggleAllLessons = () => {
    handleToggleAll(['soccerLesson', 'swimmingLesson', 'basketballLesson', 'golfLesson', 'rockclimbingLesson', 'tennisLesson']);
  };

  const handleToggleAllCoaches = () => {
    handleToggleAll(['soccerCoach', 'swimmingCoach', 'basketballCoach', 'golfCoach', 'rockclimbingCoach', 'tennisCoach']);
  };

  const handleToggleAllFieldsAndCourts = () => {
    handleToggleAll(['indoorPlayArea', 'outdoorPlayArea']);
  };

  const handleToggleAllPrices = () => {
    handleToggleAll(['cheapestPrice', 'averagePrice', 'highestPrice']);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxStates(prevStates => ({
      ...prevStates,
      [name]: checked,
    }));
  };

  const [showLeaguesOptions, setShowLeaguesOptions] = useState(true);
  const [showLessonsOptions, setShowLessonsOptions] = useState(true);
  const [showCoachesOptions, setShowCoachesOptions] = useState(true);
  const [showAreasOptions, setShowAreasOptions] = useState(true);
  const [showPricesOptions, setShowPricesOptions] = useState(true);

  return (
    <div className="train-page">

      <OverlayTrigger placement="left" delay={{ show: 50, hide: 50 }} overlay={renderTooltipOne}>
        <img alt="search-icon" className="toggle-search-menu" src = {searchIcon} onClick={toggleSidebar} />
      </OverlayTrigger>

      {isSidebarVisible && (
        <div className="sidebar">
          <div>
            <OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderTooltipSix}>
              <h3 className="sidebar-titles"><span className="search-filter-underline" onClick={handleToggleAllPrices}>Prices</span></h3>
            </OverlayTrigger>

            <div className = "sidebar-toggle-options">
              <h3 className = "sidebar-toggle-all-options" onClick={() => setShowPricesOptions(false)}> - </h3>
              <h3 className = "sidebar-toggle-all-options" onClick={() => setShowPricesOptions(true)}> + </h3>
            </div>

            <div className = "faceted-search-options" id="faceted-search-options-prices" style={{ display: showPricesOptions ? 'block' : 'none' }}>
              <label className="faceted-search-label" htmlFor="cheapestPrice"> ↪ $0 - $25 </label>
              <input className="faceted-search-checkbox" type="checkbox" id="cheapestPrice" name="cheapestPrice" value="Less Than/Equal To $25" checked={checkboxStates.cheapestPrice} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="averagePrice"> ↪ $25 - $50 </label>
              <input className="faceted-search-checkbox" type="checkbox" id="averagePrice" name="averagePrice" value="Less Than $50" checked={checkboxStates.averagePrice} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="highestPrice"> ↪ $50+ </label>
              <input className="faceted-search-checkbox" type="checkbox" id="highestPrice" name="highestPrice" value="Over/Equal To $50" checked={checkboxStates.highestPrice} onChange={handleCheckboxChange}/>
            </div>
          </div>

          <div>
            <OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderTooltipTwo}>
              <h3 className="sidebar-titles"><span className="search-filter-underline" onClick={handleToggleAllLeagues}>Leagues</span></h3>
            </OverlayTrigger>

            <div className = "sidebar-toggle-options">
              <h3 className = "sidebar-toggle-all-options" onClick={() => setShowLeaguesOptions(false)}> - </h3>
              <h3 className = "sidebar-toggle-all-options" onClick={() => setShowLeaguesOptions(true)}> + </h3>
            </div>

            <div className = "faceted-search-options" id="faceted-search-options-league" style={{ display: showLeaguesOptions ? 'block' : 'none' }}>
              <label className="faceted-search-label" htmlFor="littleLeague"> ↪ Little League </label>
              <input className="faceted-search-checkbox" type="checkbox" id="littleLeague" name="littleLeague" value="Little League" checked={checkboxStates.littleLeague} onChange={handleCheckboxChange}/>

              <br/>

              <label className="faceted-search-label" htmlFor="houseLeague"> ↪ House League </label>
              <input className="faceted-search-checkbox" type="checkbox" id="houseLeague" name="houseLeague" checked={checkboxStates.houseLeague} onChange={handleCheckboxChange}/> 

              <br/>

              <label className="faceted-search-label" htmlFor="representativeLeague"> ↪ Representative League </label>
              <input className="faceted-search-checkbox" type="checkbox" id="representativeLeague" name="representativeLeague" value="Representative League" checked={checkboxStates.representativeLeague} onChange={handleCheckboxChange}/>
            </div>
          </div>

          <div>
            <OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderTooltipThree}>
              <h3 className="sidebar-titles"><span className="search-filter-underline" onClick={handleToggleAllLessons}>Lessons</span></h3>
            </OverlayTrigger>

            <div className = "sidebar-toggle-options">
              <h3 className = "sidebar-toggle-all-options" onClick={() => setShowLessonsOptions(false)}> - </h3>
              <h3 className = "sidebar-toggle-all-options" onClick={() => setShowLessonsOptions(true)}> + </h3>
            </div>
            
            <div className = "faceted-search-options" id="faceted-search-options-lessons" style={{ display: showLessonsOptions ? 'block' : 'none' }}> 
              <label className="faceted-search-label" htmlFor="soccerLesson"> ↪ Soccer </label>
              <input className="faceted-search-checkbox" type="checkbox" id="soccerLesson" name="soccerLesson" value="Soccer" checked={checkboxStates.soccerLesson} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="swimmingLesson"> ↪ Swimming </label>
              <input className="faceted-search-checkbox" type="checkbox" id="swimmingLesson" name="swimmingLesson" value="Swimming" checked={checkboxStates.swimmingLesson} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="basketballLesson"> ↪ Basketball </label>
              <input className="faceted-search-checkbox" type="checkbox" id="basketballLesson" name="basketballLesson" value="Basketball" checked={checkboxStates.basketballLesson} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="golfLesson"> ↪ Golf </label>
              <input className="faceted-search-checkbox" type="checkbox" id="golfLesson" name="golfLesson" value="Golf" checked={checkboxStates.golfLesson} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="rockclimbingLesson"> ↪ Rock Climbing </label>
              <input className="faceted-search-checkbox" type="checkbox" id="rockclimbingLesson" name="rockclimbingLesson" value="Rock Climbing" checked={checkboxStates.rockclimbingLesson} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="tennisLesson"> ↪ Tennis </label>
              <input className="faceted-search-checkbox" type="checkbox" id="tennisLesson" name="tennisLesson" value="Tennis" checked={checkboxStates.tennisLesson} onChange={handleCheckboxChange}/>
            </div>
          </div>

          <div>
            <OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderTooltipFour}>
              <h3 className="sidebar-titles"><span className="search-filter-underline" onClick={handleToggleAllCoaches}>Coaches</span></h3>
            </OverlayTrigger>

            <div className = "sidebar-toggle-options">
              <h3 className = "sidebar-toggle-all-options" onClick={() => setShowCoachesOptions(false)}> - </h3>
              <h3 className = "sidebar-toggle-all-options" onClick={() => setShowCoachesOptions(true)}> + </h3>
            </div>
            
            <div className = "faceted-search-options" id="faceted-search-options-coaches" style={{ display: showCoachesOptions ? 'block' : 'none' }}>
              <label className="faceted-search-label" htmlFor="soccerCoach"> ↪ Lionel Messi </label>
              <input className="faceted-search-checkbox" type="checkbox" id="soccerCoach" name="soccerCoach" value="Lionel Messi" checked={checkboxStates.soccerCoach} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="swimmingCoach"> ↪ Michael Phelps </label>
              <input className="faceted-search-checkbox" type="checkbox" id="swimmingCoach" name="swimmingCoach" value="Michael Phelps" checked={checkboxStates.swimmingCoach} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="basketballCoach"> ↪ Stephen Curry </label>
              <input className="faceted-search-checkbox" type="checkbox" id="basketballCoach" name="basketballCoach" value="Stephen Curry" checked={checkboxStates.basketballCoach} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="golfCoach"> ↪ Tiger Woods </label>
              <input className="faceted-search-checkbox" type="checkbox" id="golfCoach" name="golfCoach" value="Tiger Woods" checked={checkboxStates.golfCoach} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="rockclimbingCoach"> ↪ Chris Sharma </label>
              <input className="faceted-search-checkbox" type="checkbox" id="rockclimbingCoach" name="rockclimbingCoach" value="Chris Sharma" checked={checkboxStates.rockclimbingCoach} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="tennisCoach"> ↪ Roger Federer </label>
              <input className="faceted-search-checkbox" type="checkbox" id="tennisCoach" name="tennisCoach" value="Roger Federer" checked={checkboxStates.tennisCoach} onChange={handleCheckboxChange}/>
            </div>
          </div>

          <div>
            <OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderTooltipFive}>
              <h3 className="sidebar-titles"><span className="search-filter-underline" onClick={handleToggleAllFieldsAndCourts}>Fields/Courts</span></h3>
            </OverlayTrigger>

            <div className = "sidebar-toggle-options">
              <h3 className = "sidebar-toggle-all-options" onClick={() => setShowAreasOptions(false)}> - </h3>
              <h3 className = "sidebar-toggle-all-options" onClick={() => setShowAreasOptions(true)}> + </h3>
            </div>

            <div className = "faceted-search-options" id="faceted-search-options-fieldsAndCourts" style={{ display: showAreasOptions ? 'block' : 'none' }}>
              <label className="faceted-search-label" htmlFor="indoorPlayArea"> ↪ Indoor </label>
              <input className="faceted-search-checkbox" type="checkbox" id="indoorPlayArea" name="indoorPlayArea" value="Indoor" checked={checkboxStates.indoorPlayArea} onChange={handleCheckboxChange}/>
              
              <br/>

              <label className="faceted-search-label" htmlFor="outdoorPlayArea"> ↪ Outdoor </label>
              <input className="faceted-search-checkbox" type="checkbox" id="outdoorPlayArea" name="outdoorPlayArea" value="Outdoor" checked={checkboxStates.outdoorPlayArea} onChange={handleCheckboxChange}/>
            </div>
          </div>
        </div>
      )}

      <h1 className="train-page-titles"> <span className="train-page-titles-special">LEAGUES</span> </h1>

      <div className="leagues-content">
        <Container className="cards-container">
          <Row>

          {(checkboxStates.littleLeague || checkboxStates.cheapestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={littleLeagueImage} alt="little league image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Little League</span> </Card.Title>
                  <Card.Text className="card-body-text"> The Little League, for ages 6-12, provides a nurturing environment for young athletes. Focused on basic skill development and fun, it introduces children to sports, teamwork, and fair play. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> AGES: 6 YEARS - 12 YEARS </li>
                    <br />
                    <li className="card-list-element"> PRICE: $10.00 TO ENROLL </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.houseLeague || checkboxStates.averagePrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={houseLeagueImage} alt="house league image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">House League</span> </Card.Title>
                  <Card.Text className="card-body-text"> The House League, for ages 12-18, offers a fun and inclusive environment for players of all skill levels. It promotes sportsmanship and teamwork, providing ample playtime. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> AGES: 12 YEARS - 18 YEARS </li>
                    <br />
                    <li className="card-list-element"> PRICE: $40.00 TO ENROLL </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.representativeLeague || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={representativeLeagueImage} alt="representative league image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Representative League</span> </Card.Title>
                  <Card.Text className="card-body-text"> The Representative League, for ages 14-18, caters to athletes seeking higher competition and skill advancement. It prepares players for collegiate or professional levels. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> AGES: 14 YEARS - 18 YEARS </li>
                    <br />
                    <li className="card-list-element"> PRICE: $70.00 TO ENROLL </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          </Row>
        </Container>
      </div>

      <h1 className="train-page-titles"> <span className="train-page-titles-special">LESSONS</span> </h1>

      <div className="lessons-content">
        <Container className="cards-container">
          <Row>

          {(checkboxStates.soccerLesson || checkboxStates.cheapestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={soccerLessonImage} alt="soccer lesson image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Soccer</span> </Card.Title>
                  <Card.Text className="card-body-text"> Kick-start your soccer journey with our dynamic training programs designed for enthusiasts of all ages and skill levels. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $20.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.swimmingLesson || checkboxStates.averagePrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={swimmingLessonImage} alt="swimming lesson image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Swimming</span> </Card.Title>
                  <Card.Text className="card-body-text"> Dive into the world of aquatic skills with our comprehensive swimming lessons tailored for all ages and skill levels. Get ready to conquer the water! </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $40.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.basketballLesson || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={basketballLessonImage} alt="basketball lesson image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Basketball</span> </Card.Title>
                  <Card.Text className="card-body-text"> Shoot for success with our engaging basketball training programs designed for all ages and skill levels. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $60.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          </Row>

          <Row className = "second-row-spacing">

          {(checkboxStates.golfLesson || checkboxStates.cheapestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={golfLessonImage} alt="golf lesson image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Golf</span> </Card.Title>
                  <Card.Text className="card-body-text"> Tee off into the world of golf with our comprehensive lessons tailored for beginners and seasoned players alike. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $20.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.rockclimbingLesson || checkboxStates.averagePrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={rockclimbingLessonImage} alt=" rockclimbing lesson image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Rockclimbing</span> </Card.Title>
                  <Card.Text className="card-body-text"> Embark on thrilling rock climbing adventures with our expert-led programs catering to beginners and experienced climbers alike. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $40.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.tennisLesson || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={tennisLessonImage} alt="tennis lesson image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Tennis</span> </Card.Title>
                  <Card.Text className="card-body-text"> Serve up your passion for tennis with our dynamic coaching programs suited for all skill levels and ages. Get ready to conquer the racquet! </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $60.00 PER LESSON </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          </Row>
        </Container>
      </div>

      <h1 className="train-page-titles"> <span className="train-page-titles-special">COACHES</span> </h1>

      <div className="coaches-content">
        <Container className="cards-container">
          <Row>

          {(checkboxStates.soccerCoach || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={soccerCoachImage} alt="soccer coach image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Lionel Messi</span> </Card.Title>
                  <Card.Text className="card-body-text"> Lionel Messi, known for his unmatched skill and strategic brilliance in soccer, now brings his expertise to coaching. Messi's sessions focus on mastering dribbling, shooting, and more! </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.swimmingCoach || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={swimmingCoachImage} alt="swimming coach image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Michael Phelps</span> </Card.Title>
                  <Card.Text className="card-body-text"> Michael Phelps, celebrated for his record-breaking achievements in swimming, now shares his expertise as a coach. Phelp's sessions has a primary focus on mastering all different swimming strokes. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.basketballCoach || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={basketballCoachImage} alt="basketball coach image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Stephen Curry</span> </Card.Title>
                  <Card.Text className="card-body-text"> Stephen Curry, renowned for his exceptional skills in basketball and shooting, now brings his expertise to coaching. The primary focus for Steph's sessions are mastering shooting and more. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          </Row>

          <Row className = "second-row-spacing">

          {(checkboxStates.golfCoach || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={golfCoachImage} alt="golf coach image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Tiger Woods</span> </Card.Title>
                  <Card.Text className="card-body-text"> Tiger Woods, celebrated for his mastery in golf, now shares his expertise as a coach. His coaching philosophy emphasizes technique, mental fortitude, and strategic play. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.rockclimbingCoach || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={rockclimbingCoachImage} alt="rockclimbing coach image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Chris Sharma</span> </Card.Title>
                  <Card.Text className="card-body-text"> Chris Sharma, a legendary figure in rock climbing, now imparts his expertise as a coach. Sharma's sessions focus on refining climbing skills, and mastering difficult routes. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.tennisCoach || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img className="card-image" variant="top" src={tennisCoachImage} alt="tennis coach image"/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Roger Federer</span> </Card.Title>
                  <Card.Text className="card-body-text"> Roger Federer, revered for his extraordinary tennis career, now shares his expertise as a coach. His coaching session emphasizes finesse, strategy, and mental resilience. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER SESSION </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          </Row>
        </Container>
      </div>

      <h1 className="train-page-titles"> <span className="train-page-titles-special">FIELDS/COURTS</span> </h1>

      <div className="fields-courts-content">
        <Container className="cards-container">
          <Row>

          {(checkboxStates.indoorPlayArea || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img alt="indoor soccer field image" className="card-image" variant="top" src={soccerFieldIndoorImage} style = {{objectPosition: '50% 50%'}}/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Soccer - Indoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Experience soccer like never before on our top-quality, climate-controlled indoor soccer field, featuring premium artificial turf and advanced lighting. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $55.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.outdoorPlayArea || checkboxStates.averagePrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img alt="outdoor soccer field image" className="card-image" variant="top" src={soccerFieldOutdoorImage} style = {{objectPosition: '50% 50%'}}/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Soccer - Outdoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Experience the unique challenge of our outdoor sand soccer field at Champions Den. Perfect for both practice and casual play, the sand surface enhances agility. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $35.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          </Row>

          <Row className = "second-row-spacing">

          {(checkboxStates.indoorPlayArea || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img alt="indoor basketball court image" className="card-image" variant="top" src={basketballCourtIndoorImage} style = {{objectPosition: '50% 50%'}}/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Basketball - Indoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Play basketball year-round on our professional-grade indoor court. With a top-quality hardwood surface, advanced lighting, and climate control. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $300.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.outdoorPlayArea || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img alt="outdoor basketball court image"className="card-image" variant="top" src={basketballCourtOutdoorImage} style = {{objectPosition: '50% 45%'}}/>
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Basketball - Outdoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Experience basketball under the open sky on our outdoor court. Featuring a durable asphalt surface and adjustable hoops. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $150.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          </Row>

          <Row className = "third-row-spacing">

          {(checkboxStates.indoorPlayArea || checkboxStates.highestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img alt="indoor tennis court image" className="card-image" variant="top" src={tennisCourtIndoorImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Tennis - Indoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Step onto our indoor tennis courts for a premium playing experience. Featuring a cushioned surface and climate-controlled environment. </Card.Text>
                    <ul className="card-details">
                    <li className="card-list-element"> PRICE: $60.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          {(checkboxStates.outdoorPlayArea || checkboxStates.cheapestPrice) && (
            <Col>
              <Card className="card-component" style={{ width: '100%' }}>
                <Card.Img alt="outdoor tennis court image" className="card-image" variant="top" src={tennisCourtOutdoorImage} />
                <Card.Body>
                  <Card.Title className="card-title"> <span className = "card-title-underline">Tennis - Outdoor</span> </Card.Title>
                  <Card.Text className="card-body-text"> Immerse yourself in the outdoor tennis experience on our meticulously maintained hard courts. Surrounded by natural beauty and equipped with durable surfaces. </Card.Text>
                  <ul className="card-details">
                    <li className="card-list-element"> PRICE: $20.00 PER HOUR </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          )}

          </Row>
        </Container>
      </div>

      <br />
      <br />
      <br />

    </div>
  );
}
  
export default Train;
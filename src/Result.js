//Interactive Process: The interactive process shown on this page is analyze/observe results
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

function Result() {
  
  useEffect(() => {
    var graphOneOptions = {
      title: { text: 'PERFORMANCE GRAPH' },
      series: [20, 10, 20, 30, 20],
      chart: { type: 'donut', },
      labels: ['SPEED', 'STRENGTH', 'ENDURANCE', 'STAMINA', 'SKILL'],
      colors: ['#68B7DC', '#6794DC', '#6771DC', '#8067DC', '#A367DD', '#C767DC', '#DD67CE'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: 'bottom' }
        }
      }]
    };

    var graphTwoOptions = {
      title: { text: 'SUMMER SEASON RECORDS' },
      series: [{
      name: 'League Registration',
      data: [100, 100, 100, 100]
      },
    
      {
        name: 'Game Attendance',
        data: [98,92,96,94]
      },

      {
        name: 'Training Sessions',
        data: [88, 82, 86, 84]
      },

      {
        name: 'Community Events',
        data: [76, 91, 79, 91]
      },
    
      {
        name: 'Team Engagements',
        data: [81, 99, 85, 95]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['May', 'June', 'July', 'August'],
        title: { text: 'SUMMER MONTHS' }
      },
      yaxis: { title: { text: 'OVERLL PARTICIPATION' } },
      fill: { opacity: 1 },
      tooltip: { y: { formatter: function (val) { return val + "%" } } }
    };

    var graphThreeOptions = {
      title: { text: 'DIFFERENT CLUB COSTS' },
      series: [{
        name: 'AVERAGE PRICE',
        data: [500, 660, 745, 870, 940] }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
        }
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ['Champions Den', 'Arsenal', 'FC Madrid', 'Bayern', 'Warriors'],
        title: { text: '$ AVERAGE PRICE ' },
      },
      yaxis: {
        title: { text: 'DIFFERENT CLUBS' }
      },
      tooltip: { y: { formatter: function (val) { return "$" + val } } }
    };

    var graphFourOptions = {
      title: { text: 'LIKELIHOOD OF BECOMING PROFESSIONAL' },
      tooltip: { y: { formatter: function (val) { return val + "%" } } },
      series: [{
        name: "CHANCE",
        data: [5, 14, 21, 33, 46, 57, 62, 71, 82, 95, 99]
      }],
      chart: {
        height: 350,
        type: 'line',
        zoom: { enabled: false }
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'straight' },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        title: { text: 'NUMBER OF MONTHS WITH CHAMPIONS DEN ' },
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11+'],
      },
      yaxis: {
        title: { text: 'LIKELIHOOD %' }
      }
    };

    var graphFiveOptions = {
      title: { text: 'COACHING CERTIFICATIONS' },
      series: [90, 10],
      colors: ['#F13B59', '#BC6CCA'],
      chart: {
        width: 650,
        type: 'pie',
      },
      labels: ['Our Coaches', 'Other Clubs Coaches'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: 'bottom' }
        }
      }]
    };

    var graphSixOptions = {
      title: { text: 'DISEASE PREVENTION CHART' },
      tooltip: { y: { formatter: function (val) { return val + "%" } } },
      series: [{
        name: "ALZHEIMERS",
        data: [20, 24, 32, 37, 48, 57, 66, 71, 82, 89, 99]
      },

      {
        name: "DIABETES",
        data: [15, 19, 31, 53, 66, 69, 75, 83, 88, 93, 99]
      },

      {
        name: "HEART FAILURE",
        data: [20, 25, 32, 45, 51, 57, 62, 69, 82, 91, 99]
      }
    ],
      chart: {
        height: 350,
        type: 'line',
        zoom: { enabled: false }
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'straight' },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        title: { text: 'NUMBER OF MONTHS WITH CHAMPIONS DEN ' },
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11+'],
      },
      yaxis: {
        title: { text: 'PREVENTION %' }
      }
    };

    var graphOne = new ApexCharts(document.querySelector("#graph-one"), graphOneOptions);
    var graphTwo = new ApexCharts(document.querySelector("#graph-two"), graphTwoOptions);
    var graphThree = new ApexCharts(document.querySelector("#graph-three"), graphThreeOptions);
    var graphFour = new ApexCharts(document.querySelector("#graph-four"), graphFourOptions);
    var graphFive = new ApexCharts(document.querySelector("#graph-five"), graphFiveOptions);
    var graphSix = new ApexCharts(document.querySelector("#graph-six"), graphSixOptions);

    graphOne.render();
    graphTwo.render();
    graphThree.render();
    graphFour.render();
    graphFive.render();
    graphSix.render();

    // Cleanup chart on component unmount
    return () => {
      graphOne.destroy();
      graphTwo.destroy();
      graphThree.destroy();
      graphFour.destroy();
      graphFive.destroy();
      graphSix.destroy();
    };
  }, []);

  return (
    <div className="result-page">

      <h1 className="result-page-title"> <span className="result-page-title-special">ANALYZE THE RESULTS</span> </h1>

      <div className="graph-container">
        <div className="graph-content">
          <h1 className = "graph-content-title"> <span className="results-statistics-moving-underline">IMPROVE PERFORMANCE</span></h1>
          <p className = "graph-content-description"> At CHAMPIONS DEN, players experience substantial improvements in speed, strength, endurance, stamina, and skill over time. Our personalized training programs and cutting-edge facilities ensure that every athlete reaches their full potential, setting new personal bests and excelling in their sport. </p>

          <ul className="graph-content-details">
            <li className="graph-content-details-element"> SPEED: Increased by 20% over 6 months </li>
            <br />
            <li className="graph-content-details-element"> STRENGTH: Shot power improved by 10% </li>
            <br />
            <li className="graph-content-details-element"> ENDURANCE: Running distance increased by 20% </li>
            <br />
            <li className="graph-content-details-element"> STAMINA: Able to sustain peak performance for 30% longer </li>
            <br />
            <li className="graph-content-details-element"> SKILL: Dribbling accuracy improved by 20% </li>
          </ul>
        </div>

        <div className="graph-image">
          <div id="graph-one"></div>
        </div>
      </div>

      <div className="graph-container">
        <div className="graph-content">
          <h1 className = "graph-content-title"> <span className="results-statistics-moving-underline">PARTICIPATION AND ENGAGEMENT</span></h1>
          <p className = "graph-content-description"> CHAMPIONS DEN boasts high registration rates for our numerous leagues, reflecting the strong community spirit and enthusiasm among our members. Consistently high attendance at games and events demonstrates the active participation and commitment of our players. </p>

          <ul className="graph-content-details">
            <li className="graph-content-details-element"> LEAGUE REGISTRATION: Over 300 players registered this season </li>
            <br />
            <li className="graph-content-details-element"> GAME ATTENDANCE: 95% average attendance rate for all games </li>
            <br />
            <li className="graph-content-details-element"> TRAINING SESSIONS: 85% average attendance for training sessions </li>
            <br />
            <li className="graph-content-details-element"> COMMUNITY EVENTS: Participation increased by 50% over the last year </li>
            <br />
            <li className="graph-content-details-element"> TEAM ENGAGEMENT: 90% of players participate in team activities </li>
          </ul>
        </div>

        <div className="graph-image">
          <div id="graph-two"></div>
        </div>
      </div>

      <div className="graph-container">
        <div className="graph-content">
          <h1 className = "graph-content-title"> <span className="results-statistics-moving-underline">COST COMPARISON</span></h1>
          <p className = "graph-content-description"> CHAMPIONS DEN provides top-notch facilities and professional training at a lower cost compared to other clubs. Our affordable membership fees make it accessible for more people to benefit from our excellent services, ensuring great value without compromising on quality. </p>

          <ul className="graph-content-details">
            <li className="graph-content-details-element"> LEAGUES: Our league fees are 20% lower than other clubs </li>
            <br />
            <li className="graph-content-details-element"> LESSONS: Coaching lessons cost 15% less than competitors </li>
            <br />
            <li className="graph-content-details-element"> COACHES: Access to professional coaches at 25% reduced rates </li>
            <br />
            <li className="graph-content-details-element"> FIELDS/COURTS: Field and court rentals are 30% cheaper than other venues </li>
            <br />
            <li className="graph-content-details-element"> OVERALL CLUB: Overall club expenses are 20% below other clubs </li>
          </ul>
        </div>

        <div className="graph-image">
          <div id="graph-three"></div>
        </div>
      </div>

      <div className="graph-container">
        <div className="graph-content">
          <h1 className = "graph-content-title"> <span className="results-statistics-moving-underline">SUCCESS METRICS</span></h1>
          <p className = "graph-content-description"> Individuals who join CHAMPIONS DEN have a higher likelihood of becoming professional athletes and achieving significant milestones. Our members consistently outperform those from other clubs, with many reaching state and national levels, thanks to our robust support and comprehensive training programs. </p>

          <ul className="graph-content-details">
          <li className="graph-content-details-element"> PROFESSIONAL OPPORTUNITIES: More than 90% of our members advance to professional levels within roughly a year </li>
            <br />
            <li className="graph-content-details-element"> MILESTONES: Members achieve 40% more significant milestones compared to other clubs </li>
            <br />
            <li className="graph-content-details-element"> COMPETITION SUCCESS: Athletes from CHAMPIONS DEN win 25% more competitions </li>
            <br />
            <li className="graph-content-details-element"> SCHOLARSHIPS: 20% of our athletes receive sports scholarships </li>
            <br />
            <li className="graph-content-details-element"> INDIVIDUAL SUCCESS RATE: Members show a 35% higher individual success rate than those from other clubs </li>
          </ul>
        </div>

        <div className="graph-image">
          <div id="graph-four"></div>
        </div>
      </div>

      <div className="graph-container">
        <div className="graph-content">
          <h1 className = "graph-content-title"> <span className="results-statistics-moving-underline">COACHING QUALITY</span></h1>
          <p className = "graph-content-description"> Each coach at CHAMPIONS DEN brings years of experience and a deep understanding of their sport, ensuring high-quality training for all members. Our seasoned coaches are dedicated to helping athletes improve and succeed, providing expert guidance and personalized coaching plans. </p>

          <ul className="graph-content-details">
            <li className="graph-content-details-element"> EXPERIENCE: Each coach has over 10 years of professional experience </li>
            <br />
            <li className="graph-content-details-element"> LEGENDS: Many of our coaches are legends of their time and former champions </li>
            <br />
            <li className="graph-content-details-element"> QUALIFICATIONS: 90% of our coaches hold advanced coaching certifications </li>
            <br />
            <li className="graph-content-details-element"> SUCCESS: Coaches have led teams to win over 50 championships </li>
            <br />
            <li className="graph-content-details-element"> DEDICATION: Our coaches are committed to providing personalized training plans for every athlete </li>
          </ul>
        </div>

        <div className="graph-image">
          <div id="graph-five"></div>
        </div>
      </div>

      <div className="graph-container">
        <div className="graph-content">
          <h1 className="graph-content-title"> <span className="results-statistics-moving-underline">WATCH YOUR HEALTH</span> </h1>
          <p className="graph-content-description"> At CHAMPIONS DEN, we prioritize the health and well-being of our members. We offer comprehensive fitness programs and resources to ensure everyone stays in peak condition to excel in their chosen sport. </p>

          <ul className="graph-content-details">
            <li className="graph-content-details-element"> DECREASE OF ALZHEIMERS: Within a year, expect more than a 90% decrease in Alzheimer's disease cases among our members. </li>
            <br />
            <li className="graph-content-details-element"> DECREASE OF DIABETES: Our diabetes prevention initiatives have led to a +90% reduction in diabetes rates among participants within a year. </li>
            <br />
            <li className="graph-content-details-element"> DECREASE OF HEART FAILURE: Within, we've seen a +90% decrease in instances of heart failure among our members. </li>
          </ul>
        </div>

        <div className="graph-image">
          <div id="graph-six"></div>
        </div>
      </div>
      
    </div>
  );
}

export default Result;
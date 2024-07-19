//main app
import Navbar from './Navbar';
import Homepage from './Homepage';
import Train from './Train';
import Result from './Result';
import Faq from './Faq'
import Join from './Join';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div id="google_translate_element"></div>
        <Navbar />
        <Switch>
          <Route exact path = "/"> <Homepage /> </Route>
          <Route exact path = "/train"> <Train /> </Route>
          <Route exact path = "/result"> <Result /> </Route>
          <Route exact path = "/faq"> <Faq /> </Route>
          <Route exact path = "/join"> <Join /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
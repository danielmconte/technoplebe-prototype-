import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MainPage from './MainPage';
import Languages from './Languages';
import Frameworks from './Frameworks';
import Concepts from './Concepts';
import Databases from './Databases';
import Algorithms from './Algorithms';
import Javascript from './Javascript';
import ES6 from './ES6';
import HigherOrder from './HigherOrder';
import LetConst from './LetConst';


function App() {
  return (
    <div className="App">
            <BrowserRouter>
              <Switch>
                  <Route exact path="/">
                    <MainPage />
                  </Route>
                  <Route exact path="/languages">
                      <Languages />
                  </Route>
                  <Route exact path="/frameworks">
                      <Frameworks />
                  </Route>
                  <Route exact path="/concepts">
                      <Concepts />
                  </Route>
                  <Route exact path="/databases">
                      <Databases />
                  </Route>
                  <Route exact path="/algorithms">
                      <Algorithms />
                  </Route>
                  <Route exact path="/javascript">
                      <Javascript />
                  </Route>
                  <Route exact path="/es6">
                      <ES6 />
                  </Route>
                  <Route exact path="/higherorder">
                      <HigherOrder />
                  </Route>
                  <Route exact path="/letconst">
                      <LetConst />
                  </Route>
                  <Redirect to="/" />
              </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;

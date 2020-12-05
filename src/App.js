import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Dash from './views/Dash';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dash">
          <Dash />
        </Route>
        {/*   <Route path="*">
            <ErrorPage />
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;

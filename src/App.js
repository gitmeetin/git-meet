import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/dash">
            <Dash />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;

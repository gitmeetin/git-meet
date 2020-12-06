import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Dash from './views/Dash';
import Profile from './views/Profile';
import AuthCallback from './components/Auth/AuthCallback';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth">
          <AuthCallback />
        </Route>
        <Route exact path="/dash">
          <Dash />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        {/*   <Route path="*">
            <ErrorPage />
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;

import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import EntryList from './views/EntryList';
import Home from './views/Home';
import Login from './views/Login';

export default function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/entries">
        <EntryList />
      </PrivateRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}
// wrapping everything in UseProvider so everything in App has access to the state

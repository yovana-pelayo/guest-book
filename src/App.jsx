import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Auth from './views/Auth';
import Dashboard from './views/Dashboard';
import Home from './views/Home';

export default function App() {
  return (
    <Switch>
      <Route path="/login">
        <Auth />
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
// wrapping everything in UseProvider so everything in App has access to the state

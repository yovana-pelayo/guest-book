import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Auth from './views/Auth';
import Dashboard from './views/Dashboard';
import Home from './views/Home';

export default function App() {
  return (
    <Switch>
      <Route path="/login">
        <Auth />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

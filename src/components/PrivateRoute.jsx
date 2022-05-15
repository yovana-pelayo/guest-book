import { Route, Redirect, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();
  const location = useLocation();

  return (
    <Route {...rest}>
      {user.email ? (
        children
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
}

// creating customer hooks so we dont have to see context every time
//created custom hook in UserContext, the custom hook useUser allows us to access context byt calling this hook

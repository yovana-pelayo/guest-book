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

//{...rest} path is the prop we are placing in our app
// dashboard is the children we are rendering on line 4

// if user is authenticated then send to dashboard or where ever I want it to go. If the email or user is not valid then redirect to the log in page...
// the user object

// is const context = userContext(); all context combined in one? In the lecture Dan said that it was easier to have everything in useUser instead of individual hook? So this is our customized hook that gives us access to all the state in context or what? -- ASK TANNER Friday

// putting privateroute into its own component makes it reusable so we can render anything not just somethign hard coded

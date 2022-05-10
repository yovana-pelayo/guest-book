import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();
  const { login } = useUser();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);

      const url = location.state.from ? location.state.from.pathname : '/';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <h1>Authentication page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in</button>
        <p>{error}</p>
      </form>
    </>
  );
}

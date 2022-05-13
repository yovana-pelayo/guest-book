import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  // const context = useUser();

  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();
  const { login, signUp } = useUser();
  // const { signUp } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      const url = location.state ? location.state.from.pathname : '/';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(newEmail, newPassword);
      const url = location.state ? location.state.from.pathname : '/';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1>Authentication page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in</button>
        <p>{error}</p>
      </form>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="password"
          value={newPassword}
          placeholder="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

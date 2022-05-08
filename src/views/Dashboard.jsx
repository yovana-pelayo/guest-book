import { useUser } from '../context/UserContext';

export default function Dashboard() {
  const { logout } = useUser();
  return (
    <>
      <h1>Dashboard</h1>
      <p>You should only see this if you are logged in</p>
      <button onClick={logout}>logout</button>
    </>
  );
}

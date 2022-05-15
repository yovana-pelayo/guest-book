import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/entries">View Entries</Link>
    </>
  );
}

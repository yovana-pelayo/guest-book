import { useEffect, useState } from 'react';
import CreatEntry from '../components/CreateEntry';
import { useUser } from '../context/UserContext';
import { getEntries } from '../services/entries';

export default function Dashboard() {
  const { logout } = useUser();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEntries()
      .then((results) => setEntries(results))
      .finally(() => setLoading(false));
  }, []);

  // to make shorter you can also do .then(setEntries)
  return (
    <>
      <h1>Dashboard</h1>
      <p>Dashboard displays list of entries</p>
      <button onClick={logout}>logout</button>

      {loading ? (
        <p>loading entries... </p>
      ) : (
        <label>
          <CreatEntry setEntries={setEntries} />
          <ul>
            {entries.map((entry) => (
              <li key={entry.id}>{entry.content}</li>
            ))}
          </ul>
        </label>
      )}
    </>
  );
}
// we get our entries and load our entries

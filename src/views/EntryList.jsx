import { useEffect, useState } from 'react';
import CreatEntry from '../components/CreateEntry';
import { useUser } from '../context/UserContext';
import { getEntries } from '../services/entries';

export default function EntryList() {
  const { logout, user } = useUser();
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
      <h1>Entries</h1>
      <p>user: {user.email}</p>
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
// we are passing newEntries to the CreateEntry component so we are able to set the new object to our list of entries
// oh wow... and on line 31 we are calling the list by id and content assigned to entry.

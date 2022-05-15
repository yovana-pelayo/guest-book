import { useUser } from '../context/UserContext';
import { createEntry } from '../services/entries';

export default function CreatEntry({ setEntries }) {
  const { newEntry, setNewEntry, user } = useUser();
  console.log('user', user);
  const handleEntry = async () => {
    const data = await createEntry({ userId: user.id, content: newEntry });
    setEntries((prev) => [...prev, ...data]);
    console.log('data', data);
  };
  return (
    <div>
      <label>
        Guest Name:
        <input
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          type="text"
        />
        {''}
        <button onClick={handleEntry}>save</button>
      </label>
    </div>
  );
}

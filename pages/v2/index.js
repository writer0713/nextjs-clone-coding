import { useState } from 'react';
import { useRouter } from 'next/router';

const App = () => {
  const [username, setUsername] = useState('')
  const router = useRouter()
  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={() => router.push(`/v2/users/${username}`)}>
        user 찾기
      </button>
    </div>
  );
}

export default App;
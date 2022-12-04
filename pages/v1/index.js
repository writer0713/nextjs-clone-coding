import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const App = () => {
  const [name, setName] = useState("");
  const router = useRouter()

  return (
    <div>
      <h2>Link to tomato Page</h2>
      <Link href="/v1/tomato">
        Move to "/tomato"
      </Link>
      <br />
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="button" onClick={() => router.push(`/v1/vegetable/${name}`)}>
          {name} 으 가기
        </button>
      </div>

    </div>
  );
}

export default App;
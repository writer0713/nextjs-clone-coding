import Link from "next/link";

const App = () => {
  return (<>
    <div>
      Hello
    </div>

    <div>
      <Link href="/v1">
        <h2>Go to v1 example</h2>
      </Link>
    </div>

    <div>
      <Link href="/v2">
        <h2>Go to v2 example</h2>
      </Link>
    </div>

    <div>
      <Link href="/v3">
        <h2>Go to v3 example</h2>
      </Link>
    </div>
  </>
  );
}

export default App;
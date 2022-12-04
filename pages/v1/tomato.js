import Link from "next/link";

const Child = () => {
  return <p>Move to "/"</p>
}

const Tomato = () => {
  return (
    <div>
      <h2>Link to "main" Page</h2>
      <Link href="/v1">
        <Child />
      </Link>
    </div>
  );
}

export default Tomato;
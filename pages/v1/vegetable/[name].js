import Link from "next/link";
import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter()
  const name = router.query.name;

  return (
    <div>
      {name}
    </div>
  );
}

export default Name;
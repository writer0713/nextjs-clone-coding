import Error from "next/error";

const NotFoundError = () => {
  return (
    <>
      <Error statusCode='404' />
    </>
  );
}

export default NotFoundError
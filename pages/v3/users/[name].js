const User = ({ time, user }) => {
  console.log(user);
  const username = user && user.name;
  return (
    <div>
      <h1>{time}</h1>
      <h1>{username}</h1>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {

  const { name } = params;
  const time = new Date().toISOString();

  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      console.log('user ::', user.name);
      return { props: { user, time } };
    }
    return { props: { time } };
  } catch (e) {
    console.log(e);
    return { props: { time } };
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [{
      params: { name: 'writer0713' }
    },
    {
      params: { name: 'llvc' }
    }],
    fallback: true
  }
}

export default User;
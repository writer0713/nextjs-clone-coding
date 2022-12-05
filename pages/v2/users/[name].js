import Profile from "../../../components/Profile"
import { css } from 'styled-jsx/css';
import Repository from "../../../components/Repository";


const style = css`
  .user-contents-wrapper {
    display: flex;
    padding: 20px;
  }
`;

const User = ({ user, repos }) => {
  if (!user || !repos) {
    return null;
  }
  return (
    <>
      <div className="user-contents-wrapper">
        <Profile user={user} />
        <Repository user={user} repos={repos} />
      </div>
      <style jsx>{style}</style>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {

  const { name } = query

  try {
    const userResponse = await fetch(`https://api.github.com/users/${name}`)
    const repoResponse = await fetch(`https://api.github.com/users/${name}/repos?sort=updated&page=1&per_page=10`);
    if (userResponse.status === 200 && repoResponse.status == 200) {
      const user = await userResponse.json();
      const repos = await repoResponse.json();
      return { props: { user, repos } };
    }
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
}

export default User;
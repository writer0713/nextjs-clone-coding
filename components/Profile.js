import css from "styled-jsx/css";
import { ImBlog } from "react-icons/im";

const style = css`
  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }

  .profile-image-wrapper {
    width: 100%;
    border: 1px solid #e1e4e8;
  }

  .profile-image-wrapper .profile-image {
    display: block;
    width: 100%;
  }

  .profile-username {
    margin: 0;
    padding-top: 16px;
    font-size: 26px;
  }

  .profile-user-login {
    margin: 0;
    font-size: 20px;
  }

  .profile-user-info {
    display: flex;
    align-items: center;
  }

  .profile-user-blog {
    margin-left: 10px;
  }
`;

const Profile = ({ user }) => {
  return (
    <>
      <div className="profile-box">
        <div className="profile-image-wrapper">
          <img className="profile-image" src={user.avatar_url} alt={`${user.name} profile image`} />
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <p className="profile-user-login">{user.login}</p>
        <p className="profile-user-info">
          <ImBlog size={16} color="white" />
          <span className="profile-user-blog">{user.blog}</span>
        </p>
      </div>
      <style jsx>{style}</style>
    </>
  );
}

export default Profile;
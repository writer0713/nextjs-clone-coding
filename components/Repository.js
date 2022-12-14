import { css } from 'styled-jsx/css';
import formatDistance from "date-fns/formatDistance";

const style = css`
  .repos-wrapper {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 0px 16px;
  }

  .repos-header {
    padding: 16px 0;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #e1e4e8;
  }

  .repos-count {
    display: inline-block;
    padding: 2px 5px;
    margin-left: 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: #58069;
    background-color: rgba(27, 31, 35, 0.08);
    border-radius: 20px;
  }

  .repository-wrapper {
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
    padding: 24px 0;
  }

  a {
    text-decoration: none;
  }

  .repository-name {
    margin: 0;
    color: #0366d6;
    font-size: 20px;
    display: inline-block;
    cursor: pointer;
  }

  .repository-name:hover {
    text-decoration: underline;
  }

  .repository-description,
  .repository-language {
    margin: 10;
    font-size: 14px;
  }
  
  .repository-updated-at {
    margin-left: 20px;
  }
`;

const Repository = ({ user, repos }) => {
  return (
    <>
      <div className="repos-wrapper">
        <div className="repos-header">
          Repositories
          <span className="repos-count">{user.public_repos}</span>
        </div>
        {repos.map((repo) => (
          <div key={repo.id} className="repository-wrapper">
            <a target="_blank" rel="noreferrer" href={`https://github.com/${user.login}/${repo.name}`} >
              <h2 className="repository-name">{repo.name}</h2>
            </a>
            <p className="repository-description">{repo.description}</p>
            <p className="repository-language">
              {repo.language ? repo.language : 'unknown'}
              <span className="repository-updated-at">
                {formatDistance(new Date(repo.updated_at), new Date(), { addSuffix: true, })}
              </span>
            </p>
          </div>
        ))}
      </div>
      <style jsx>{style}</style>
    </>
  );
}

export default Repository;


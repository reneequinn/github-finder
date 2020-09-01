import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { loading, user, getUser, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <div className='mt-4 has-text-left'>
        <Link to='/' className='button is-link'>
          <span className='icon mr-1 is-small'>
            <i className='fas fa-chevron-left'></i>
          </span>
          Back To Search
        </Link>
      </div>
      <div className='mt-4 has-text-left card has-background-dark'>
        <div className='card-header px-4'>
          <h2 className='card-header-title has-text-white is-size-3'>{name}</h2>
          <span className='has-text-white px-4'>
            Hireable{' '}
            {hireable ? (
              <i className='ml-2 fas fa-check has-text-success' />
            ) : (
              <i className='ml-2 fas fa-times-circle has-text-danger' />
            )}
          </span>
        </div>

        <div className='card-content px-4 has-text-white-bis has-background-black-ter'>
          <div className='columns is-vcentered px-4 is-4'>
            <div className='column is-one-quarter has-text-centered'>
              <figure className='image is-128x128 is-inline-block'>
                <img src={avatar_url} alt={name} className='is-rounded' />
              </figure>
            </div>
            <div className='column is-three-quarters'>
              <div className='level mb-4'>
                <div className='level-left is-italic is-size-5'>
                  <p className='level-item has-text-weight-semibold'>{login}</p>
                  <p className='level-item'>{location}</p>
                </div>
                <div className='level-right is-block-mobile has-text-centered'>
                  <span className='tag level-item is-dark mr-2'>
                    Followers: {followers}
                  </span>
                  <span className='tag level-item is-dark mr-2'>
                    Following: {following}
                  </span>
                  <span className='tag level-item is-dark mr-2'>
                    Public Repos: {public_repos}
                  </span>
                  <span className='tag level-item is-dark'>
                    Public Gists: {public_gists}
                  </span>
                </div>
              </div>
              <div className='has-text-centered-mobile'>
                {bio && (
                  <Fragment>
                    <p>{bio}</p>
                  </Fragment>
                )}
                <div className='level'>
                  <ul className='has-text-white-bis my-4'>
                    <li>
                      {company && (
                        <Fragment>
                          <strong className='has-text-white'>Company: </strong>
                          {company}
                        </Fragment>
                      )}
                    </li>
                    <li>
                      {blog && (
                        <Fragment>
                          <strong className='has-text-white'>Website: </strong>
                          <a href={blog} className=''>
                            {blog}
                          </a>
                        </Fragment>
                      )}
                    </li>
                  </ul>
                  <a href={html_url} className='button is-link my-4'>
                    Visit GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''></div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;

import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <div className='card mt-4 has-background-black-ter'>
      <div className='card-header has-background-dark px-4'>
        <h4 className='card-header-title has-text-white is-size-5'>
          Recent Repos
        </h4>
      </div>
      <div className='card-content px-4 pt-0'>
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;

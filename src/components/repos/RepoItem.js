import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  const { html_url, name, description, stargazers_count, language } = repo;
  return (
    <div className='has-background-black-ter px-4'>
      <div className='level mt-5'>
        <div className='level-left'>
          <div className='level-item is-block has-text-left has-text-centered-mobile'>
            <h3 className='is-size-5 has-text-weight-semibold has-text-white-bis'>
              {name}
            </h3>
            <p className='has-text-white-ter'>{description}</p>
          </div>
        </div>
        <div className='level-right'>
          <span className='tag level-item is-dark mr-2'>
            {stargazers_count} stars
          </span>
          {language && (
            <span className='tag level-item is-dark'>{language}</span>
          )}
          <a
            href={html_url}
            className='button has-text-weight-semibold is-small is-link my-2 is-block-mobile'
          >
            View Repo
          </a>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;

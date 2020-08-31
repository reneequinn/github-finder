import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='column is-one-quarter'>
      <div className='card has-text-centered has-background-dark'>
        <div className='card-image pt-3'>
          <figure className='image is-inline-block is-128x128'>
            <img src={avatar_url} alt={login} className='is-rounded' />
          </figure>
        </div>
        <div className='card-content pt-4'>
          <h3 className='title is-5 mb-4 has-text-white'>{login}</h3>
          <div>
            <Link
              to={`/user/${login}`}
              className='button is-link is-outlined is-inverted has-text-weight-semibold'
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

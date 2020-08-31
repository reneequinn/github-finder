import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='mt-4'>
        <label htmlFor='text' className='label has-text-white has-text-left'>
          Search for user
        </label>
        <input
          type='text'
          name='text'
          placeholder='Enter username'
          value={text}
          onChange={onChange}
          className='input has-background-dark has-text-white'
        />
        <input
          type='submit'
          value='Search'
          className='button is-fullwidth is-link has-text-weight-bold my-3'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='button is-fullwidth is-dark has-text-weight-bold mt-2'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

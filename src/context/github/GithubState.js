import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();

    try {
      let res = await fetch(
        `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      } else {
        res = await res.json();
      }
      dispatch({
        type: SEARCH_USERS,
        payload: res.items,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Get User
  const getUser = async (username) => {
    setLoading();

    try {
      let res = await fetch(
        `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status ${res.status}`);
      } else {
        res = await res.json();
      }
      dispatch({
        type: GET_USER,
        payload: res,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Get Repos
  const getUserRepos = async (username) => {
    setLoading();

    try {
      let res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status ${res.status}`);
      } else {
        res = await res.json();
      }

      dispatch({
        type: GET_REPOS,
        payload: res,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

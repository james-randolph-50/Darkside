import { resetSnowboardForm } from './snowboardForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **

const setSnowboards = snowboards => {
  return {
    type: 'GET_SNOWBOARDS_SUCCESS',
    snowboards
  }
}

const addSnowboard = snowboard => {
  return {
    type: 'CREATE_SNOWBOARD_SUCCESS',
    snowboard
  }
} 

// ** Async Actions **

export const getSnowboards = () => {
  return dispatch => {
    return fetch(`${API_URL}/snowboards`)
      .then(response => response.json())
      .then(snowboards => dispatch(setSnowboards(snowboards)))
      .catch(error => console.log(error));
  }
}

export const createSnowboard = snowboard => {
  return dispatch => {
    return fetch(`${API_URL}/snowboards`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ snowboard: snowboard })
    })
      .then(response => response.json())
      .then(snowboard => {
        dispatch(addSnowboard(snowboard))
        dispatch(resetSnowboardForm())
      })
      .catch(error => console.log(error))
  }
}
import React, {useReducer, useState} from 'react';
import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import {navigate} from '../navigationRef';

const recuder = (state, action) => {
  switch (action.type) {
    case 'add_token':
      return {...state, token: action.payload, errorMessage: ''};
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin':
      return {...state, token: action.payload, errorMessage: ''};
    case 'clear_error_mess':
      return {...state, errorMessage: ''};
    case 'signout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_mess'});
};

const tryLocalSignin = dispatch => {
  return () => {
    const token = AsyncStorage.getItem('token');
    if (token) {
      dispatch({type: 'add_token', payload: token});
      navigate('TrackList');
    } else {
      navigate('Signup');
    }
  };
};

const signin = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await trackerAPI.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Có lỗi trong quá trình đăng nhập.',
      });
      console.log('Lỗi đăng nhập: ' + err.response.data);
    }
  };
};

const signup = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await trackerAPI.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      const valueToken = await AsyncStorage.getItem('token');
      console.log('valueToken:' + valueToken);
      dispatch({type: 'add_token', payload: response.data.token});
      navigate('TrackList');
    } catch (err) {
      dispatch({type: 'add_error', payload: 'Có lỗi trong quá trình đăng ký.'});
      console.log('Lỗi đăng ký: ' + err.response.data);
    }
  };
};

const signout = dispatch => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
  };
};

export const {Context, Provider} = createDataContext(
  recuder,
  {signin, signup, signout, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: ''},
);

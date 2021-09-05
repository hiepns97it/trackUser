import React, {useContext, useEffect} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

const ResovleAuthScreen = () => {
  const {tryLocalSignin} = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default ResovleAuthScreen;

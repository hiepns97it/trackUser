import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../../components/Spacer';
import {Context as AuthContext} from '../../context/AuthContext';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';

const SignupScreen = props => {
  const {navigation} = props;
  const {state, signup, clearErrorMessage} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* <NavigationEvents onWillBlur={clearErrorMessage} /> */}
      <AuthForm
        headerText="Đăng ký tài khoản"
        errorMessage={state.errorMessage}
        submitButtonText="Đăng ký"
        onSubmit={signup}
      />
      <NavLink
        text="Bạn đã có tài khoản. Đăng nhập ngay bây giờ"
        routeName="Signin"
        clearErrorMessage={clearErrorMessage}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //marginBottom: 250,
  },
});

export default SignupScreen;

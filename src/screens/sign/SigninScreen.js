import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../../components/Spacer';
import {Context as AuthContext} from '../../context/AuthContext';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';

const SigninScreen = props => {
  const {navigation} = props;
  const {state, signin, clearErrorMessage} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* <NavigationEvents onWillBlur={clearErrorMessage} /> */}
      <AuthForm
        headerText="Đăng nhập tài khoản"
        errorMessage={state.errorMessage}
        submitButtonText="Đăng nhập"
        onSubmit={signin}
      />
      <NavLink
        text="Bạn chưa có tài khoản. Vui lòng đăng ký để sử dụng."
        routeName="Signup"
        clearErrorMessage={clearErrorMessage}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;

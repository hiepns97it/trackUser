import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../../context/AuthContext';
import {Input, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';

const AccountScreen = props => {
  const {signout} = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={{fontSize: 48}}>AccountScreen</Text>
      <Button title="Đăng xuất" onPress={signout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;

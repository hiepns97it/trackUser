import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = props => {
  const {headerText, errorMessage, submitButtonText, onSubmit} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Spacer>
        <Text h3 style={styles.text}>
          {headerText}
        </Text>
      </Spacer>
      <Input
        label="Thông tin tài khoản"
        placeholder="Tài khoản"
        value={email}
        onChangeText={newEmail => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        placeholder="Mật khẩu"
        label="Thông tin mật khẩu"
        value={password}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newPassword => setPassword(newPassword)}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({email, password})}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;

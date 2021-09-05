import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, routeName, clearErrorMessage}) => {
  //const {navigation, text, routeName} = props;
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routeName);
          clearErrorMessage();
        }}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    fontSize: 14,
  },
});

export default withNavigation(NavLink);

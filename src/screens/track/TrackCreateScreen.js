import React, {useEffect} from 'react';
import {View, StyleSheet, PermissionsAndroid, Alert} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Map from '../../components/Map';

const TrackCreateScreen = props => {
  const request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'ReactNativeCode Location Permission',
          message: 'ReactNativeCode App needs access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Location Permission Granted.');
      } else {
        Alert.alert('Location Permission Not Granted');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    request_location_runtime_permission();
  }, []);

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h3>TrackCreateScreen</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

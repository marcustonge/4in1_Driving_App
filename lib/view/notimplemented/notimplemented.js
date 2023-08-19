import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@rneui/base';
import { useDispatch } from 'react-redux';
import NavigationService from '../../navigation/navigationService';

const NotImplementedScreen = () => {

  const dispatch = useDispatch();
  const navigationService = NavigationService;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20, fontSize: 18 }}>
        This functionality hasn't been implemented yet.
      </Text>
      <Button
        title="Go Back"
        onPress={() => {
          dispatch({ type: 'SET_ACTIVE_TAB', payload: '' });

          navigationService.pop();
        }}
      />
    </View>
  );
};

export default NotImplementedScreen;
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@rneui/base';
import { useDispatch } from 'react-redux';

const NotImplementedScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20, fontSize: 18 }}>
        This functionality hasn't been implemented yet.
      </Text>
      <Button
        title="Go Back"
        onPress={() => {
          dispatch({type: 'SET_ACTIVE_TAB', payload: ''});
          navigation.goBack();}}
      />
    </View>
  );
};

export default NotImplementedScreen;
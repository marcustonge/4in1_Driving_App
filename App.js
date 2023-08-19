import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './lib/routes/homeStack';

export default function App() {
  return (
    <Navigator />

  );
}



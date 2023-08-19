import { View, Image, Text, FlatList } from 'react-native';
import RoundedContainer from '../widgets/rounded_container';
import { ListViewBase } from 'react-native';

const UserProgressScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Top Banner */}
      <Image
        source={require('../../../assets/DrivingTestBanner.png')}
        style={{ width: '100%', height: 80}}
        resizeMode="contain"
      />
      {/* Main Components */}
      
    </View>
  );
};

export default UserProgressScreen;
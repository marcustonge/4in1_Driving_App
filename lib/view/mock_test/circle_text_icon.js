import { View, Text } from 'react-native';
import { Icon } from '@rneui/base';

const CircleTextIcon = ({ iconName, backgroundColor, text }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          width: 110,
          height: 110,
          borderRadius: 55,
          backgroundColor: backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={iconName} type="font-awesome" color="white" size={70} />
      </View>
      <Text style={{ marginTop: 10 }}>{text}</Text>
    </View>
  );
};

export default CircleTextIcon;
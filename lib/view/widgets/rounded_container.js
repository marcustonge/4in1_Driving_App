import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Card } from '@rneui/base';

const RoundedContainer = ({ iconType, text, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}> 
      <Card containerStyle={{ borderRadius: 20, borderColor: color, borderWidth: 2, margin: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name={iconType} type="font-awesome" color={color} size={50} />
          <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold', color }}>
            {text}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default RoundedContainer;
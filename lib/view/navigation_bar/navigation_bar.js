import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux'
import NavigationService from '../../navigation/navigationService';

const CustomBottomBar = () => {

  const reduxState = useSelector(state => state.navigationbar);
  activeTab = reduxState.activeTab;
  // console.log("\nState: "+JSON.stringify(reduxState.navigationbar.activeTab, null, 2));
  // console.log("\nActiveTab: "+reduxState.navigationbar.activeTab);

  const navigator = useSelector(state => state.navigationService);

  const tabData = [
    { tabName: 'Goals', tabRoute: 'Goals', iconName: 'bullseye' },
    { tabName: 'Progress', tabRoute: 'NotImplemented', iconName: 'line-chart' },
    { tabName: 'Settings', tabRoute: 'NotImplemented', iconName: 'cog' },
    { tabName: 'Terms', tabRoute: 'NotImplemented', iconName: 'file-text-o' },
    { tabName: 'Chat', tabRoute: 'AuthScreen', iconName: 'comment-o' },
  ];

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {tabData.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => {
            dispatch({ type: 'SET_ACTIVE_TAB', payload: tab.tabName });
            NavigationService.navigate({routeName: tab.tabRoute, params: {}});
            // navigation.navigate(tab.tabRoute);
          }}
        >
          <Icon
            name={tab.iconName}
            size={24}
            color={activeTab === tab.tabName ? 'gold' : 'black'}
          />
          <Text
            style={{
              color: activeTab === tab.tabName ? 'gold' : 'black',
              marginTop: 5,
            }}
          >
            {tab.tabName}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default CustomBottomBar;
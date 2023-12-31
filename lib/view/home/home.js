import React, { useState } from 'react';
import { Image, SafeAreaView } from 'react-native';
import ContainerList from './container_list';
import CustomBottomBar from '../navigation_bar/navigation_bar';

const HomeScreen = () => {

  const [activeTab, setActiveTab] = useState('goals');

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Top Banner */}
      <Image
        source={require('../../../assets/DrivingTestBanner.png')}
        style={{ width: '100%', height: 80}}
        resizeMode="contain"
      />
      {/* Main Components */}
      <ContainerList />
      
      <CustomBottomBar activeTab={activeTab} onChangeTab={handleChangeTab} />
    </SafeAreaView>
  );
};

export default HomeScreen;
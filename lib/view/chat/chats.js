import CustomBottomBar from '../navigation_bar/navigation_bar';
import { auth } from '../../model/firebaseConfig';
import { useState } from 'react';
const ChatsScreen = () => {
    const [activeTab, setActiveTab] = useState('goals');

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };
  return (

      <CustomBottomBar activeTab={activeTab} onChangeTab={handleChangeTab} />
      );
}

export default ChatsScreen;
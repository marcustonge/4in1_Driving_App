import CustomBottomBar from '../navigation_bar/navigation_bar';
import { auth } from '../../model/firebaseConfig';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomListItem from './custom_list_item';
import { Avatar, Icon } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const ChatsScreen = () => {
    const [activeTab, setActiveTab] = useState('chat');
    const handleChangeTab = (tab) => {
        setActiveTab(tab);
        console.log(auth.currentUser);
    };

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigationService.pushReplacement({ routeName: 'AuthScreen' });
        })
    }

    return (
        <>
            <SafeAreaView edges={['top']} style={{ flex: 0, backgroundColor: 'lightblue' }} />
            <SafeAreaView edges={[]} style={{ flex: 1, width: '100%', flexDirection: 'column', backgroundColor: 'beige', justifyContent: 'flex-end' }} >
                <View style={[styles.topBar]}>
                    <View style={styles.titleContainer}>
                        <TouchableOpacity  onPress={signOutUser}>
                        <Icon name='logout' color={'white'} size={28} style={{ paddingRight: 20, }} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Chats</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity>
                            <Icon name='camera' color={'white'} size={28} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='chat' color={'white'} size={28} style={{ paddingHorizontal: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>


                <ScrollView>
                    <CustomListItem />

                </ScrollView>
                <CustomBottomBar activeTab={activeTab} onChangeTab={handleChangeTab} />
            </SafeAreaView>
            <SafeAreaView edges={['bottom']} style={{ flex: 0, backgroundColor: 'white' }} />
        </>
    );
}
const styles = StyleSheet.create({
    topBar: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        // position: 'absolute',
        justifyContent: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20
    },
    title: {
        // textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default ChatsScreen;
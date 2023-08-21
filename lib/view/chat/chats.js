import CustomBottomBar from '../navigation_bar/navigation_bar';
import { auth, db } from '../../model/firebase';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomListItem from './custom_list_item';
import { Avatar, Icon } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { collection, onSnapshot } from 'firebase/firestore';

const ChatsScreen = () => {
    const [activeTab, setActiveTab] = useState('chat');
    const handleChangeTab = (tab) => {
        setActiveTab(tab);
        console.log(auth.currentUser);
    };

    const [chats, setChats] = useState([]);

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigationService.pushReplacement({ routeName: 'AuthScreen' });
        })
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'chats'), snapshot => {
            const chatsData = snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }));
            // Assuming setChats is a function that sets the state for chats
            setChats(chatsData);
        });

        return unsubscribe;
    }, [])

    const enterChat = (id, chatName) => {
        navigationService.push({ routeName: "Chat", params: { id: id, chatName: chatName, } });
    }

    return (
        <>
            <SafeAreaView edges={['top']} style={{ flex: 0, backgroundColor: 'lightblue' }} />
            <SafeAreaView edges={[]} style={{ flex: 1, width: '100%', flexDirection: 'column', backgroundColor: 'beige', justifyContent: 'flex-end' }} >
                <View style={[styles.topBar]}>
                    <View style={styles.titleContainer}>
                        <TouchableOpacity onPress={signOutUser}>
                            <Icon name='logout' color={'white'} size={28} style={{ paddingRight: 20, }} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Chats</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity>
                            <Icon name='camera' color={'white'} size={28} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigationService.push({ routeName: 'AddChat' })}>
                            <Icon name='chat' color={'white'} size={28} style={{ paddingHorizontal: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>


                <ScrollView style={{ height: '100%' }}>
                    {chats.map(({ id, data: { chatName } }) => (
                        <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />
                    ))}
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
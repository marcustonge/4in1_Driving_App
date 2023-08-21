import React from 'react'
import CustomBottomBar from '../navigation_bar/navigation_bar';
import { auth } from '../../model/firebase';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomListItem from './custom_list_item';
import { Avatar, Icon, Button } from '@rneui/base';
import { Input } from '@rneui/themed';

import { doc, setDoc, collection } from 'firebase/firestore';

import { db } from '../../model/firebase';
import TopBar from '../widgets/topbar';

const AddChatScreen = () => {

    const [input, setInput] = useState('');


    const createChat = async () => {

        const chatRef = doc(collection(db, 'chats'));
        await setDoc(chatRef, {
            chatName: input
        }
        ).then(() => {
            navigationService.pop();
        }).catch((error) => alert(error));
    }

    return (
        <>
            <SafeAreaView edges={['top']} style={{ flex: 0, backgroundColor: 'lightblue' }} />
            <SafeAreaView edges={[]} style={{ flex: 1, width: '100%', flexDirection: 'column', backgroundColor: 'beige', justifyContent: 'flex-start' }} >

                {/* Top Bar code */}
                <TopBar screenTitle={'Add Chat'} />

                {/* Other code here */}
                <View style={styles.container}>
                    <Input
                        placeholder='Enter a chat name'
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        leftIcon={
                            <Icon name='wechat' type='antdesign' size={28} />
                        }
                    />
                    <Button onPress={createChat} title='Create new Chat' />
                </View>

            </SafeAreaView>
        </>
    );
}

export default AddChatScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height: '100%'
    },
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
        color: 'white',
        paddingLeft: 20
    }
})
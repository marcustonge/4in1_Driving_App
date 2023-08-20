import React from 'react'
import CustomBottomBar from '../navigation_bar/navigation_bar';
import { auth } from '../../model/firebase';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomListItem from './custom_list_item';
import { Avatar, Icon, Button } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from '@rneui/themed';

import {db} from '../../model/firebase';

const AddChatScreen = () => {

    const [input, setInput] = useState('');


    const createChat = async () => {
        await db
    }

    return (
        <>
            <SafeAreaView edges={['top']} style={{ flex: 0, backgroundColor: 'lightblue' }} />
            <SafeAreaView edges={[]} style={{ flex: 1, width: '100%', flexDirection: 'column', backgroundColor: 'beige', justifyContent: 'flex-start' }} >

                {/* Top Bar code */}
                <View style={[styles.topBar]}>
                    <View style={styles.titleContainer}>
                        <TouchableOpacity onPress={() => navigationService.pop()} >
                            <Icon
                                name="arrow-back"
                                type="material"
                                size={28}
                                color={'white'}

                                containerStyle={styles.backIconContainer}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>Add Chat</Text>
                    </View>
                </View>

                {/* Other code here */}
                <View>
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
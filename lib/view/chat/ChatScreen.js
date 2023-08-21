import { KeyboardAvoidingView, StyleSheet, Text, Keyboard, View, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import IconTopBar from '../widgets/icontopbar'
import { useRoute } from '@react-navigation/native'
import { Avatar, Icon } from '@rneui/base'
import { SafeAreaView } from 'react-native-safe-area-context';

import { collection, doc, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

import { db, auth } from '../../model/firebase'

const ChatScreen = () => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const route = useRoute();

    const sendMessage = async () => {
        Keyboard.dismiss();
    
        const messageRef = collection(db, 'chats', route.params.id, 'messages');
        await addDoc(messageRef, {
            timestamp: serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL
        });
        
        setInput('');
    };

    useLayoutEffect(() => {
        const messageRef = collection(db, 'chats', route.params.id, 'messages');
        const messageQuery = query(messageRef, orderBy('timestamp', 'asc'));

        const unsubscribe = onSnapshot(messageQuery, (snapshot) => {
            setMessages(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });

        return () => unsubscribe(); // Cleanup function to unsubscribe from the snapshot listener
    }, [route]);


    return (
        <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: 'lightblue'}}>
        <View style={{ flex: 1 , backgroundColor: 'white'}}>

                <IconTopBar screenTitle={route.params.chatName} imgUri={''} />

                <View style={styles.container}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.container}
                        keyboardVerticalOffset={90}
                    >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                        <>
                            <ScrollView contentContainerStyle={styles.chatContainer}>
                                {/* The chat is going to be contained within here */}
                                {messages.map(({id, data}) => (
                                    data.email === auth.currentUser.email ? (
                                        
                                        <View key={id} style={styles.receiver}>
                                            {/* <Avatar 
                                            source={{
                                                uri: data.photoURL,
                                            }}
                                            /> */}
                                            <Text style={styles.receiverText}>{data.message}</Text>
                                        </View>
                                    ) : (
                                        <View key={id} style={styles.sender}>
                                            {/* <Avatar /> */}
                                            
                                            <Text style={styles.senderText}>{data.message}</Text>
                                        </View>
                                    )
                                ))}
                            </ScrollView>

                            <View style={styles.footer}>
                                <TextInput
                                    value={input}
                                    onChangeText={text => setInput(text)}
                                    placeholder="Enter your message"
                                    onSubmitEditing={sendMessage}
                                    style={styles.textInput}
                                    />
                                <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
                                    <Icon name="send" size={24} />
                                </TouchableOpacity>
                            </View>
                        </>
                                    </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between', // Ensures footer stays at the bottom
    },
    chatContainer: {
        flexGrow: 1, // Allows the ScrollView to take remaining space
        paddingTop: 10
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#ECECEC",
        borderColor: 'transparent',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    receiver: {
        padding: 15,
        backgroundColor: "#ECECEC",
        alignSelf: "flex-end",
        borderRadius: 20,
        marginRight: 10,
        marginBottom: 8,
        maxWidth: '80%',
        position: 'relative',
    },
    sender: {
        padding: 15,
        backgroundColor: "#2B68E6",
        alignSelf: "flex-start",
        borderRadius: 20,
        marginLeft: 10,
        marginBottom: 8,
        maxWidth: '80%',
        position: 'relative',
    },
    senderText: {
        color: "white",
        fontWeight: '500',
        paddingHorizontal: 10,
    },
    receiverText: {
        color: "black",
        fontWeight: '500',
    }
});

export default ChatScreen;
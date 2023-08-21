import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from "@rneui/base"
import { db } from '../../model/firebase';
import { collection, doc, query, orderBy, onSnapshot } from 'firebase/firestore';

const CustomListItem = ({ id, chatName, enterChat }) => {

  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const messageRef = collection(db, 'chats', id, 'messages');
    const messageQuery = query(messageRef, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(messageQuery, (snapshot) => {
      setChatMessages(
        snapshot.docs.map((doc) => doc.data())
      );
    });
    
    return () => unsubscribe(); // Cleanup function to unsubscribe from the snapshot listener
  }, [id]);

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      {/* <View style={{backgroundColor: 'beige', width: '100%', padding: 15, flex: 1, flexDirection: 'row', flexBasis: 'auto'}}> */}

      <Avatar size={50} rounded source={{ uri: 'https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg' }} />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800', fontSize: 20 }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
          {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
      {/* </View> */}

    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({

})
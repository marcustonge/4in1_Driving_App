import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ListItem, Avatar} from "@rneui/base"

const CustomListItem = () => {
  return (
    <ListItem>
        {/* <View style={{backgroundColor: 'beige', width: '100%', padding: 15, flex: 1, flexDirection: 'row', flexBasis: 'auto'}}> */}

        <Avatar size={50} rounded source={{uri: 'https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg'}} />
        <ListItem.Content>
            <ListItem.Title style={{fontWeight: '800', fontSize: 20}}>
                text
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                dnsfklandflknaskldf naklsndfasndfjkl nasjkd akjsdfn kasdj
            </ListItem.Subtitle>
        </ListItem.Content>
        {/* </View> */}
        
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({
    
})
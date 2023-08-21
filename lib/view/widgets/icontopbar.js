import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Icon, Button } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IconTopBar = ({ screenTitle }) => {
    return (
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
                <Avatar
                    size={40}
                    avatarStyle={{alignSelf: 'center', flex:0, flexDirection: 'column', justifyContent: 'center'}}
                    rounded
                    source={{ uri: 'https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg' }}
                />

                <Text style={styles.title}>{screenTitle}</Text>
            </View>
        </View>
    )
}

export default IconTopBar

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 9.5
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
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Icon, Button } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TopBar = ({screenTitle}) => {
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
                <Text style={styles.title}>{screenTitle}</Text>
            </View>
        </View>
    )
}

export default TopBar

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
import React, { useEffect, useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../../model/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const AuthScreen = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleToggleForm = () => {
        setShowLogin(!showLogin);
        setEmail('');
        setPassword('');
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser){
                navigationService.pushReplacement({routeName: "Chats"});
            }
        });

        return unsubscribe;
    }, []);

    const handleBackPress = () => {
        navigationService.pushReplacement({ routeName: 'Home' })
    };

    const handleLogin = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleRegister = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
                .then(async (authUser) => {
                    console.log("AuthuserObject: " + authUser);
                    authUser.user.displayName = name;
                    authUser.user.photoURL = imageUrl != '' ? imageUrl : 'https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg';
                    await auth.updateCurrentUser();
                }
                )
        } catch (error) {
            alert(error.message);
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>

                    <Icon
                        name="arrow-back"
                        type="material"
                        size={40}
                        color={'black'}
                        onPress={handleBackPress}
                    />

                </View>
                <View style={styles.contentContainer}>
                    <Text style={{ fontSize: 24 }}>Sign in to Chat</Text>
                    <Image source={showLogin ? require('../../../assets/login.jpg') : require('../../../assets/register.jpg')} style={styles.image} />
                    <View style={styles.formContainer}>
                        {!showLogin ? (
                            <TextInput
                                style={styles.input}
                                placeholder="Full Name"
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />
                        ) : (<></>)}
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        {!showLogin ? (
                            <TextInput
                                style={styles.input}
                                placeholder="Profile Picture URL (optional)"
                                value={imageUrl}
                                onChangeText={(text) => setImageUrl(text)}
                            />
                        ) : (<></>)}
                        <TouchableOpacity style={styles.button} onPress={showLogin ? handleLogin : handleRegister}>
                            <Text style={styles.buttonText}>{showLogin ? 'Login' : 'Register'}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.toggleButton} onPress={handleToggleForm}>
                        <Text style={styles.toggleButtonText}>
                            {showLogin ? 'Register instead' : 'Login instead'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // Aligns the icon and content horizontally
        alignItems: 'flex-start', // Aligns the icon to the top
        paddingTop: 20, // Add some top padding to give space for the icon
    },
    iconContainer: {
        paddingHorizontal: 20, // Add some horizontal padding for the icon
    },
    contentContainer: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        paddingHorizontal: 20,
    },
    formContainer: {
        width: 300,
        alignItems: 'center', // Center horizontally
        marginBottom: 20,
    },
    image: {
        width: 400,
        height: 400,
    },
    input: {
        width: 275,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: 'purple',
        paddingVertical: 15,
        paddingHorizontal: 25,
        width: '80%',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    toggleButton: {
        marginTop: 10,
    },
    toggleButtonText: {
        color: 'blue',
    },
});

export default AuthScreen;

import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SAULogo = () => (
    <Image source={require('../assets/iconsau.png')} style={styles.sauLogo} />
);

const PUCLogo = () => (
    <Image source={require('../assets/puclogo.png')} style={styles.pucLogo} />
);

const winWidth = Dimensions.get('window').width
const winHeight = Dimensions.get('window').height


const EntryView = () => {
    const navigation = useNavigation();
    
    const goToLogin = () => {
        navigation.navigate('LoginView')
    };

    return (
        <View style={styles.parentContainer}>
            <View style={styles.topContainer}>
                <SAULogo/>
                <PUCLogo/>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.welcomeLabel}>
                    Bem-vindo ao SAU!
                </Text>
                <Text style={styles.subtitleLabel}>
                    O Sistema Acadêmico Universitário da PUC - RIO
                </Text>
                <Pressable style={styles.studentButton} onPress={goToLogin}>
                    <Text style={styles.studentBtnLabel}>
                        Sou estudante
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
    },
    topContainer: {
      flex: 2,
      backgroundColor: '#273F61',
    },

    bottomContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    sauLogo: {
        width: 360,
        height: 360,
        alignSelf: 'center',
    },
    pucLogo: {
        width: 80,
        height: 100,
        alignSelf: 'center',
    },

    welcomeLabel: {
        paddingTop: 40,
        color: '#273F61',
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
    },
    subtitleLabel: {
        alignSelf: 'center',
        fontSize: 14,
        color: '#273F61',
        fontWeight: 'light'
    },
    studentButton: {
        alignItems: 'center',
        backgroundColor: '#273F61',
        paddingVertical: 20,
        marginVertical: 40,
        marginHorizontal: 20,
        borderRadius: 12,
    },
    studentBtnLabel: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
});


export { EntryView }
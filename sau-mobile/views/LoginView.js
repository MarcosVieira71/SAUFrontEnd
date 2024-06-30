import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, Button, Pressable, Alert } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { WebView, Linking } from 'react-native';

const SAULogo = () => (
    <Image source={require('../assets/iconsau.png')} style={styles.sauLogo} />
);

const PUCLogo = () => (
    <Image source={require('../assets/puclogo.png')} style={styles.pucLogo} />
);

// gerar hash depois de sessao=
const generatePasswordURL = 'https://sau.puc-rio.br/WebGerarSenha/Default.aspx?sessao=VmluY3Vsbz1BJlNpc3RMb2dpbj1QVUNPTkxJ';

const LoginView = () => {
    const navigation = useNavigation();
    let [username, setUsername] = React.useState('');
    let [password, setPassword] = React.useState('');

    let makeLogin = (username, password) => {
        fetch(`http://192.168.0.10:8000/api/v1/auth/login?username=${username}&password=${password}`)
        .then(res => {
            console.log("YES:", res.status);
            console.log("header:", res.headers);
            return res.text();
        })
        .then(
            (result) => {
                //&lt;b&gt;Caio&lt;/b&gt; (&lt;b&gt;1921050&lt;/b&gt;)
                //Boa tarde &lt;Caio&lt;/ (&lt;1921050&lt;/)
                let r = result.replace(/<[^>]+>/g, '').replace(/b&[^;]+;/g, '').replace(/&[^;]+;/g, '')
                getloginData = r;
                console.log(getloginData);
                return r;
            },
            (error) => {
                console.log(">>>>>>", error);
            }
        )
    };

    const routeTo = (username, name, navigation) => {
        makeLogin(username, password);
        if (getloginData.includes('Boa') || getloginData.includes('Bom')) {
            navigation.navigate("Home", { data: getloginData});
        }
    }

    return (
        <View style={styles.parentContainer}>
            <View style={styles.topContainer}>
                <SAULogo/>
            </View>
            <View style={styles.bottomContainer}>
                <TextInput style={styles.input} 
                            value={username}
                            onChangeText={(value) => setUsername(value)}
                            placeholder='Matricula'
                            keyboardType='number-pad'
                            />
                <TextInput style={styles.input} 
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            placeholder='Senha'
                           />
                <Pressable style={styles.studentButton} onPress={() => routeTo(username, password, navigation)}>
                    <Text style={styles.studentBtnLabel}>
                        Entrar
                    </Text>
                </Pressable>
                <Text style={styles.rememberLabel}>
                    Lembrar minha senha
                </Text>
                <Text style={styles.forgetLabel}
                    onPress={() => Linking.openURL(generatePasswordURL)}>
                    Esqueceu a senha?
                </Text>
                <Pressable style={styles.registerButton} 
                onPress={() => Linking.openURL(generatePasswordURL)} >
                    <Text style={styles.registerBtnLabel}>
                        Cadastrar primeira senha
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
      flex: 1.2,
      backgroundColor: '#273F61',
    },

    bottomContainer: {
        flex: 3,
        backgroundColor: 'white',
    },
    sauLogo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    },

    input: 
    {
        backgroundColor: '#D2D2D2',
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 10,
    },

    forgetLabel: {
        paddingTop: 40,
        color: '#273F61',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
    },
    rememberLabel: {
        alignSelf: 'left',
        marginHorizontal: 60,
        fontSize: 16,
        color: '#273F61',
        fontWeight: 'light'
    },
    studentButton: {
        alignItems: 'center',
        backgroundColor: '#273F61',
        paddingVertical: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 12,
    },
    studentBtnLabel: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    registerButton: {
        marginTop: 100,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#273F61'
    },
    registerBtnLabel: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#273F61',
        fontWeight: 'bold'
    }
});


export { LoginView }
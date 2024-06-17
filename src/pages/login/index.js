import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet } from 'react-native';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = () => {
        console.log(username, password);
        console.log("Envio");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SAU PUC-RIO</Text>
            <Text style={styles.subtitle}>SISTEMA ACADÊMICO UNIVERSITARIO</Text>
            <View style={styles.inputContainer}>
                <FaUser style={styles.icon} />
                <TextInput
                    style={styles.inputField}
                    placeholder='Número de Matrícula'
                    placeholderTextColor="#fff"
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputField}
                    placeholder='Senha'
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <FaLock style={styles.icon} />
            </View>
            <View style={styles.recallForget}>
                <View style={styles.rememberMeContainer}>
                    <CheckBox
                        value={rememberMe}
                        onValueChange={setRememberMe}
                    />
                    <Text style={styles.label}>Lembrar de mim</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.link}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupLink}>
                <Text style={styles.link}>Criar minha primeira senha</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 450,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255,255,255,0.2)',
        borderWidth: 2,
        padding: 40,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#F0B92A',
        fontSize: 50,
    },
    subtitle: {
        textAlign: 'center',
        color: '#F0B92A',
        marginTop: 10,
        fontSize: 15,
    },
    inputContainer: {
        position: 'relative',
        width: '100%',
        height: 50,
        marginVertical: 30,
    },
    inputField: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
        fontSize: 16,
        paddingHorizontal: 45,
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 2,
    },
    icon: {
        position: 'absolute',
        left: 20,
        top: 15,
    },
    recallForget: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: 14.5,
        marginVertical: -15,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        color: '#fff',
    },
    link: {
        color: '#fff',
        textDecorationLine: 'none',
        transitionDuration: '0.4s',
    },
    linkHover: {
        color: '#F0B92A',
        textDecorationLine: 'underline',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(255, 255, 255, 0.15)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 1,
        transitionDuration: '0.4s',
    },
    buttonHover: {
        backgroundColor: '#F0B92A',
    },
    buttonText: {
        color: '#000',
    },
    signupLink: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20,
    },
});

export default Login;
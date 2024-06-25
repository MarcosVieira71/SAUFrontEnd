import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator, Button, Pressable, Alert } from 'react-native';
import { Link, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { WebView, Linking } from 'react-native';
import sleep from 'sleep-promise';

const LoadingView = () => {

    
    const route = useRoute()
    const navigation = useNavigation();

    const username = route.params.username
    const password = route.params.password

    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();
    const getData = () => {
        fetch(`http://192.168.0.10:8000/api/v1/auth/login?username=1921050&password=962Bruto`)
            .then(res => res.text())
            .then((text) => setResponse(text))
            .catch((error) => setError(error))
            .then(sleep(4000))
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        setIsLoading(true);
        getData();
    }, [])

    if (isLoading)
    {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large'/>
            </View>
          );
    } else {
        if (response.includes("SUCESS LOGIN"))
        {
            navigation.navigate("Home", { response: response });
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoadingView;

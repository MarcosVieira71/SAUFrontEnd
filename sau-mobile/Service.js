import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";

const apiTestURL = "https://api.coindesk.com/v1/bpi/currentprice.json"
const apiLoginURL = "http://127.0.0.1:8000/api/v1/auth/login"

let getloginData = ""

const Service = () => {

    let [username, setUsername] = useState("");

    let makeLogin = (username) => {
        fetch(`http://192.168.0.10:8000/api/v1/auth/login?username=${username}&password=thelonel`)
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

    return (
        <View style={styles.parentContainer}>
            <TextInput placeholder='USERNAME:' value={username} onChangeText={(value) => setUsername(value)}></TextInput>
            <Button title="POST" onPress={() => makeLogin(username)}>ENTRAR</Button>
            <Text>{getloginData}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { Service }
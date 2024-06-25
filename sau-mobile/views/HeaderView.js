import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, Button, Pressable } from 'react-native';
import { HeaderImage } from '../commons/utils.js';

const openLateralMenu = () => false

export class HeaderView extends React.Component {
    render() {
        return (
            <View style={styles.containerHeader}>
                <HeaderImage/>
            </View>
        );
    }
}

export class ImgHeader extends React.Component {
    render() {
        return (
            <View style={styles.containerImg}>
                <HeaderImage/>
            </View>
        );
    }
}

export class ButtonHeader extends React.Component {
    render() {
        return (
            <View style={styles.containerBtn}>
                <Button
                    onPress={openLateralMenu}
                    title="..."
                    color='red'
                Button/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerHeader: {
        flex: 0.1,
        backgroundColor: '#3A5983',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
    },

    containerImg: {
        alignSelf: 'center',
    },
  });
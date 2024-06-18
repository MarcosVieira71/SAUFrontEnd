import React from 'react';
import { GridHome } from './GridView';
import { HeaderView } from './HeaderView';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';


export default class MainView extends React.Component {
    render () {
        return (
            <View style={styles.backgroundView}>
                <HeaderView/>
                <GridHome/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundView: {
        flex: 1,
        backgroundColor: '#273f61',
        marginVertical: 30
      },
  });
  
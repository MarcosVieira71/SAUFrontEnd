
import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';

export class AbsenseView extends React.Component {
    render() {
        return (
            <View style={styles.backgroundView}>
                <HeaderView/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundView: {
        flex: 1,
        backgroundColor: '#273f61',
        marginVertical: 30
      },
  });
  
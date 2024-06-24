import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import MainView from './views/MainView';
import Absence from './views/SubjectsView';
import Subjects from './views/SubjectsView';

const Stack = createStackNavigator();

export default class App extends React.Component {
    render () {
        return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName ="Home">
                <Stack.Screen name="Home" component={MainView} options ={{headerShown: false}}/>
                <Stack.Screen name="Subjects" component={Subjects}/>
            </Stack.Navigator>
        </NavigationContainer>
        );
    }
}
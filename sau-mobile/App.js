import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import MainView from './views/MainView';
import Absence from './views/SubjectsView';
import Subjects from './views/SubjectsView';
import { EntryView } from './views/EntryView';
import GridHome from './views/GridView';
import { LoginView } from './views/LoginView';
import { ClassesView } from './views/ClassesView';
import { Service } from './Service';
import LoadingView from './views/LoadingView';

const Stack = createStackNavigator();
console.disableYellowBox = true; // desativa os warnings no expo

export default class App extends React.Component {
    render () {
        return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName ="EntryView">
                <Stack.Screen name="EntryView" component={EntryView} options ={{headerShown: false}}/>
                <Stack.Screen name="LoginView" component={LoginView} options ={{headerShown: true}}/>
                <Stack.Screen name="Loading" component={LoadingView} options ={{headerShown: false}}/>
                <Stack.Screen name="Home" component={GridHome} options ={{headerShown: false}}/>
                <Stack.Screen name="Classes" component={ClassesView}/>
                <Stack.Screen name="Subjects" component={Subjects}/>
            </Stack.Navigator>
        </NavigationContainer>
        );
    }
}
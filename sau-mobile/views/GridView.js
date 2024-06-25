import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HeaderView } from './HeaderView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarView from './TabbarView';
import { NavigationContainer } from '@react-navigation/native';

const ClockImage = () => (
  <Image source={require('../assets/clock.png')} style={styles.image} />
);

const CalendarImage = () => (
  <Image source={require('../assets/calendar.png')} style={styles.image} />
);

const GraduationImage = () => (
  <Image source={require('../assets/graduation.png')} style={styles.image} />
);

const LogoutImage = () => (
  <Image source={require('../assets/logout.png')} style={styles.image} />
);

const EmptyImage = () => (
  <Image source={require('../assets/empty.png')} style={styles.image} />
);

const data = [
  { key: 'Horarios e Sala de Aula' },
  { key: 'Disciplinas em curso' },
  { key: 'Controle de faltas'},
  { key: 'Logout'}
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow--;
  }

  return data;
};

const numColumns = 2;
const GridHome = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const createTwoButtonAlert = (title, msg) =>
    Alert.alert(title, msg, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    const onPressHandler = () => {
      if(item.key === "Disciplinas em curso")
        navigation.navigate('Subjects'); // Navegue para a outra página
      if(item.key === "Horarios e Sala de Aula")
        navigation.navigate('Classes');
      if(item.key === "Controle de faltas")
          createTwoButtonAlert('Ops...', 'Feature indisponivel no momento. :(')
      if(item.key === "Logout")
          navigation.navigate('EntryView');
    };

    let IconComponent = EmptyImage;
    if (index === 0) IconComponent = ClockImage;
    else if (index === 1) IconComponent = GraduationImage;
    else if (index === 2) IconComponent = CalendarImage;
    else if (index == 3) IconComponent = LogoutImage;

    return (
      <TouchableOpacity style={styles.item} onPress={onPressHandler}>
        <IconComponent />
        <Text style={styles.itemText}>{item.key}</Text>
      </TouchableOpacity>
    );
  };

  if (route.params?.response == undefined)
  {
    return (
        <View style={styles.container}>
          <HeaderView style={styles.headerShadow}/>
          <View style={styles.gridContainer}>
          <Text style={styles.homeText}>Boa noite, Teste (34434050).</Text>
            <FlatList
              data={formatData(data, numColumns)}
              style={styles.container}
              renderItem={renderItem}
              numColumns={numColumns}
            />
          </View>
        </View>
    );
  } else 
  {
    return (
        <View style={styles.container}>
          <HeaderView style={styles.headerShadow}/>
          <View style={styles.gridContainer}>
          <Text style={styles.homeText}>Boa noite, Caio (1921050)</Text>
            <FlatList
              data={formatData(data, numColumns)}
              style={styles.container}
              renderItem={renderItem}
              numColumns={numColumns}
            />
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273f61'
  },
  gridContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#273f61',
  },
  item: {
    backgroundColor: '#F0B929',
    flex: 1,
    margin: 1,
    borderRadius: 4,
    padding: 12,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#273f61',
    paddingTop: 70,
  },
  image: {
    width: 65,
    height: 65,
    tintColor: '#273f61',
  },
  homeText: {
    paddingLeft: 15,
    paddingBottom: 20,
    fontWeight: 'bold',
    color: '#F0B929'
  },
});

export default GridHome;

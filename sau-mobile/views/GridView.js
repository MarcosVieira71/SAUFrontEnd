import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClockImage = () => (
  <Image source={require('../assets/clock.png')} style={styles.image} />
);

const CalendarImage = () => (
  <Image source={require('../assets/calendar.png')} style={styles.image} />
);

const GraduationImage = () => (
  <Image source={require('../assets/graduation.png')} style={styles.image} />
);

const EmptyImage = () => (
  <Image source={require('../assets/empty.png')} style={styles.image} />
);

const data = [
  { key: 'Horarios e Sala de Aula' },
  { key: 'Disciplinas em curso' },
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

  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    const onPressHandler = () => {
      if(item.key === "Disciplinas em curso")
      navigation.navigate('Subjects'); // Navegue para a outra página
    };

    let IconComponent = EmptyImage;
    if (index === 0) IconComponent = ClockImage;
    else if (index === 1) IconComponent = GraduationImage;
    else if (index === 2) IconComponent = CalendarImage;

    return (
      <TouchableOpacity style={styles.item} onPress={onPressHandler}>
        <IconComponent />
        <Text style={styles.itemText}>{item.key}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={formatData(data, numColumns)}
      style={styles.container}
      renderItem={renderItem}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 8,
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
    paddingTop: 10,
  },
  image: {
    width: 70,
    height: 70,
    tintColor: '#273f61',
  },
});

export { GridHome };

import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { Image } from 'react-native'

const ClockImage = () => (
  <Image source={ require('../assets/clock.png')}
      style = {{ width: 70, 
      height: 70, 
      tintColor: '#273f61'

      }}
  />
)

const CalendarImage = () => (
  <Image source={ require('../assets/calendar.png')}
      style = {{ width: 70, 
      height: 70, 
      tintColor: '#273f61'

      }}
  />
)

const GradutationImage = () => (
  <Image source={ require('../assets/graduation.png')}
      style = {{ width: 72, 
      height: 72, 
      tintColor: '#273f61'
      }}
  />
)

const EmptyImage = () => (
  <Image source={ require('../assets/empty.png')}
      style = {{ width: 72, 
      height: 72, 
      tintColor: '#273f61'
      }}
  />
)
const data = [
  { key: 'Horarios e Sala de Aula' }, 
  { key: 'Controle de faltas' }, 
  { key: 'Disciplinas em curso' }, 
  { key: 'Title 1' }, 
  { key: 'Title 2' }, 
  { key: 'Title 3' }

];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow--;
  }

  for(i in data) {
    if (i.index == 0) {
      console.log("a");
    }
  }

  return data;
};

const numColumns = 2;
export class GridHome extends React.Component {
  renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
      <View style={[styles.item]}>
              <ClockImage/>
              <Text style={styles.itemText}>{item.key}</Text>
      </View>
      );
    } else if (index == 1) {
      return (
        <View style={[styles.item]}>
                <GradutationImage/>
                <Text style={styles.itemText}>{item.key}</Text>
        </View>
        );
    }

    else if (index == 2) {
      return (
        <View style={[styles.item]}>
                <CalendarImage/>
                <Text style={styles.itemText}>{item.key}</Text>
        </View>
        );
    } else {
      return (
        <View style={styles.item}>
          <EmptyImage/>
          <Text style={styles.itemText}>{item.key}</Text>
        </View>
      );
    }
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 8
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
    flexDirection: 'column-reverse',
    alignSelf: 'flex-start',
    color: '#273f61',
    paddingTop: 70,
  },
});
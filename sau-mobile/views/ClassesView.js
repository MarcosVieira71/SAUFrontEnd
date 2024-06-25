import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ClassesView() {
  const hours = ['07 - 08', '08 - 09', '09 - 10', '10 - 11', '11 - 12', '12 - 13', '13 - 14', '14 - 15'];
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const schedule = [
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="black" />
        <View style={styles.headerCenter}>
          <View style={styles.headerImagePlaceholder} />
        </View>
        <Ionicons name="arrow-back" size={24} color="black" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Horários e Salas de Aula</Text>
        <Text style={styles.semester}>Semestre: 2024.1</Text>
        <ScrollView horizontal={true} style={styles.scheduleTable}>
          <View>
            <View style={styles.tableRow}>
              <View style={styles.tableHeaderHour} />
              {days.map((day, index) => (
                <Text key={index} style={styles.tableHeader}>{day}</Text>
              ))}
            </View>
            {hours.map((hour, rowIndex) => (
              <View style={styles.tableRow} key={rowIndex}>
                <Text style={styles.tableHour}>{hour}</Text>
                {schedule[rowIndex].map((subject, colIndex) => (
                  <Text key={colIndex} style={styles.tableCell}>{subject}</Text>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Disciplinas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerImagePlaceholder: {
    width: 30,
    height: 30,
    backgroundColor: '#ddd',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  semester: {
    fontSize: 16,
    marginBottom: 20,
  },
  scheduleTable: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeaderHour: {
    width: 70, 
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableHour: {
    width: 70,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f0f0f0',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});

export {ClassesView}
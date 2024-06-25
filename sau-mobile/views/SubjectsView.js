import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderView, ImgHeader, ButtonHeader } from './HeaderView'; 

const Subjects = () => {
  const semester = "2024.1"; 

  return (
    <View style={styles.container}>
      <HeaderView />
      <View style={styles.headerContent}>
        <Text style={styles.title}>Disciplinas em Curso</Text>
        <Text style={styles.semester}>Semestre: {semester}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.cell, styles.headerCell]}>Código</Text>
            <Text style={[styles.cell, styles.headerCell]}>Nome</Text>
            <Text style={[styles.cell, styles.headerCell]}>Créditos</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>INF1037</Text>
            <Text style={styles.cell}>Programação em C</Text>
            <Text style={styles.cell}>4</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>MAT4161</Text>
            <Text style={styles.cell}>Cálculo A Uma Variável</Text>
            <Text style={styles.cell}>6</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>MAT4200</Text>
            <Text style={styles.cell}>Algebra Linear I</Text>
            <Text style={styles.cell}>4</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>INF1039</Text>
            <Text style={styles.cell}>PROJETOS: APLICA INTERATIVAS</Text>
            <Text style={styles.cell}>4</Text>
          </View>
        </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273f61',
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0B929', 
  },
  semester: {
    fontSize: 16,
    color: '#F0B929',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  table: {
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#F0B929',
    paddingVertical: 10,
  },
  headerCell: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#F0B929'
  },
});

export default Subjects;

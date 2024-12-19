import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Section from './components/Section';
import Piano from './components/Piano';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Piano Virtual 🎹" />
      <Section title="Funcionalidades básicas">
        <Piano />
      </Section>
      <Section title="Uso de componentes reutilizables">
        <View style={styles.infoBox}>
          <Text>Las teclas están implementadas como componentes reutilizables.</Text>
        </View>
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  infoBox: {
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
  },
});

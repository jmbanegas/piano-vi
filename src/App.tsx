import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Piano from './src/components/Piano'; // Ajusta la ruta según tu estructura

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>¡Piano Vertical!</Text>
      </View>
      <Piano />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;

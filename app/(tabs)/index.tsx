import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Piano from '../../src/components/Piano'; 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>¡Bienvenido a Piano-VI!</Text>
        <Piano />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D2B48C',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;

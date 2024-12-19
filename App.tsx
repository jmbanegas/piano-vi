import React from 'react';
import { View, StyleSheet } from 'react-native';
import PianoKey from './src/components/PianoKey';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.piano}>
        <PianoKey note="C" soundFile="./assets/sounds/do.mp3" color="#fff" />
        <PianoKey note="D" soundFile="./assets/sounds/re.mp3" color="#fff" />
        <PianoKey note="E" soundFile="./assets/sounds/mi.mp3" color="#fff" />
        <PianoKey note="F" soundFile="./assets/sounds/fa.mp3" color="#fff" />
        <PianoKey note="G" soundFile="./assets/sounds/sol.mp3" color="#fff" />
        <PianoKey note="A" soundFile="./assets/sounds/la.mp3" color="#fff" />
        <PianoKey note="B" soundFile="./assets/sounds/si.mp3" color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  piano: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: 200,
  },
});

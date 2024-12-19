import React from 'react';
import { View, StyleSheet } from 'react-native';
import PianoKey from '../../src/components/PianoKey';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.piano}>
        <PianoKey note="C" soundFile="do.mp3" color="#fff" />
        <PianoKey note="D" soundFile="re.mp3" color="#fff" />
        <PianoKey note="E" soundFile="mi.mp3" color="#fff" />
        <PianoKey note="F" soundFile="fa.mp3" color="#fff" />
        <PianoKey note="G" soundFile="sol.mp3" color="#fff" />
        <PianoKey note="A" soundFile="la.mp3" color="#fff" />
        <PianoKey note="B" soundFile="si.mp3" color="#fff" />
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

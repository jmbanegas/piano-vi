import React from 'react';
import { View, StyleSheet } from 'react-native';
import PianoKey from './PianoKey';

const notes = [
  { note: 'C', soundFile: 'do.mp3', color: '#fff' },
  { note: 'D', soundFile: 're.mp3', color: '#fff' },
  { note: 'E', soundFile: 'mi.mp3', color: '#fff' },
  { note: 'F', soundFile: 'fa.mp3', color: '#fff' },
  { note: 'G', soundFile: 'sol.mp3', color: '#fff' },
  { note: 'A', soundFile: 'la.mp3', color: '#fff' },
  { note: 'B', soundFile: 'si.mp3', color: '#fff' },
];

export default function Piano() {
  return (
    <View style={styles.piano}>
      {notes.map((note, index) => (
        <PianoKey
          key={index}
          note={note.note}
          soundFile={note.soundFile}
          color={note.color}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  piano: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 10,
  },
});

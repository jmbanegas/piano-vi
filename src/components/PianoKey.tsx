import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

interface PianoKeyProps {
  note: string;
  soundFile: string;
  color: string;
}

export default function PianoKey({ note, soundFile, color }: PianoKeyProps) {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require(`../assets/${soundFile}`));
    await sound.playAsync();
  };

  return (
    <TouchableOpacity style={[styles.key, { backgroundColor: color }]} onPress={playSound}>
      <Text style={styles.note}>{note}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  key: {
    width: 40,
    height: 120,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
  },
  note: {
    color: '#000',
    fontWeight: 'bold',
  },
});

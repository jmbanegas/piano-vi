import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import soundMap from '../assets/sounds'; 


const notes = [
  { note: 'do', label: 'DO' },
  { note: 're', label: 'RE' },
  { note: 'mi', label: 'MI' },
  { note: 'fa', label: 'FA' },
  { note: 'sol', label: 'SOL' },
  { note: 'la', label: 'LA' },
  { note: 'si', label: 'SI' },
];

const blackKeyPositions = [
  0, 
  1, 
  null, 
  3, 
  4, 
  5, 
];

const Piano = () => {

  const playNote = async (note: string) => {
    try {
      const soundFile = soundMap[note];
      if (!soundFile) {
        console.error(`El archivo de sonido para la nota "${note}" no existe.`);
        return;
      }
      const { sound } = await Audio.Sound.createAsync(soundFile);
      await sound.playAsync();
    } catch (error) {
      console.error(`Error al reproducir la nota "${note}":`, error);
    }
  };

  return (
    <View style={styles.pianoContainer}>
      {/* Teclas blancas */}
      <View style={styles.whiteKeys}>
        {notes.map((key, index) => (
          <TouchableOpacity
            key={index}
            style={styles.whiteKey}
            onPress={() => playNote(key.note)}
          >
            <View style={styles.labelContainer}>
              <Text style={styles.noteLabel}>{key.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Teclas negras (decorativas) */}
      <View style={styles.blackKeys}>
        {blackKeyPositions.map((position, index) =>
          position !== null ? (
            <View
              key={index}
              style={[
                styles.blackKey,
                { top: `${position * 14.28 + 7}%` }, 
              ]}
            />
          ) : (
            <View key={index} style={{ height: '14.28%' }} /> 
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pianoContainer: {
    width: Dimensions.get('window').width * 0.5, 
    height: Dimensions.get('window').height * 0.8,
    flexDirection: 'row', 
    backgroundColor: '#f5f5f5',
    marginVertical: 20,
    position: 'relative',
  },
  whiteKeys: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
  },
  whiteKey: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'flex-start', 
    backgroundColor: '#fff',
    paddingHorizontal: 5, 
  },
  labelContainer: {
    position: 'absolute',
    bottom: 5, 
    left: 10, 
  },
  noteLabel: {
    fontSize: Dimensions.get('window').width * 0.04, 
    fontWeight: 'bold',
    color: '#000',
  },
  blackKeys: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    zIndex: 2,
    left: '50%', 
  },
  blackKey: {
    position: 'absolute',
    width: '100%',
    height: '10%', 
    backgroundColor: '#000',
    borderRadius: 3,
  },
});

export default Piano;

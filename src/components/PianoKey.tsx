import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import soundMap from '../assets/sounds'; // Asegúrate de que sounds.ts esté correctamente configurado

// Notas disponibles
const notes = [
  { note: 'do', label: 'DO' },
  { note: 're', label: 'RE' },
  { note: 'mi', label: 'MI' },
  { note: 'fa', label: 'FA' },
  { note: 'sol', label: 'SOL' },
  { note: 'la', label: 'LA' },
  { note: 'si', label: 'SI' },
];

// Coordenadas para las teclas negras (solo diseño)
const blackKeyPositions = [
  0, // do#
  1, // re#
  null, // No hay tecla negra entre mi y fa
  3, // fa#
  4, // sol#
  5, // la#
];

const Piano = () => {
  // Función para reproducir una nota
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
            <Text style={styles.noteLabel}>{key.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Teclas negras (solo diseño) */}
      <View style={styles.blackKeys}>
        {blackKeyPositions.map((position, index) =>
          position !== null ? (
            <View
              key={index}
              style={[
                styles.blackKey,
                { left: `${position * 14.28 + 7}%` }, // Ajuste de posición entre las teclas blancas
              ]}
            />
          ) : (
            <View key={index} style={{ width: '14.28%' }} /> // Espaciado para teclas negras faltantes
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pianoContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.3, // Ajuste dinámico para dispositivos más pequeños
    position: 'relative',
    backgroundColor: '#f0f0f0',
  },
  whiteKeys: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  whiteKey: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 0.5,
  },
  noteLabel: {
    fontSize: Dimensions.get('window').width * 0.03, // Texto dinámico
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  blackKeys: {
    position: 'absolute',
    width: '100%',
    height: '60%', // Las teclas negras son más cortas
    flexDirection: 'row',
    zIndex: 2,
  },
  blackKey: {
    position: 'absolute',
    width: '10%',
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 3,
  },
});

export default Piano;

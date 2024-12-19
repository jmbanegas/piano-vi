import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import soundMap from '../assets/sounds'; // Asegúrate de que sounds.ts esté configurado correctamente

// Notas disponibles (blancas)
const notes = [
  { note: 'do', label: 'DO' },
  { note: 're', label: 'RE' },
  { note: 'mi', label: 'MI' },
  { note: 'fa', label: 'FA' },
  { note: 'sol', label: 'SOL' },
  { note: 'la', label: 'LA' },
  { note: 'si', label: 'SI' },
];

// Posiciones relativas de las teclas negras
const blackKeyPositions = [
  0, // do#
  1, // re#
  null, // No hay tecla negra entre mi y fa
  3, // fa#
  4, // sol#
  5, // la#
];

const Piano = () => {
  // Función para reproducir el sonido de las teclas blancas
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
                { top: `${position * 14.28 + 7}%` }, // Posición vertical de las teclas negras
              ]}
            />
          ) : (
            <View key={index} style={{ height: '14.28%' }} /> // Espacio para teclas negras faltantes
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pianoContainer: {
    width: Dimensions.get('window').width * 0.5, // Más estrecho para orientación vertical
    height: Dimensions.get('window').height * 0.8, // Abarca la mayor parte del alto
    flexDirection: 'row', // Organiza teclas blancas y negras en columnas
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
    alignItems: 'flex-start', // Alinea el texto a la izquierda
    backgroundColor: '#fff',
    paddingHorizontal: 5, // Espaciado para texto
  },
  labelContainer: {
    position: 'absolute',
    bottom: 5, // Coloca el texto cerca del borde inferior
    left: 10, // Alinea el texto más a la izquierda
  },
  noteLabel: {
    fontSize: Dimensions.get('window').width * 0.04, // Texto proporcional al ancho
    fontWeight: 'bold',
    color: '#000',
  },
  blackKeys: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    zIndex: 2,
    left: '50%', // Coloca las teclas negras en la derecha
  },
  blackKey: {
    position: 'absolute',
    width: '100%',
    height: '10%', // Tamaño proporcional de las teclas negras
    backgroundColor: '#000',
    borderRadius: 3,
  },
});

export default Piano;

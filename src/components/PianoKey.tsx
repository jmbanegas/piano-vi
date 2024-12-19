import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

interface PianoKeyProps {
  note: string; // Nota musical (e.g., "do", "re")
  isBlack: boolean; // Indica si la tecla es negra o blanca
  onPress: (note: string) => void; // Función para reproducir el sonido
}

const PianoKey: React.FC<PianoKeyProps> = ({ note, isBlack, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.key, isBlack ? styles.blackKey : styles.whiteKey]}
      onPress={() => onPress(note)}
    >
      {!isBlack && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{note.toUpperCase()}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  key: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  whiteKey: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  blackKey: {
    backgroundColor: '#000',
    width: '70%', // Más estrechas que las teclas blancas
    height: '70%', // Más cortas que las teclas blancas
    position: 'absolute',
  },
  labelContainer: {
    position: 'absolute',
    bottom: 5, // Coloca el texto cerca del borde inferior
    left: 10, // Desplaza el texto hacia la izquierda
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PianoKey;

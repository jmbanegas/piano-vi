import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  // Estilo global para el contenedor principal
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4', // Fondo claro
  },
  // Títulos principales
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007acc', // Azul
    textAlign: 'center',
    marginBottom: 10,
  },
  // Texto general
  text: {
    fontSize: 16,
    color: '#333', // Gris oscuro
    lineHeight: 22,
  },
  // Botones
  button: {
    backgroundColor: '#007acc', // Azul
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff', // Blanco
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Estilo de sección
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff', // Fondo blanco
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007acc', // Azul
  },
});

export default globalStyles;

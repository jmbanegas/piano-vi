import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
 
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D2B48C', 
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007acc', 
    textAlign: 'center',
    marginBottom: 10,
  },
  
  text: {
    fontSize: 16,
    color: '#333', 
    lineHeight: 22,
  },
  
  button: {
    backgroundColor: '#007acc', 
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff', 
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007acc', 
  },
});

export default globalStyles;

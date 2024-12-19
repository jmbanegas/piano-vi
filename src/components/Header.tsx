import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Piano-VI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee',
    padding: 15,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;

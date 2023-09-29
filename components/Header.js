import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',  // Cambia el color de fondo según tus preferencias
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',  // Cambia el color del texto según tus preferencias
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;

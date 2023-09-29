import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Contacto = () => {
  return (
    <ImageBackground
      source={{uri: 'https://cdn-pro.elsalvador.com/wp-content/uploads/2017/01/27002559/1434904175906.jpg'}}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Contacto</Text>
        <Text style={styles.description}>
          ¡Nos encantaría saber de ti! Puedes encontrarnos en la siguiente dirección:
        </Text>
        <Text style={styles.address}>
          Jose Bustamante Rivero {'\n'} Arequipa, Peru
        </Text>
        <Text style={styles.email}>
          Correo Electrónico:{'\n'}
          <Text style={styles.emailLink}>qjcoder@gamil.com</Text>
        </Text>
        <Text style={styles.telefono}>
          Teléfono:{'\n'}
          <Text style={styles.phoneLink}>(555) 456-7890</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333333',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555555',
    marginBottom: 20,
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555555',
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 10,
  },
  emailLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  telefono: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  phoneLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Contacto;

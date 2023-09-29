import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AcercaDe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de Nosotros</Text>
      <Text style={styles.description}>
        Somos una tienda de ropa dedicada a proporcionar moda de alta calidad para hombres y mujeres. Nuestro objetivo es ofrecer prendas que no solo sigan las tendencias actuales, sino que también reflejen la individualidad y estilo de cada cliente.
      </Text>
      <View style={styles.imagesContainer}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.u0a0SBvdAMONiNqQBmTVWAHaLF?pid=ImgDet&rs=1' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://th.bing.com/th/id/R.542dd1bd31740091daccfb43c148e7b4?rik=9V15DUaxiI3S6A&pid=ImgRaw&r=0' }}
          style={styles.image}
        />
      </View>
      <Text style={styles.highlightText}>Nuestra Misión</Text>
      <Text style={styles.missionText}>
        Proporcionar a nuestros clientes ropa de alta calidad que no solo les haga sentirse bien, sino que también les permita expresar su estilo único en cualquier ocasión.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', // Fondo agregado
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
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  highlightText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333333',
  },
  missionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555555',
  },
});

export default AcercaDe;

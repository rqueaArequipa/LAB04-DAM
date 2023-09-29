import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const Catalogo = () => {
  const data = [
    { id: '1', nombre: 'Camisa', imagenURL: 'https://i.pinimg.com/736x/e9/1b/ee/e91bee706da9914d607a27ccd3413806.jpg' },
    { id: '2', nombre: 'Pantalón', imagenURL: 'https://i.pinimg.com/736x/e9/1b/ee/e91bee706da9914d607a27ccd3413806.jpg' },
    { id: '3', nombre: 'Camisa', imagenURL: 'https://i.pinimg.com/736x/e9/1b/ee/e91bee706da9914d607a27ccd3413806.jpg' },
    { id: '4', nombre: 'Pantalón', imagenURL: 'https://i.pinimg.com/736x/e9/1b/ee/e91bee706da9914d607a27ccd3413806.jpg' },
    { id: '5', nombre: 'Camisa', imagenURL: 'https://i.pinimg.com/736x/e9/1b/ee/e91bee706da9914d607a27ccd3413806.jpg' },
    { id: '6', nombre: 'Pantalón', imagenURL: 'https://i.pinimg.com/736x/e9/1b/ee/e91bee706da9914d607a27ccd3413806.jpg' },
    { id: '7', nombre: 'Camisa', imagenURL: 'https://i.pinimg.com/736x/e9/1b/ee/e91bee706da9914d607a27ccd3413806.jpg' },
    { id: '8', nombre: 'Pantalón', imagenURL: 'https://i.pinimg.com/736x/e9/1b/ee/e91bee706da9914d607a27ccd3413806.jpg' },
    { id: '9', nombre: 'Camisa', imagenURL: 'https://i.pinimg.com/736x/e9/1b/ee/e91bee706da9914d607a27ccd3413806.jpg' },
    { id: '10', nombre: 'Pantalón', imagenURL: 'https://i.pinimg.com/736x/e9/1b/ee/e91bee706da9914d607a27ccd3413806.jpg' },
  ];

  const renderProducto = ({ item }) => (
    <View style={styles.productoContainer}>
      <Image
        source={{ uri: item.imagenURL }}
        style={styles.imagenProducto}
      />
      <Text style={styles.nombreProducto}>{item.nombre}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Productos</Text>
      <View style={styles.listaContainer}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderProducto}
          numColumns={4} // Mostrar en 4 columnas
          contentContainerStyle={styles.listaContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Fondo agregado
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333333',
  },
  listaContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  listaContent: {
    flexGrow: 1,
  },
  productoContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  imagenProducto: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombreProducto: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
  },
});

export default Catalogo;

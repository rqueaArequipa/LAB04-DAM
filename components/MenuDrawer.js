import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MenuDrawer = ({ navigation }) => {
  const opciones = ['Inicio', 'Acerca de', 'Catálogo', 'Contacto'];

  return (
    <View>
      {opciones.map((opcion, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(opcion)}
        >
          <Text>{opcion}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default MenuDrawer;

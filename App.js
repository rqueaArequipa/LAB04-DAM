import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MenuDrawer from './components/MenuDrawer';
import Header from './components/Header';
import Inicio from './screens/Inicio';
import AcercaDe from './screens/AcercaDe';
import Catalogo from './screens/Catalogo';
import Contacto from './screens/Contacto';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
      >
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Acerca de" component={AcercaDe} />
        <Drawer.Screen name="Catálogo" component={Catalogo} />
        <Drawer.Screen name="Contacto" component={Contacto} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

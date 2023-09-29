import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Inicio = () => {
    const imagenURL = 'https://th.bing.com/th/id/OIP.7UwwCmmufbNwoTpKSZfyiAHaE8?pid=ImgDet&rs=1'
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imagenURL }}// Asegúrate de reemplazar la ruta con la ubicación de tu imagen
                style={styles.image}
            />
            <Text style={styles.title}>Bienvenido a Nuestra Tienda de Ropa</Text>
            <Text style={styles.description}>
                Explora nuestra colección de moda de alta calidad y encuentra tu estilo único.
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
        backgroundColor: '#ffffff',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333333',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555555',
    },
});

export default Inicio;

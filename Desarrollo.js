import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const openGitHub = () => {
    Linking.openURL('https://github.com/Ethan04Munoz');
};

const openOtherLink = () => {
    Linking.openURL('https://github.com/Ethan04Munoz/PokedexApp');
};

export default function Desarrollo() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Esta app fue desarrollada por Ethan Muñoz, con la intención de probar React Native, y algunas de sus funciones, como llamadas a una API.
            </Text>

            <TouchableOpacity style={styles.button} onPress={openGitHub}>
                <Icon name="github" size={30} color="#000" />
                <Text style={styles.buttonText}>GitHub</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={openOtherLink}>
                <Text style={styles.linkText}>Ir a este repositorio</Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        marginLeft: 8,
        fontSize: 18,
        color: '#000',
    },
    linkText: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

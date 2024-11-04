import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

export default function PokemonDetail({ route }) {
    const { url } = route.params;
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPokemon(data));
    }, [url]);

    if (!pokemon) return <Text>Cargando...</Text>;

    return (
        <View style={{ padding: 20, alignItems: 'center' }}>
            <Image
                source={{ uri: pokemon.sprites.front_default }}
                style={{ width: 200, height: 200 }}
            />
            <Text style={{ fontSize: 20 }}>{pokemon.name.toUpperCase()}</Text>
            <Text>Altura: {pokemon.height}</Text>
            <Text>Peso: {pokemon.weight}</Text>
            <Text>Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</Text>
        </View>
    );
}

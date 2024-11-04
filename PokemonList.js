import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Button } from 'react-native';

export default function PokemonList({ navigation }) {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(data => setPokemons(data.results));
    }, []);

    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="¿Quién es este Pokémon?"
                value={search}
                onChangeText={setSearch}
                style={{ padding: 10, marginBottom: 20, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
            />
            <FlatList
                data={filteredPokemons}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { url: item.url })}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                            <Image
                                source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png` }}
                                style={{ width: 50, height: 50, marginRight: 10 }}
                            />
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

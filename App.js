// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import Desarrollo from './Desarrollo';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function PokemonStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PokemonList"
                component={PokemonList}
                options={{  headerShown: false}}
            />
            <Stack.Screen
                name="PokemonDetail"
                component={PokemonDetail}
                options={{ title: 'Detalles del Pokémon' }}
            />
        </Stack.Navigator>
    );
}

// Configuración del Drawer Navigator
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="PokemonList">
                <Drawer.Screen
                    name="PokemonStack"
                    component={PokemonStack}
                    options={{ title: 'Pokédex', }}
                />
                <Drawer.Screen
                    name="Desarrollo"
                    component={Desarrollo}
                    options={{ title: 'Desarrollo' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

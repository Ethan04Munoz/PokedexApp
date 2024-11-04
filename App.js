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

// Configuración del Drawer Navigator
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="PokemonList">
                <Drawer.Screen 
                    name="PokemonList" 
                    component={PokemonList} 
                    options={{ title: 'Pokédex' }} 
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

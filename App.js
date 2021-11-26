// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home/index';
import Chelsea from './Screens/Chelsea/index';
import Liverpool from './Screens/Liverpool/index';
import City from './Screens/City/index';
import United from './Screens/United/index';
import Sobre from './Screens/Sobre/index';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chelsea" component={Chelsea} />
        <Stack.Screen name="Liverpool" component={Liverpool} />
        <Stack.Screen name="City" component={City} />
        <Stack.Screen name="United" component={United} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
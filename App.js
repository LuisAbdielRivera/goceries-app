import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductFormScreen from './screens/ProductFormScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import EditProductFormScreen from './screens/EditProductScreen.js'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ProductFormScreen' component={ProductFormScreen}/>
        <Stack.Screen name='EditProductFormScreen' component={EditProductFormScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
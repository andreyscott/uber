import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux"
import HomeScreen from './screens/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './store';
import 'react-native-gesture-handler';
import mapScreen from './screens/mapScreen';



export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MapScreen" component={mapScreen}
              options={{
                headerShown: false,
              }}
            />
            {/* <Stack.Screen name="MapScreen" component={mapScreen} options={{
              headerShown: false,
            }} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>


    </Provider>
  );
}


import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ApartmentComponent from './components/Apartments/Apartments'; // Import your ApartmentsScreen component
import { ScrollView } from 'react-native-gesture-handler';
import ApartmentDetailsComponent from './components/Apartments/ApartmentDetails';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ApartmentsList">
        
        <Stack.Screen
          name="ApartmentsList"
          component={ApartmentComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ApartmentDetails'
          component={ApartmentDetailsComponent}
        />
      </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});

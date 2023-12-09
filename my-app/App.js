import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/pages/HomeScreen';
import DetailScreen from './src/pages/DetailScreen';


const Stack = createNativeStackNavigator();



export default function App() {
  
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen /* options={{title:'Main'}} */ options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" options={({route}) => ({title: route.params.name})} component={DetailScreen} />
        <Stack.Screen /* options={{title:'Main'}} */ options={{headerShown:false}} name="Text" component={Text} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen'
import GalleryScreen from '../screens/GalleryScreen'

// Definir tipos para las rutas
export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
};

// Crear el Bottom Tab Navigator con Tipado
const Tab = createBottomTabNavigator<RootTabParamList>();

// Componente de Navegación
const BottomTabNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            if (route.name === 'Gallery') {
              iconName = 'images-outline';
            } else if (route.name === 'Take photo') {
              iconName = 'camera-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Take photo" component={HomeScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;

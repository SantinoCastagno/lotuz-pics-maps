import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Definir tipos para las rutas
export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
};

// Crear el Bottom Tab Navigator con Tipado
const Tab = createBottomTabNavigator<RootTabParamList>();

// Pantalla de Inicio
const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Inicio</Text>
    </View>
  );
};

// Pantalla de Perfil
const ProfileScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Perfil</Text>
    </View>
  );
};

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
        <Tab.Screen name="Gallery" component={HomeScreen} />
        <Tab.Screen name="Take photo" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;

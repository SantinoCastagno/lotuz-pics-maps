import { View } from 'react-native';
import { Button, Card, Text } from '@rneui/themed';
// Pantalla de Inicio
const HomeScreen: React.FC = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {/* Tarjeta con contenido */}
      <Card>
        <Card.Title>React Native Elements</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          Este es un ejemplo de tarjeta con un botón.
        </Text>
        
        {/* Botón de ejemplo */}
        <Button 
          title="¡Haz click!" 
          onPress={() => alert('¡Hola!')} 
        />
      </Card>
    </View>
  );
};

export default HomeScreen;
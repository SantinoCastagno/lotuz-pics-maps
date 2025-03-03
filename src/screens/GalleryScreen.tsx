import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet, Alert } from "react-native";
import { Card, Button, Text } from "@rneui/themed";

// Pantalla de Perfil
const GalleryScreen: React.FC = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (newPage = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${newPage}&limit=10`);
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data]); // Agregar nuevas imágenes sin borrar las anteriores
      setPage(newPage);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      {loading && images.length === 0 ? (
        <ActivityIndicator size="large" color="#2ECC71" />
      ) : (
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card containerStyle={styles.card}>
              <Card.Image 
                source={{ uri: `https://picsum.photos/id/${item.id}/500/300` }} 
                style={styles.image} 
              />
              <Card.Divider />
              <Text style={styles.title}>Autor: {item.author}</Text>
            </Card>
          )}
          ListFooterComponent={() =>
            loading ? <ActivityIndicator size="small" color="#2ECC71" /> : (
              <Button 
                title="Cargar Más"
                onPress={() => fetchImages(page + 1)}
                buttonStyle={styles.button}
              />
            )
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 200,
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    borderRadius: 8,
  },
});

export default GalleryScreen; 
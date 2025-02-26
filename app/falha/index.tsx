import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const FalhaScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/falha.png')} // Substitua pelo caminho correto da imagem
        style={styles.image}
      />
      <Text style={styles.texto}>Falha ao conectar com a geladeira</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 150,  // Ajuste o tamanho conforme necessário
    height: 150, // Ajuste o tamanho conforme necessário
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
});

export default FalhaScreen;

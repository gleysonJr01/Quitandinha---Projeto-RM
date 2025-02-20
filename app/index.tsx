import { useRouter } from "expo-router";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "../src/styles/index.styles";

const App = () => {
  const router = useRouter();

  const onPress = () => {
    router.push("/produtos");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo-1.png")} style={styles.image} />
      
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Vamos Começar!</Text>
      </TouchableOpacity>
    </View>
  );
};


export default App;

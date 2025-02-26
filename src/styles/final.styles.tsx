import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    image: {
      width: 250,
      height: 250,
      resizeMode: "contain",
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 15,
      backgroundColor: "#F8CA2F",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    thankYouText: {
      fontSize: 18,
      color: "#000",
      marginVertical: 20,
      fontWeight:'bold',
      marginBottom:60
    },
    highlightText: {
      color: "#F8CA2F", // Aqui você pode alterar a cor se desejar
      fontWeight: "bold",
    },
  });
  export default styles
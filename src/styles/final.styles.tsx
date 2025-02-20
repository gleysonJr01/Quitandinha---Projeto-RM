import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    totalContainer: {
      marginTop:20,
      alignItems: 'center',
      marginBottom: 20,
    },
    moedaTexto: {
      fontSize: 18, // Deixa o "R$" pequeno
      fontWeight: 'bold',
      color: '#333',
  
    },

  totalTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  valorTotalTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
    valorTexto: {
      fontSize: 36, // Número grande
      fontWeight: 'bold',
      color: '#333',
    },
    centavosTexto: {
      fontSize: 18, // Centavos menores
      fontWeight: 'normal', // Sem negrito
      color: '#333',
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: "contain",
    },
    pagamentoContainer: {
      borderWidth:1.5,
      borderRadius:10,
      height:400,
      padding:10,
      alignItems: "center",
      marginVertical: 20,
    },
  
    pagamentoTexto: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
    },
  
    iconContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
  
    setaIcon: {
      marginLeft: 10,
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
  });
  export default styles
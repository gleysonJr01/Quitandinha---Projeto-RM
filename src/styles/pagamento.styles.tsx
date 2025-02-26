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
    divider: {
      alignSelf: "stretch",    // Garante que o divider ocupe toda a largura disponível
      height: 1,
      backgroundColor: "#000",
      marginVertical: 20,
    },
    
    maquinetaTexto:{
      color:'#FFD700'
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
      height:500,
      padding:20,
      alignItems: "center",
      marginVertical: 20,
    },
    pagamentoTexto: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center", // Centraliza o texto
      width: 300, // Define uma largura para facilitar a quebra de linha
    },
    destravadoTitulo: {
      fontSize: 24, // Maior que o subtítulo
      fontWeight: "bold",
      textAlign: "center",
      color: "#000", // Cor branca padrão
    },
    
    destravadoAmarelo: {
      color: "#FFD700", // Amarelo ouro para a palavra "destravada"
    },
    
    destravadoSubtitulo: {
      fontSize: 18, // Menor que o título
      textAlign: "center",
      color: "#000",
      marginBottom: 20
    },
    
    tempoAvisoTexto: {
      marginBottom:20,
      fontSize: 14,
      textAlign: "center",
      color: "#000",
      fontWeight:'bold',
      marginTop: 50,
    },
    
    destravadoContainer: {
      borderWidth:1.5,
      borderRadius:10,
      height:660,
      padding:20,
      alignItems: "center",
      marginVertical: 20,
    },
    destravadoTexto: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center", // Centraliza o texto
      width: 300, // Define uma largura para facilitar a quebra de linha
    },
  
    iconContainer: {
      marginTop:10,
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
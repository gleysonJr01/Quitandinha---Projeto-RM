import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  botaoFinalizarPedido: {
    backgroundColor: 'black', 
    paddingVertical: 15,
    paddingHorizontal: 20, 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    marginHorizontal: 0, 
    width: '100%', 
  },
  textoBotao: {
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  listaProdutos: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  cardProduto: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 300, // Ajuste a altura do card
  },
  imagemProduto: {
    width: 100,  // Aumenta o tamanho da imagem, se necessário
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
    alignSelf: "center", // Garante que a imagem estará centralizada
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left", // Alinha o nome à esquerda
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  precoProduto: {
    fontSize: 14,
    color: "#28A745",
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",  // Alinha o preço à esquerda
    width: '100%',  // Garante que o preço ocupe toda a largura disponível
    paddingHorizontal: 10,  // Adiciona o mesmo espaçamento lateral
  },
  controleQuantidade: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Alinha o contador de quantidade ao centro
    marginTop: 10,
    width: '100%',
  },
  quantidadeInput: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    marginHorizontal: 10,
    fontSize: 16,
  },
  quantidade: {
    fontSize: 16,
    fontWeight: "bold",
  },
  categoriaItem: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
  },
  categoriaSelecionada: {
    backgroundColor: "#FFD700", // Fundo verde para categoria selecionada
  },
  categoriaTexto: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});


export default styles;

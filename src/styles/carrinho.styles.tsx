import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
 

iconContainer: {
  flexDirection: 'row',  // Para os ícones ficarem lado a lado
  alignItems: 'center', 
},
setaIcon: {
  marginLeft: 10,  
},

totalContainer: {
  alignItems: 'center',
},

totalLabel: {
  fontSize: 14,
  color: '#666',
},

totalValor: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
},

linhaSeparadora: {
  borderTopWidth: 1,
  borderColor: '#000',
  marginVertical: 10,
  width: '100%',
},

botaoContinuar: {
  width: '55%',
  borderWidth:1,
  backgroundColor: '#FFD700',
  paddingVertical: 15,
  alignItems: 'center',
  alignSelf:'flex-end',

},

textoBotaoContinuar: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
},
finalizarContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10,
  marginTop: 20,
},







produtoTextoContainer: {
  flex: 1, 
},




removerContainer: {
  marginTop: 3,
  alignItems: 'center',
  flexDirection:'row'
},

removerTexto: {
  fontSize: 14,
  color: 'red',
  marginTop: 5,
},


quantidadeERemoverContainer: {
  top: 0,
  right: 0,
  flexDirection: 'column', // Contador acima, botão remover abaixo
  alignItems: 'center',
},


itemLista: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,
  width: '100%',
  position: 'relative',
},

produtoImagemContainer: {
  width: 80,
  height: 80,
  marginRight: 15,
},

produtoImagem: {
  width: '100%',
  height: '100%',
  borderRadius: 10,
},

  produtoInfoContainer: {
    flex: 1,
    alignItems: 'flex-start', // Garante que tudo fique alinhado no topo
    flexDirection: 'row', // Para que nome/preço e contador fiquem na mesma linha
    justifyContent: 'space-between',
  },

nomeProduto: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
},

precoProduto: {
  fontSize: 14,
  color: '#555',
  marginTop: 4, // Pequeno espaço abaixo do nome
},

quantidadeContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
  borderWidth:1,
  borderRadius:5
},

quantidadeTexto: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
},






  totalTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    marginTop:20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    alignSelf:'flex-start',
  },
  produtosContainer: {
    flex: 1, 
    maxHeight: 460, 
    overflow: 'hidden', 
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFD700',  
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 30, 
    paddingBottom: 20,  
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  headerTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 60 : 80, 
    backgroundColor: '#fff',
    padding: 15
  },

  pagamentoContainer: {
    marginTop: 20, 
    borderWidth:1.5, // Para dar um espaçamento entre os elementos
    alignItems: 'center',  // Para centralizar o ícone e o texto
    justifyContent: 'center',
    padding: 20,  // Para adicionar um pouco de preenchimento
    borderRadius: 10,  // Para arredondar as bordas do container
  },
  pagamentoTexto: {
    marginTop: 10,  // Espaço entre o ícone e o texto
    fontSize: 18,
    fontWeight: 'bold',
    height:100,
    color: '#333',
  },

  botaoQuantidade: {
    marginHorizontal: 5,
  },
  adicionarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'center'
  },
  
  adicionarTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  

  
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default styles;

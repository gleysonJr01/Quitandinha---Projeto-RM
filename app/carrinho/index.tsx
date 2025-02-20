import React, { useEffect } from 'react';
import { View, Text, FlatList,Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removerProduto, atualizarQuantidade, atualizarTotal } from '../../redux/listaSlice';
import styles from '../../src/styles/carrinho.styles';
import { TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

const CarrinhoScreen = () => {
  const dispatch = useDispatch();
  const carrinho = useSelector((state: any) => state.carrinho.carrinho);

  const total = useSelector((state: any) => state.carrinho.total);
  const router = useRouter();

  useEffect(() => {
    dispatch(atualizarTotal());
  }, [carrinho]);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(atualizarQuantidade({ id, quantidade: quantity }));
    dispatch(atualizarTotal());
  };
  const handleAddNewProduts = () => {
    router.push('/produtos');
  };
  const handleFinalizar = () => {
    router.push('/final');
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTexto}>Pagamento do pedido</Text>
      </View>

   <View  > <Text style={styles.titulo}>Produtos selecionados</Text>
     </View>
      <View style={styles.produtosContainer}>
      <FlatList
  data={carrinho}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <View style={styles.itemLista}>
  {/* Imagem do Produto */}
  <View style={styles.produtoImagemContainer}>
    <Image source={{ uri: item.imagem }} style={styles.produtoImagem} />
  </View>

  <View style={styles.produtoInfoContainer}>
    <View style={styles.produtoTextoContainer}>
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <Text style={styles.precoProduto}>
        R$ {(item.preco * item.quantidade).toFixed(2)}
      </Text>
    </View>

    <View style={styles.quantidadeERemoverContainer}>
      <View style={styles.quantidadeContainer}>
        <IconButton
          icon="minus"
          iconColor="black"
          size={20}
          onPress={() => handleUpdateQuantity(item.id, Math.max(1, item.quantidade - 1))}
        />
        <Text style={styles.quantidadeTexto}>{item.quantidade}</Text>
        <IconButton
          icon="plus"
          iconColor="black"
          size={20}
          onPress={() => handleUpdateQuantity(item.id, item.quantidade + 1)}
        />
      </View>
      <View style={styles.removerContainer}>    
         <IconButton
          icon="trash-can-outline"
          iconColor="red"
          size={20}
          onPress={() => dispatch(removerProduto(item.id))}   /> 
                 <Text style={styles.removerTexto}>Remover</Text>
   </View>

 
    </View>
  </View>
</View>

  )}
/>

      </View>

<View style={styles.linhaSeparadora} />

<View style={styles.adicionarContainer}>
  <IconButton 
    icon="plus-box-multiple-outline" 
    iconColor="black" 
    size={30} 
    onPress={handleAddNewProduts} 
  />
  <Text style={styles.adicionarTexto}>Adicionar mais produtos</Text>
</View>

<TouchableOpacity style={styles.botaoContinuar} onPress={handleFinalizar}>
  <Text style={styles.textoBotaoContinuar}>Continuar</Text>
</TouchableOpacity>


    </View>
  );
};

export default CarrinhoScreen;

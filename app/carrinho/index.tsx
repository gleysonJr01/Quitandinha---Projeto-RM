import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removerProduto, atualizarQuantidade, atualizarTotal } from '../../redux/listaSlice';
import styles from '../../src/styles/carrinho.styles';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CarrinhoScreen = () => {
  const dispatch = useDispatch();
  const carrinho = useSelector((state: any) => state.carrinho.carrinho);
  const total = useSelector((state: any) => state.carrinho.total);
  const router = useRouter();

  useEffect(() => {
    dispatch(atualizarTotal());
  }, [carrinho]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(atualizarQuantidade({ id, quantidade: quantity }));
    dispatch(atualizarTotal());
  };

  const handleAddNewProducts = () => {
    router.push('/produtos');
  };

  const handleFinalizar = async () => {
    if (carrinho.length === 0) {
      Alert.alert(
        "Carrinho vazio",
        "Por favor, selecione um produto antes de continuar.",
        [{ text: "OK" }]
      );
      return;
    }
  
    try {
      const ip = await AsyncStorage.getItem('ip'); // Recupera o IP salvo nas configurações
      if (!ip) {
        Alert.alert("Erro", "Endereço IP não configurado.");
        return;
      }
  
      const pedido = {
        id_pedido: 12345, // ID aleatório para simular um pedido real
        valor_pedido: total,
        usuario: "CLIENTE",
      };
  
      const response = await fetch(`http://${ip}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "2f0963de7842b7eb465fe631703bdc35fbd1276d8b886e49aec8fde9b85f6d25",
        },
        body: JSON.stringify(pedido),
      });
  
      if (!response.ok) {
        throw new Error("Erro ao enviar o pedido");
        router.push("/falha");

      }
  
      // Se a requisição for bem-sucedida, navega para a tela de pagamento
      router.push("/pagamento");
  
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha ao processar o pedido.");
      
      // Se a requisição falhar, navega para a tela de falha
      router.push("/falha");
    }
  };
  ;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTexto}>Pagamento do pedido</Text>
      </View>

      <View>
        <Text style={styles.titulo}>Produtos selecionados</Text>
      </View>

      <View style={styles.produtosContainer}>
        <FlatList
          data={carrinho}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemLista}>
              <View style={styles.produtoImagemContainer}>
                <Image source={{ uri: item.imageUrl }} style={styles.produtoImagem} />
              </View>

              <View style={styles.produtoInfoContainer}>
                <View style={styles.produtoTextoContainer}>
                  <Text style={styles.nomeProduto}>{item.name}</Text>
                  <Text style={styles.precoProduto}>
                    R$ {(item.price * item.quantidade).toFixed(2)}
                  </Text>
                </View>

                <View style={styles.quantidadeERemoverContainer}>
                  <View style={styles.quantidadeContainer}>
                    <IconButton
                      icon="trash-can-outline"
                      iconColor="red"
                      size={20}
                      onPress={() => dispatch(removerProduto(item.id))}
                    />
                    <Text style={styles.quantidadeTexto}>{item.quantidade}</Text>
                    <IconButton
                      icon="plus"
                      iconColor="black"
                      size={20}
                      onPress={() => handleUpdateQuantity(item.id, item.quantidade + 1)}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.linhaSeparadora} />

      <TouchableOpacity style={styles.adicionarContainer} onPress={handleAddNewProducts}>
        <IconButton icon="plus-box-multiple-outline" iconColor="black" size={30} />
        <Text style={styles.adicionarTexto}>Adicionar mais produtos</Text>
      </TouchableOpacity>

      <View style={styles.finalizarContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValor}>
            R$ {total.toFixed(2)} <Text style={styles.totalLabel}>/{carrinho.reduce((acc:number, item: { quantidade: number }) => acc + item.quantidade, 0)} itens</Text> 
          </Text>
        </View>
        <TouchableOpacity style={styles.botaoContinuar} onPress={handleFinalizar}>
          <Text style={styles.textoBotaoContinuar}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarrinhoScreen;

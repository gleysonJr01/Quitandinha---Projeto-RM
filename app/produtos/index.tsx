import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarProduto, removerProduto, atualizarQuantidade, fetchProdutos } from '../../redux/listaSlice';  
import Header from '../../src/components/header/header';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import styles from '../../src/styles/produtos.styles';
import SearchBar from '../../src/components/searchbar/searchBar';
import { AppDispatch } from '../../redux/store';

interface Produto {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantidade: number;
}

const ProdutosScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const produtos: Produto[] = useSelector((state: any) => state.carrinho.produtos || []);
  const carrinho: Produto[] = useSelector((state: any) => state.carrinho.carrinho || []);
  
  const getQuantidade = (id: string) => {
    const item = carrinho.find((p: Produto) => p.id === id);
    return item ? item.quantidade : 0;
  };

  useEffect(() => {
    dispatch(fetchProdutos());
  }, [dispatch]);

  const categorias = ["Biscoito", "Refrigerante", "Doce", "Snacks"]; 

  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editQuantidadeId, setEditQuantidadeId] = useState<string | null>(null);
  const [novaQuantidade, setNovaQuantidade] = useState<string>("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);

  const produtosFiltrados = produtos.filter((produto: Produto) => 
    (categoriaSelecionada ? produto.name.toLowerCase().includes(categoriaSelecionada.toLowerCase()) : true) &&
    produto.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const produtosComEspaco = useMemo(() => {
    if (produtosFiltrados.length % 2 !== 0) {
      return [...produtosFiltrados, { id: "empty", name: "", price: 0, imageUrl: "", quantidade: 0, description: "" }];
    }
    return produtosFiltrados;
  }, [produtosFiltrados]);

  const handleAddToCart = (id: string) => {
    dispatch(adicionarProduto(id));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removerProduto(id));
  };

  const handleEditQuantidade = (id: string) => {
    setEditQuantidadeId(id);
    const produto = produtos.find(p => p.id === id);
    if (produto) {
      setNovaQuantidade(produto.quantidade.toString());
    }
  };

  const handleConfirmQuantidade = (id: string) => {
    const quantidade = parseInt(novaQuantidade, 10) || 0; 
    dispatch(atualizarQuantidade({ id, quantidade }));
  };

  const handleToggleSearch = () => {
    setSearchBarActive(!searchBarActive);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const router = useRouter();

  const handleFinalizarPedido = () => {
    router.push('/carrinho');
  };

  return (
    <View style={styles.container}>
      <Header onToggleSearch={handleToggleSearch} />
      {searchBarActive && (
        <SearchBar onSearch={handleSearch} onClose={handleToggleSearch} />
      )}

      <View>
        <FlatList
          data={categorias}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoriaItem, 
                categoriaSelecionada === item && styles.categoriaSelecionada
              ]}
              onPress={() =>
                setCategoriaSelecionada(categoriaSelecionada === item ? null : item)
              }              
            >
              <Text style={styles.categoriaTexto}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        data={produtosComEspaco}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listaProdutos}
        renderItem={({ item }) => (
          item.id === "empty" ? <View style={{ flex: 1, margin: 8 }} /> : (
            <View style={styles.cardProduto}>
              <Image source={{ uri: item.imageUrl }} style={styles.imagemProduto} />
              <Text style={styles.nomeProduto}>{item.name}</Text>
              <Text style={styles.nomeProduto}>{item.description}</Text>

              <Text style={styles.precoProduto}>
                R$ {(item.price ?? 0).toFixed(2)}
              </Text>
              <View style={styles.controleQuantidade}>
                <IconButton
                  icon="minus"
                  iconColor="red"
                  size={30}
                  onPress={() => handleRemoveFromCart(item.id)}
                />
                {editQuantidadeId === item.id ? (
                  <TextInput
                    style={styles.quantidadeInput}
                    keyboardType="numeric"
                    value={novaQuantidade}
                    onChangeText={setNovaQuantidade}
                    onBlur={() => handleConfirmQuantidade(item.id)}
                  />
                ) : (
                  <TouchableOpacity onPress={() => handleEditQuantidade(item.id)}>
                    <Text style={styles.quantidade}>{getQuantidade(item.id)}</Text>
                  </TouchableOpacity>
                )}
                <IconButton
                  icon="plus"
                  iconColor="red"
                  size={30}
                  onPress={() => handleAddToCart(item.id)}
                />
              </View>
            </View>
          )
        )}
      />

      <TouchableOpacity 
        onPress={handleFinalizarPedido} 
        style={styles.botaoFinalizarPedido}
      >
        <Text style={styles.textoBotao}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProdutosScreen;

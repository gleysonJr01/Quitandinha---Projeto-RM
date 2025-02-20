import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { adicionarProduto, removerProduto, atualizarQuantidade } from '../../redux/listaSlice';  
import Header from '../../src/components/header/header';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import styles from '../../src/styles/produtos.styles';
import SearchBar from '../../src/components/searchbar/searchBar';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  quantidade: number;
}

const ProdutosScreen= () => {
  const dispatch = useDispatch();
  const produtos: Produto[] = useSelector((state: any) => state.carrinho.produtos);
  const categorias = ["Biscoito", "Refrigerante", "Doce", "Snacks"]; 
  const [searchBarActive, setSearchBarActive] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [editQuantidadeId, setEditQuantidadeId] = useState<number | null>(null);
  const [novaQuantidade, setNovaQuantidade] = useState<string>("");

  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);

  const produtosFiltrados = produtos.filter((produto: Produto) => 
    (categoriaSelecionada ? produto.nome.toLowerCase().includes(categoriaSelecionada.toLowerCase()) : true) &&
    produto.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleAddToCart = (id: number) => {
    dispatch(adicionarProduto(id));
  };
  
  const handleRemoveFromCart = (id: number) => {
    dispatch(removerProduto(id));
  };
  
  const handleEditQuantidade = (id: number) => {
    setEditQuantidadeId(id);
    const produto = produtos.find(p => p.id === id);
    if (produto) {
      setNovaQuantidade(produto.quantidade.toString());
    }
  };
  
  const handleConfirmQuantidade = (id: number) => {
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
{searchBarActive && <SearchBar onSearch={handleSearch} onClose={handleToggleSearch} />}      <View>
         <FlatList
        data={categorias}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item}
            style={[styles.categoriaItem, categoriaSelecionada === item && styles.categoriaSelecionada]}
            onPress={() => setCategoriaSelecionada(item)}
          >
            <Text style={styles.categoriaTexto}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        key={"2-columns"}
        contentContainerStyle={styles.listaProdutos}
        renderItem={({ item }) => (
          <View style={styles.cardProduto}>
            <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
            <Text style={styles.nomeProduto}>{item.nome}</Text>
            <Text style={styles.precoProduto}>R$ {(item.preco ?? 0).toFixed(2)}</Text>
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
                <Text style={styles.quantidade}>{item.quantidade}</Text>
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
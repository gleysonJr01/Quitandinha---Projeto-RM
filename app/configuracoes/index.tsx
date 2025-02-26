import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Definição da interface para os produtos
interface Produto {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantidade: number;
}

const ConfiguracoesScreen = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);
  const handleUpdateProdutos = async () => {
    setLoading(true);
  
    try {
      const response = await fetch('https://quintanda-box-api.onrender.com/api/products');
      if (!response.ok) {
        throw new Error('Erro ao buscar os produtos');
      }
  
      const data = await response.json(); // Resposta completa da API
  
      if (!data.body || !Array.isArray(data.body)) {
        throw new Error('Formato inválido da resposta da API');
      }
  
      const produtos: Produto[] = data.body; // Pegando os produtos corretamente
  
      await AsyncStorage.setItem('ip', ip);
      await AsyncStorage.setItem('produtos', JSON.stringify(produtos));
  
      Alert.alert('Sucesso', 'Produtos atualizados e IP salvo!');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Houve um erro ao atualizar os produtos.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Configurações</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o IP da API"
        value={ip}
        onChangeText={setIp}
      />

      <Button
        title={loading ? 'Carregando...' : 'Atualizar Produtos'}
        onPress={handleUpdateProdutos}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default ConfiguracoesScreen;

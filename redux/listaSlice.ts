 import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Produto {
  id: string; // Mudado para string porque a API retorna um UUID
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantidade: number;
}


interface ListaState {
  produtos: Produto[];
  carrinho: Produto[];
  total: number;
  loading: boolean;
  error?: string|null;
}

const initialState: ListaState = {
  produtos: [],
  carrinho: [],
  total: 0,
  loading: false,
  error: null,
};

export const fetchProdutos = createAsyncThunk<Produto[], void, { rejectValue: string }>(
  'carrinho/fetchProdutos',
  async (_, thunkAPI) => {
    try {
      // Verificando se os produtos já estão no cache
      const cachedProdutos = await AsyncStorage.getItem('produtos');
      if (cachedProdutos) {
        // Se estiver no cache, retorna os produtos em cache
        return JSON.parse(cachedProdutos);
      }

      // Caso contrário, faz a chamada na API
      const response = await fetch('https://quintanda-box-api.onrender.com/api/products');

      if (!response.ok) {
        return thunkAPI.rejectWithValue('Erro ao buscar produtos');
      }

      const data = await response.json();

      if (!data.body || !Array.isArray(data.body)) {
        return thunkAPI.rejectWithValue("Formato de resposta inválido da API.");
      }

      const produtosFormatados: Produto[] = data.body.map((produto: any) => ({
        id: produto.id,
        name: produto.name,
        description: produto.description,
        imageUrl: produto.imageUrl,
        price: produto.price,
        quantidade: 0,
      }));

      // Salvando os produtos no cache
      await AsyncStorage.setItem('produtos', JSON.stringify(produtosFormatados));

      return produtosFormatados;
    } catch (error) {
      return thunkAPI.rejectWithValue("Erro ao buscar produtos");
    }
  }
);

const listaSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<string>) => { 
      const produto = state.produtos.find(p => p.id === action.payload);
      if (produto) {
        const produtoNoCarrinho = state.carrinho.find(p => p.id === produto.id);
        if (produtoNoCarrinho) {
          produtoNoCarrinho.quantidade += 1;
        } else {
          state.carrinho.push({ ...produto, quantidade: 1 });
        }
      }
    },
    removerProduto: (state, action: PayloadAction<string>) => { // Aqui também mudou
      state.carrinho = state.carrinho.reduce((novoCarrinho, produto) => {
        if (produto.id === action.payload) {
          if (produto.quantidade > 1) {
            novoCarrinho.push({ ...produto, quantidade: produto.quantidade - 1 });
          }
        } else {
          novoCarrinho.push(produto);
        }
        return novoCarrinho;
      }, [] as Produto[]);
    },
    atualizarQuantidade: (state, action: PayloadAction<{ id: string; quantidade: number }>) => { 
      const { id, quantidade } = action.payload;
      state.carrinho = state.carrinho
        .map(produto => (produto.id === id ? { ...produto, quantidade } : produto))
        .filter(produto => produto.quantidade > 0);
    },
    
    resetarCarrinho: (state) => {
      state.carrinho = [];
      state.total = 0;
    },
    atualizarTotal: (state) => {
      state.total = state.carrinho.reduce((acc, produto) => acc + produto.quantidade * produto.price, 0);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        console.log("Produtos carregados no Redux:", action.payload);
        state.loading = false;
        state.produtos = action.payload;
      })
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  adicionarProduto,
  removerProduto,
  atualizarQuantidade,
  atualizarTotal,
  resetarCarrinho,
} = listaSlice.actions;

export default listaSlice.reducer; 
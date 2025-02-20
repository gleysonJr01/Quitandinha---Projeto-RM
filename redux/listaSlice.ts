import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListaState {
  produtos: { id: number, nome: string, quantidade: number, imagem:string, preco:number}[];
  carrinho: { id: number, nome: string, quantidade: number  ,imagem:string, preco: number}[];
  total: number;
}

const initialState: ListaState = {
  produtos:[
    { id: 1, nome: 'Biscoito 1', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},
    { id: 2, nome: 'Biscoito 2', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},
    { id: 3, nome: 'Biscoito 3', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},
    { id: 4, nome: 'Biscoito 4', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},
    { id: 5, nome: 'Refrigerante 1', quantidade: 0, imagem: 'data:image/jpeg;base64,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' , preco: 20},
    { id: 6, nome: 'Refrigerante 2', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},
    { id: 7, nome: 'Refrigerante 3', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},
    { id: 8, nome: 'Refrigerante 4', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},
    { id: 9, nome: 'Doce 1', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},
    { id: 10, nome: 'Doce 2', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},
    { id: 11, nome: 'Doce 3', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},
    { id: 12, nome: 'Doce 4', quantidade: 0, imagem: 'https://a-static.mlcdn.com.br/1500x1500/biscoito-recheado-chocolate-passatempo-130g/magazineluiza/226782300/724563058924a115c7c3e06ea3af3492.jpg' , preco: 20},

  ],
  carrinho: [],
  total: 0,
};

const listaSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<number>) => {
      const produto = state.produtos.find(p => p.id === action.payload);
      if (produto) {
        produto.quantidade += 1;
        const produtoNoCarrinho = state.carrinho.find(p => p.id === produto.id);
        if (produtoNoCarrinho) {
          produtoNoCarrinho.quantidade += 1;
        } else {
          state.carrinho.push({ ...produto, quantidade: 1 });
        }
      }
    },
    removerProduto: (state, action: PayloadAction<number>) => {
      const produtoNoCarrinho = state.carrinho.find(p => p.id === action.payload);
      if (produtoNoCarrinho) {
        if (produtoNoCarrinho.quantidade > 1) {
          produtoNoCarrinho.quantidade -= 1;
        } else {
          state.carrinho = state.carrinho.filter(p => p.id !== action.payload);
        }
      }
    
      const produto = state.produtos.find(p => p.id === action.payload);
      if (produto && produto.quantidade > 0) {
        produto.quantidade -= 1;
      }
    },
    
    atualizarQuantidade: (state, action: PayloadAction<{ id: number, quantidade: number }>) => {
      const { id, quantidade } = action.payload;
    
      const produtoNoProdutos = state.produtos.find(p => p.id === id);
      if (produtoNoProdutos) {
        produtoNoProdutos.quantidade = quantidade; 
      }
    
      const produtoNoCarrinho = state.carrinho.find(p => p.id === id);
      if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade = quantidade;  
      } else if (quantidade > 0 && produtoNoProdutos) {
        state.carrinho.push({ ...produtoNoProdutos, quantidade });
      }
    },
    resetarCarrinho: (state) => {
      state.carrinho = [];
      state.total = 0;
    },
    atualizarTotal: (state) => {
      state.total = state.carrinho.reduce((acc, produto) => acc + produto.quantidade * produto.preco, 0);      },
  },
});

export const { adicionarProduto, removerProduto, atualizarQuantidade, atualizarTotal, resetarCarrinho} = listaSlice.actions;

export default listaSlice.reducer;
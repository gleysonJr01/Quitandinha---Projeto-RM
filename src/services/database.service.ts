// src/services/produtoService.ts

import database from "../Dados/database";


export const carregarProdutosParaDB = async () => {
  try {
    const response = await fetch('https://quintanda-box-api.onrender.com/api/products');
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos da API');
    }

const data = await response.json();
console.log('Produtos recebidos da API:', data.body);

    if (!data.body || !Array.isArray(data.body)) {
      throw new Error("Formato de resposta inválido da API.");
    }

    const db = await database();
    console.log('Banco de dados aberto com sucesso:', db);
    // Inserir os dados no banco de dados
    await db.transaction(async (tx) => {
      for (const produto of data.body) {
        const { id, name, description, imageUrl, price } = produto;
        await tx.executeSql(
          `INSERT OR REPLACE INTO produtos (id, name, description, imageUrl, price, quantidade) 
           VALUES (?, ?, ?, ?, ?, ?)`,
          [id, name, description, imageUrl, price, 0] // Adiciona quantidade como 0 inicialmente
        );
      }
    });

    console.log('Produtos carregados no banco de dados com sucesso');
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
  }
};

import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const database = async () => {
  const db = await SQLite.openDatabase({
    name: 'produtos.db',
    location: 'default',
  });

  // Criar a tabela de produtos, caso não exista
  await db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS produtos (
        id TEXT PRIMARY KEY,
        name TEXT,
        description TEXT,
        imageUrl TEXT,
        price REAL,
        quantidade INTEGER
      )`
    );
  });
  

  return db;
};

export default database;

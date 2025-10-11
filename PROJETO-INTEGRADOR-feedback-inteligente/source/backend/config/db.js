require('dotenv').config(); // Carrega variáveis do .env
const { Sequelize } = require('sequelize'); // Importa Sequelize

const sequelize = new Sequelize(
  process.env.DB_NAME,   // Nome do banco
  process.env.DB_USER,   // Usuário do banco
  process.env.DB_PASS,   // Senha
  {
    host: process.env.DB_HOST, // Host (localhost ou remoto)
    dialect: 'postgres',       // Tipo de banco
    logging: false             // Não mostra logs de SQL
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate(); // Testa a conexão
    console.log('PostgreSQL conectado com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar PostgreSQL:', err.message);
    process.exit(1); // Fecha app se falhar
  }
};

module.exports = { sequelize, connectDB };

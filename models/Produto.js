//ORM
import { Sequelize } from "sequelize";

//Conexão e config do Sequelize
import connection from "../config/sequelize-config.js";

const Produto = connection.define("produtos", {
  nomeProduto: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Nome Não Cadastrado',   
  },
  preco: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Categoria não Cadastrado'
  },
});
Produto.sync({ force: false });
export default Produto;

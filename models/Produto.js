//ORM
import { Sequelize } from "sequelize";

//Conexão e config do Sequelize
import connection from "../config/sequelize-config.js";

const Produto = connection.define("produtos", {
  nomeProduto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
Produto.sync({ force: false });
export default Produto;

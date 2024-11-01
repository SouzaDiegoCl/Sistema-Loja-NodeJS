//ORM
import { Sequelize } from "sequelize";

//Conexão e config do Sequelize
import connection from "../config/sequelize-config.js";

const Usuario = connection.define("usuario", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
Usuario.sync({ force: false });
export default Usuario;

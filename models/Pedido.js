import { Sequelize } from "sequelize";

import connection from "../config/sequelize-config.js";

const Pedido = connection.define("Pedido", {
  numPedido: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});
Pedido.sync({ force: false });
export default Pedido;

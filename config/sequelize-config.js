import { Sequelize } from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: 'loja_banco_dados',
  timezone: "-03:00",
});
export default connection;

import express from "express";
import connection from "./config/sequelize-config.js";
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";

//inicializar express
const app = express();

//Pegar dados de formulários
app.use(express.urlencoded({ extended: false }));

//Importando Controllers
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com banco de dados estabelecida corretamente!");
  })
  .catch((error) => {
    console.log(error);
  });

//Criando banco de dados caso não exista:
connection
  .query(`CREATE DATABASE IF NOT EXISTS loja_banco_dados;`)
  .then(() => {
    console.log("Banco de dados Criado corretamente!");
  })
  .catch((error) => {
    console.log(error);
  });

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");

// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

//Rota principal
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);

//Iniciando server
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso: http://localhost:${port}}`);
  }
});



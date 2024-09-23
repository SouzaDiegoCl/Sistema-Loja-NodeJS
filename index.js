const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso: http://localhost:${port}}`);
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clientes", (req, res) => {
  const clientesLista = [
    { nome: "Diego Baltazar", cpf: "123.456.789-11", endereco: "Registro/SP" },
    {
      nome: "Juliana Ferreira",
      cpf: "123.456.789-11",
      endereco: "São Paulo/SP",
    },
    {
      nome: "Pitucha Ferreira Baltazar",
      cpf: "321.222.111-21",
      endereco: "Cananéia/SP",
    },
    {
      nome: "Lucke Ferreira Baltazar",
      cpf: "505.321.123-00",
      endereco: "Xique-Xique/BA",
    },
    {
      nome: "Cacau Ferreira Baltazar",
      cpf: "888.124.231-22",
      endereco: "Los Angeles/CA",
    },
  ];
  res.render("clientes", {
    clientesLista: clientesLista,
  });
});

app.get("/produtos", (req, res) => {
  const produtosLista = [
    { nomeProduto: "Estojo", preco: 20.50, categoria: "Escolar" },
    { nomeProduto: "Agenda", preco: 10.99, categoria: "Escolar" },
    { nomeProduto: "Calculadora Científica", preco: 23.99, categoria: "Escritório" },
    { nomeProduto: "Régua", preco: 5.00, categoria: "Escritório" },
    { nomeProduto: "Cartolina", preco: 10.00, categoria: "Escolar" },
  ];
  res.render("produtos", {
    produtosLista: produtosLista,
  });
});
let pedidosLista = [
  { numPedido: "1", valor: 15.00 },
  { numPedido: "2", valor: 12.99 },
  { numPedido: "3", valor: 99.50 },
  { numPedido: "4", valor: 20.50 },
];


app.get("/pedidos", (req, res) => {

  res.render("pedidos", {
    pedidosLista: pedidosLista,
  });
});




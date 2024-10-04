import express from "express";
const router = express.Router();

import Produto from "../models/Produto.js";

//Get
router.get("/produtos", function (req, res) {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtosLista: produtos,
    });
  });
});

//Get
router.get("/produtosCadastro", function (req, res) {
  res.render("produtosCadastro");
});

//Post
router.post("/produtos/new", (req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;

  Produto.create({
    nomeProduto: nome,
    preco: preco,
    categoria: categoria,
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;

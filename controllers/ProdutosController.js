import express from "express";
const router = express.Router();

import Auth from "../middleware/Auth.js";
import Produto from "../models/Produto.js";

//Get
router.get("/produtos", Auth, (req, res) => {
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

//Delete
router.get("/produtos/delete/:id", (req, res) => {
  const id = req.params.id;
  Produto.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

//Editar
router.get("/produtos/edit/:id", (req, res) => {
  const id = req.params.id;
  Produto.findByPk(id)
    .then((produto) => {
      res.render("produtosEdit", {
        produto: produto,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//Update
router.post("/produtos/update", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;

  Produto.update(
    {
      nomeProduto: nome,
      preco: preco,
      categoria: categoria,
    },
    { where: { id: id } }
  )
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;

import express from "express";
import Pedido from "../models/Pedido.js";
const router = express.Router();

router.get("/pedidos", (req, res) => {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidosLista: pedidos,
    });
  });
});

//Add
router.post("/pedidos/new", (req, res) => {
  const num = req.body.numPedido;
  const valor = req.body.valor;
  Pedido.create({
    numPedido: num,
    valor: valor,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});

//Delete
router.get("/pedido/delete/:id", (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});

//Editar
router.get("/pedido/edit/:id", (req, res) => {
  const id = req.params.id;
  Pedido.findByPk(id)
    .then((pedido) => {
      res.render("pedidosEdit", {
        pedido:pedido
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//Update
router.post("/pedido/update", (req, res) => {

  const id = req.body.id;
  const numPedido = req.body.numPedido;
  const valor = req.body.valor;

  Pedido.update(
    {
      numPedido: numPedido,
      valor: valor,
    },
    { where: { id: id } }
  )
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;

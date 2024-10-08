import express from "express";
const router = express.Router();

router.get("/pedidos", (req, res) => {
  const pedidosLista = [
    {
      valor: 2.00,
      numPedido: 1,
    },
  ];
  res.render("pedidos", {
    pedidosLista: pedidosLista,
  });
});

export default router;

import express from "express";
const router = express.Router();

router.get("/pedidos", (req, res) => {
  res.render("pedidos", {
    pedidosLista: pedidosLista,
  });
});

export default router;

import express from "express";
const router = express.Router();

//Rota Clientes
router.get("/clientes", (req, res) => {
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

  export default router;
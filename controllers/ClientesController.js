import express from "express";
import Cliente from "../models/Cliente.js";
const router = express.Router();

//Rota Clientes
router.get("/clientes", (req, res) => {
  Cliente.findAll().then((clientesLista) => {
    res.render("clientes", {
      clientesLista: clientesLista,
    });
  });
});

//Adicionar Cliente

router.post("/clientes/new", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;

  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

//Excluir Cliente
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id;
  Cliente.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

//Editar Cliente
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;
  Cliente.findByPk(id)
    .then((cliente) => {
      res.render("clientesEdit", {
        cliente: cliente,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//Update Cliente
router.post("/clientes/update", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;

  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where: { id: id } }
  )
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;

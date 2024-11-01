//Função para verificar se sessão está criada

function Auth(req, res, next) {
    //Se sessão não estiver vazia
    if (req.session.user != undefined) {
      //Liberar rota
      next();
    } else {
      //Se não tiver sessao vai jogar pro login
      res.render("userLogin", {
        loggedOut: true,
      });
    }
  }
  
  export default Auth;
  
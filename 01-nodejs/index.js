/**
 * 1- Obter usuario
 * 2- obter o numero de telefomne de um usuario a partir de  seu id
 * 3- obter o endereço de usuario pelo id
 */

function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Joao",
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(IdUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "98999999",
      ddd: "99"
    });
  }, 2000);
}

function obterEndereco(IdUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "primeira trav da vitoria",
      numero: 19,
      bairro: "alto do turu",
      municipio: "sao josé de ribamar"
    });
  }, 1000);
}

function resolverUsuario(erro, usuario) {
  console.log(usuario);
}

obterUsuario((error, usuario) => {
  if (error) {
    console.log("DEU RUIM MANO em USUARIO", error);
    return;
  }
  console.log("usuario", usuario);
  obterTelefone(usuario.id, (error1, telefone) => {
    if (error) {
      console.log("DEU RUIM MANO em TELEFONE", error);
      return;
    }
    console.log("telefone", telefone);
  });

  obterEndereco(usuario.id, (error2, endereco) => {
    if (error) {
      console.log("DEU RUIM MANO em ENDEREÇO", error);
      return;
    }
    console.log("endereco", endereco);
  });
});

//const usuario = obterUsuario();
//const telefone = obterTelefone(usuario.id);
//const endereço = obterEndereco(usuario);

//console.log(usuario);
//console.log(telefone);

/**
 * 1- Obter usuario
 * 2- obter o numero de telefomne de um usuario a partir de  seu id
 * 3- obter o endereço de usuario pelo id
 */

function obterUsuario() {
  //quando der algum problema --> reject(erro)
  //quando sucesso --> resolve
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: "Joao",
        dataNacimento: new Date()
      });
    }, 1000);
  });
}

function obterTelefone(IdUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        ddd: 98,
        numero: 988728242
      });
    }, 2000);
  });
}

function obterEndereco(IdUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        rua: "M",
        numero: 1,
        bairro: "COHAB"
      });
    });
  });
}

const telefonePromise = obterTelefone();
const usuarioPromise = obterUsuario();
const enderecoPromise = obterEndereco();
//para manipular o sucesso usamos a funao .then
//para manipular erros, usamos o .cath

usuarioPromise
  .then(resultado => {
    console.log("resultado de usuario", resultado);
  })
  .catch(erro => {
    console.error("DEU RUIM MANO USUARIO", erro);
  });

telefonePromise
  .then(resultado => {
    console.log("resultado de telefone", resultado);
  })
  .catch(erro => {
    console.error("DEU RUIM MANO EM TELEFONE", erro);
  });

enderecoPromise
  .then(resultado => {
    console.log("resultado de endereço", resultado);
  })
  .catch(erro => {
    console.error("DEU RUIM MANO EM ENDEREÇO", erro);
  });

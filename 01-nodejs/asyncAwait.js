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

main();
async function main() {
  try {
    console.time("medida-promisse");
    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEndereco(usuario.id);
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id)
    ]);

    const [telefone, endereco] = resultado;
    // const telefone = resultado[0];
    // const endereco = resultado[1];

    console.log(`
     Nome: ${usuario.nome},
     Telefone: ${telefone.ddd} ${telefone.numero},
     Endereco: ${endereco.rua} ${endereco.numero} ${endereco.bairro}
    `);
    console.timeEnd("medida-promisse");
  } catch (erro) {
    console.error("DEU RUIN", erro);
  }
}

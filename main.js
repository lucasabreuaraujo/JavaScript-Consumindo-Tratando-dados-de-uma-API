// api viaCep - pesquisa google

async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = "";
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertiva = await consultaCEP.json();
    if (consultaCEPConvertiva.erro) {
      throw Error("CEP inexistente");
    }
    var cidade = document.getElementById('cidade');
    var endereco = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    var bairro = document.getElementById('bairro');
    var complemento = document.getElementById('complemento')

    cidade.value = consultaCEPConvertiva.localidade;
    endereco.value = consultaCEPConvertiva.logradouro;
    estado.value = consultaCEPConvertiva.uf;
    bairro.value = consultaCEPConvertiva.bairro;
    complemento.value = consultaCEPConvertiva.complemento;

    console.log(consultaCEPConvertiva);
    return consultaCEPConvertiva;
  } catch (erro) {
        mensagemErro.innerHTML= `<p> CEP inválido. Tente Novamente</p>`
    console.log(erro)
  }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

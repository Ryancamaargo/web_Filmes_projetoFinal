const cadastrarse = document.querySelector("#cadastrarse");


function novaPessoa() {
  let form = document.querySelector('#form-dados');
  let pessoa = {
    nome: form.nome.value,
    cpfcnpj: form.cpfcnpj.value,
    dtNasc: form.dtNasc.value,
    tel: form.tel.value,
    cep: form.cep.value,
    cidade: form.cidade.value,
    uf: form.uf.value,
    sexo: form.sexo.value,
    bairro: form.bairro.value,
    rua: form.rua.value,
    numero: form.numero.value,
    email: form.email.value,
    senha: form.senha.value,
    confirmasenha: form.confirmasenha.value
  }
  return pessoa;
}

function getPessoa(element) {
  let pessoa = {
    nome: element.querySelector('.nome').textContent,
    cpfcnpj: element.querySelector('.cpfcnpj').textContent,
    dtNasc: element.querySelector('.dtNasc').textContent,
    tel: element.querySelector('.tel').textContent,
    cep: element.querySelector('.cep').textContent,
    cidade: element.querySelector('.cidade').textContent,
    bairro: element.querySelector('.bairro').textContent,
    uf: element.querySelector('.uf').textContent,
    sexo: element.querySelector('.sexo').textContent,
    rua: element.querySelector('.rua').textContent,
    numero: element.querySelector('.numero').textContent,
    email: element.querySelector('.email').textContent,
    senha: element.querySelector('.senha').textContent,
    confirmasenha: element.querySelector('.confirmasenha').textContent,
  }
  return pessoa;
}

function validarCampo(campo) {
  if (campo != '') {
    return true;
  }
  return false;
}


function validarPessoa2(pessoa) {
   let erro;
   if (!validarCampo(pessoa.nome)) {
    erro="Preencha o campo nome!";
  }
  return erro;
}

function validarPessoa(pessoa) {
  let erro = [];
  if (!validarCampo(pessoa.nome)) {

    erro.push("Preencha o campo nome!");
  }

  if (!validarCampo(pessoa.cpf)) {
    erro.push("Preencha o cpf!");
  }
  if (!validarCampo(pessoa.datanascimento)) {
    erro.push("Preencha a data de nascimento!");
  }
  if (!validarCampo(pessoa.telefone)) {
    erro.push("Preencha o telefone!");
  }
  if (!validarCampo(pessoa.cep)) {
    erro.push("Preencha o cep!");
  }
  if (!validarCampo(pessoa.rua)) {
    erro.push("Preencha a rua!");
  }
  if (!validarCampo(pessoa.numero)) {
    erro.push("Preencha o numero da casa!");
  }
  if (!validarCampo(pessoa.email)) {
    erro.push("Preencha o email!");
  }
  if (!validarCampo(pessoa.senha)) {
    erro.push("Preencha a senha!");
  }
  if (!validarCampo(pessoa.confirmasenha)) {
    erro.push("Preencha a confirmação da senha!");
  }
  if (pessoa.senha != pessoa.confirmasenha) {
    erro.push("Preencha com senhas iguais, estão diferentes...");
  }

  return erro;
}

function exibirMsgErro(erro) {
  let ul = document.querySelector("#mensagemErro");
  ul.style.color = "#f00";
  ul.innerHTML = '';
  erro.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  })
}

function setPessoa() {
  let pessoa = novaPessoa();
  let erro = validarPessoa(pessoa);
  let erro2 = validarPessoa2(pessoa);
  if (erro2.length > 0) {
    alert(erro);
    exibirMsgErro(erro);
  } else {
    let ul = document.querySelector("#mensagemErro");
    ul.innerHTML = 'Cadastro com sucesso.';
    alert("Cadastro com sucesso.")
    addPessoa(pessoa);
  }
}


function addPessoa(pessoa) {
  let listaPessoa = getArrayStorage();
  listaPessoa.push(pessoa);
  setArrayStorage(listaPessoa);
}

function setArrayStorage(pessoa) {
  localStorage.setItem('listaPessoa', JSON.stringify(pessoa))|| [];;
}

function getArrayStorage() {
  return JSON.parse(localStorage.getItem('listaPessoa')) || [];
}


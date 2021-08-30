
const entrar = document.querySelector("#entrar");

function getStorageLogada() {
    return JSON.parse(localStorage.getItem('pessoaLogada')||[]);
}

var pessoaOn;

$(function () {
    var pessoalogada = getStorageLogada();
    
   
    document.getElementById("nomeusuariologado").innerHTML = pessoalogada.nome;



})

entrar.addEventListener('click', function (e) {
    e.preventDefault();
    recuperarLogin();
});


function pessoaLogin() {
    let form = document.querySelector('#form-login');
    let pessoa = {
        email: form.email.value,
        senha: form.senha.value,
    }

    return pessoa;
}


var nome = "";
var cpf = "";
var datanascimento = "";
var tel = "";
var cep = "";
var cidade = "";
var bairro = "";
var rua = "";
var numero = "";
var email = "";



function recuperarLogin() {
    let pessoa = pessoaLogin();
    let erro = validarLogin(pessoa);
    if (erro.length > 0) {
        exibirMsgErro(erro);
    } else {
        let ul = document.querySelector('#mensagemErro');
        ul.innerHTML = '';
        alert("Logado com sucesso!");

    }

}

function setarValores() {

    document.querySelector("#nome").value = nome;
    document.querySelector("#cpf").value = cpf;
    document.querySelector("#datanascimento").value = datanascimento;
    document.querySelector("#tel").value = tel;
    document.querySelector("#cep").value = cep;
    document.querySelector("#cidade").value = cidade;
    document.querySelector("#bairro").value = bairro;
    document.querySelector("#rua").value = rua;
    document.querySelector("#numero").value = numero;
    document.querySelector("#email2").value = email;

}
function setArrayStorageLogada(pessoa) {
    localStorage.setItem('pessoaLogada', JSON.stringify(pessoa)) || [];;
}




function validarLogin(pessoa) {

    let erro = [];
    pessoaOn = null;
    if (!validarCampo(pessoa.email)) {
        erro.push("Preencha o email!");
    } else {
        var pessoas = getArrayStorage();

        for (var i = 0; i < pessoas.length; i++) {

            if (pessoas[i].email == pessoa.email && pessoas[i].senha == pessoa.senha) {
                pessoaOn = pessoas[i];
                nome = pessoas[i].nome;
                cpf = pessoas[i].cpf;
                datanascimento = pessoas[i].datanascimento;
                tel = pessoas[i].tel;
                cep = pessoas[i].cep;
                cidade = pessoas[i].cidade;
                bairro = pessoas[i].bairro;
                rua = pessoas[i].rua;
                numero = pessoas[i].numero;
                email = pessoas[i].email;
                setArrayStorageLogada(pessoaOn);


            }

        }


        if (pessoaOn == null) {
            erro.push("Login não localizado... cadastre-se na opção abaixo");
        }
    }
    if (!validarCampo(pessoa.senha)) {
        erro.push("Preencha a senha!");
    }

    return erro;
}



$(function () {
   
    recuperarLogin();
})


function recuperarLogin() {
    var pessoa = getStorageLogada();

    setarValores(pessoa);



}
function getStorageLogada() {
    return JSON.parse(localStorage.getItem('pessoaLogada')) || [];
}
function setarValores(pessoa) {
    document.querySelector("#nome").value = pessoa.nome;
    document.querySelector("#cpf").value = pessoa.cpfcnpj;
    document.querySelector("#dtNasc").value = pessoa.dtNasc;
    document.querySelector("#tel").value = pessoa.tel;
    document.querySelector("#cep").value = pessoa.cep;
    document.querySelector("#uf").value = pessoa.uf;
    document.querySelector("#sexo").value = pessoa.sexo;
    document.querySelector("#cidade").value = pessoa.cidade;
    document.querySelector("#bairro").value = pessoa.bairro;
    document.querySelector("#rua").value = pessoa.rua;
    document.querySelector("#numero").value = pessoa.numero;
    document.querySelector("#email").value = pessoa.email;
}

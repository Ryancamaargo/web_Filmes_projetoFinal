
function getStorageLogada() {
    return JSON.parse(localStorage.getItem('pessoaLogada'))||[];
}


$(function () {
    var pessoalogada = getStorageLogada();
    
    document.getElementById("nomeusuariologado").innerHTML = pessoalogada.nome;

})
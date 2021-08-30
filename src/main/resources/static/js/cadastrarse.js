
cadastrarse.addEventListener('click', function (e) {
    e.preventDefault();
    setPessoa();
});
$(function () {

    $('#cpfcnpj').mask("999.999.999-99", { placeholder: " " });
    $("#tel").mask("(99) 9999-9999", { autoclear: false });

    $('#cep').mask("99.999-999", { placeholder: " " });
})


const radioFisica = document.querySelector("#customRadio1");
const radioJuridica = document.querySelector("#customRadio2");

radioFisica.addEventListener('click', function (e) {

    $('#cpfcnpj').mask("999.999.999-99", { placeholder: " " });

});
radioJuridica.addEventListener('click', function (e) {

    $('#cpfcnpj').mask("99.999.999/9999-99", { placeholder: " " });

});
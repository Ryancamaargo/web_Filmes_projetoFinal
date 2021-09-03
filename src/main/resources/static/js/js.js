var frete = 0;
var total = 0;
var desc = 0;
var cout = 1;
function calcular1() {
    var x1 = document.getElementById("precopromocao").innerHTML;
    var x2 = document.getElementById("qtd").value;
    var total1 = (parseFloat(x1)) * (parseFloat(x2));
    document.getElementById("total2").innerHTML = "= R$" + total1 + ",00";
}


function total() {
    var valor
    var parcelas;
    var frete = 0;


    if (document.getElementById("pac").checked) {
        frete = 10;
    } else {
        frete = 15;
    }



    var total = 2 + (parseFloat(frete));

    document.getElementById("total").innerHTML = "R$" + total + ",00";
    document.getElementById("total2").innerHTML = "R$" + total + ",00";

}

function gravarFrete() {
    var nome;
    if (document.getElementById("pac").checked) {
        frete = 10;
        nome = "  \nFrete: Pac = R$ " + frete + ",00";
    } else {
        frete = 15;
        nome = " \n Frete: Sedex = R$ " + frete + ",00";
    }
    document.getElementById("resumo").innerHTML += nome + " para o cep " + document.getElementById("cep").innerHTML;
}

function gravarFormaPagamento() {
    var nome;
    if (document.getElementById("customRadio1").checked) {
        desc = 0;
        nome = " \nForma de pagamento: Mercado livre, com desconto de  " + desc + "%";
    } else if (document.getElementById("customRadio2").checked) {
        desc = 0;
        nome = "  \nForma de pagamento: Cartão, com desconto de  " + desc + "%";
    } else {
        desc = 10;
        nome = " \n Forma de pagamento: Boleto, com desconto de " + desc + "%";
    }

    document.getElementById("resumo").innerHTML += " ----------- Compra número: " + cout + "\n" + nome;
    cout++;
}
function gravarTotalProduto() {
    var qtd = document.getElementById("qtd").value;

    total = qtd * 18;

    document.getElementById("resumo").innerHTML += "\nTotal dos produtos, com quantidade: " + qtd + " totalizando = R$" + total + ",00";
}


function gravarTotalCompra() {
    var x4 = document.getElementById("qtd").value;


    var totalC = (x4 * 18) + frete;

    var descontoCalc = ((parseFloat(totalC * desc)) / 100);

    var totalDesc = totalC - descontoCalc;

    document.getElementById("resumo").innerHTML += "\nTotal com frete = R$" + totalC + ",00\nDesconto da forma de pagamento = R$" + descontoCalc + "\nTOTALIZANDO = R$" + parseFloat(totalDesc);
}

function calculoParcela() {
    var x1 = document.getElementById("precopromocao").innerHTML;
    if (document.getElementById("pac").checked) {
        frete = 10;

    } else {
        frete = 15;

    }
    if (document.getElementById("customRadio1").checked) {
        desc = 0;

    } else if (document.getElementById("customRadio2").checked) {
        desc = 0;

    } else {
        desc = 10;

    }
    var x4 = document.getElementById("qtd").value;


    var totalC = (x4 * parseFloat(x1)) + frete;

    var descontoCalc = ((parseFloat(totalC * desc)) / 100);

    var totalDesc = totalC - descontoCalc;

    console.log(x4);
    console.log(frete);
    console.log(totalC);
    console.log(descontoCalc);
    var select = document.getElementById("parcelamento");
    var opcaoTexto = select.options[select.selectedIndex].text;
    var t = totalDesc / opcaoTexto;
    document.getElementById("totalCompra").innerHTML = "\nParcelas: " + opcaoTexto + "  de: " + t;

}
function gravarParcelas() {

    var text = document.getElementById("totalCompra").innerHTML;
    console.log(text);
    document.getElementById("resumo").innerHTML += text + "\n";


}

var imagem = document.getElementById("img1").src;







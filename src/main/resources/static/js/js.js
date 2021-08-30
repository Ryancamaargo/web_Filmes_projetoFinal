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

function calcular2() {
    var x2 = document.getElementById("filme2").value;
    var total2 = x2 * 30;
    document.getElementById("total2").innerHTML = total2;
}

function calcular3() {
    var x3 = document.getElementById("filme3").value;
    var total3 = x3 * 40;
    document.getElementById("total3").innerHTML = total3;
}

function calcular4() {
    var x4 = document.getElementById("filme4").value;
    var total4 = x4 * 50;
    document.getElementById("total4").innerHTML = total4;
}

function calcular5() {
    var x5 = document.getElementById("filme5").value;
    var total5 = x5 * 60;
    document.getElementById("total5").innerHTML = total5;
}

function calcular6() {
    var x6 = document.getElementById("filme6").value;
    var total6 = x6 * 70;
    document.getElementById("total6").innerHTML = total6;
}


function calcularTotal() {
    var a = document.getElementById("total1").innerHTML;
    var b = document.getElementById("total2").innerHTML;
    var c = document.getElementById("total3").innerHTML;
    var d = document.getElementById("total4").innerHTML;
    var e = document.getElementById("total5").innerHTML;
    var f = document.getElementById("total6").innerHTML;

    var max = (parseFloat(a)) + (parseFloat(b)) + (parseFloat(c)) + (parseFloat(d)) + (parseFloat(e)) + (parseFloat(f));

    document.getElementById("totalCompra").innerHTML = "R$" + max + ",00";

    var frete = 0;

    if (document.getElementById("pac").checked) {
        frete = 10;
    } else {
        frete = 15;
    }

    var fretetotal = max + (parseFloat(frete));
    document.getElementById("totalTudo").innerHTML = "R$" + fretetotal + ",00";


}

function mudacnpj() {
    document.getElementById("#cpf").mask("99.999.999/9999-99", { placeholder: " " });
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

function alerta() {
    var a = document.getElementById("totalTudo").innerHTML;
    alert("Pago " + a + " com sucesso!");
}



function total23() {
    var total4 = 0
    var x4 = document.getElementsByClassName("qtd").value;
     total4 = x4 * 18;
    document.getElementById("total2").innerHTML = "= R$" + total4 + ",00";

}

function total2() {

    var x4 = document.getElementById("qtd").value;
    var total4 = x4 * 18;
    document.getElementById("total2").innerHTML = "Com desconto = R$" + total4 + ",00";

}

function finalizacao() {
    alert(document.getElementById("resumo").innerHTML);
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

function formapagamento() {
    var x4 = document.getElementById("qtd").value;
    var frete = 0;
    var desc = 0;
    var total = x4 * 18;

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

    console.log(frete);
    console.log(desc);
    console.log(total);
    var descontoCalc = ((parseFloat(total) + frete) * desc) / 100;
    console.log(descontoCalc);

    var totalDesc = ((frete + (parseFloat(total))) - descontoCalc);
    console.log(totalDesc);

    document.getElementById("totalCompra").innerHTML = totalDesc;
    document.getElementById("total2").innerHTML = totalDesc;
    alert("Frete: " + frete + "\nDesconto da forma de pagamento de: " + desc + "%" + "\nTotalizando ===" + totalDesc + "\n");
}


function produtoCarrinho() {
    document.getElementById("contador").innerHTML = cout + " produtos ";
    cout++;
}

var imagem = document.getElementById("img1").src;
var imagem1 = document.getElementById("img01").src;
var imagem2 = document.getElementById("img02").src;
var imagem3 = document.getElementById("img03").src;
var imagem4 = document.getElementById("img04").src;

function alterarImagem1() {
    document.getElementById("img1").src = imagem2;
    var borda = document.getElementById("img02");
    borda.style.border = "2px solid blue"
}





function alterarImagem2() {
    document.getElementById("img1").src = imagem3;
    var borda = document.getElementById("img03");
    borda.style.border = "2px solid blue"
}
function alterarImagem3() {
    document.getElementById("img1").src = imagem4;
    var borda = document.getElementById("img04");
    borda.style.border = "2px solid blue"
}

function alterarImagem4() {
    document.getElementById("img1").src = imagem;
    var borda = document.getElementById("img01");
    borda.style.border = "2px solid blue"
}






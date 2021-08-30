let totalLabel = document.querySelector("#total");

let precoss = 0;
let subtotal = 0;
var vendaSt;

$(function () {

    let items = getArrayStorage();
    items.forEach(function (item) {
        novoLi(item);
    })

    vendaSt =  JSON.parse(localStorage.getItem('venda'));
    var data = new Date();
    $('#data').text(data.getDate()+"/"+parseFloat(data.getMonth()+1)+"/"+data.getFullYear());
    document.getElementById("formapagamento").innerHTML = vendaSt.formaPagamento;
    document.getElementById("fretevalor").innerHTML = vendaSt.frete;
    document.getElementById("subtotalresumoo").innerHTML = vendaSt.subtotalresumo;
    document.getElementById("totaldesconto").innerHTML = vendaSt.desconto;
    document.getElementById("totalresumoo").innerHTML = vendaSt.totalresumo;

})
let teste = 0;
let count = 0;
function resumo() {
    teste = teste + 1;
    if (teste == 1) {
        let items = getArrayStorage();
        
        items.forEach(function (item) {
           
            novoLiResumo(item);
        })
       
    }
    

}

btFinalizar.addEventListener('click', function (e) {
    arrayCarrinho = getArrayStorage();
    if(arrayCarrinho.length==0){
        Swal.fire({
            title: 'Erro!',
            text: 'Insira um produto para finalizar o carrinho!',
            type: 'danger'
        }).then((result) => {
                window.location = '/';
            }
        );
    }else{
        $("#modalResumo").modal();
    }
});

finalizacaoCarrinho.addEventListener('click', function (e) {

    localStorage.removeItem("listaProdutos") ;
});

function getArrayStorage() {
    return JSON.parse(localStorage.getItem('listaVenda')) || [];
}

function novoLi(produto) {
    liProduto = document.createElement('li');
    let nomeProduto = document.createElement('label');
    let precoProduto = document.createElement('span');
    let Img = document.createElement('img');

    let textpqtd = document.createElement('span');
    let inputQtd = document.createElement('label');



    nomeProduto.classList.add('produto-produto');
    precoProduto.classList.add('preco-produto');
    Img.classList.add('imagem-produto');

    inputQtd.classList.add('qtd');


    liProduto.classList.add('list-group-item');
   // clProduto = ['nome-produto'];


    inputQtd.style.margin = "5px";



    liProduto.appendChild(Img);
    liProduto.appendChild(nomeProduto);

    liProduto.appendChild(precoProduto);
    textpqtd.textContent = "  Quantidade: ";
    inputQtd.textContent = 1;
    inputQtd.textContent = produto.qtd;
    liProduto.appendChild(textpqtd);
    liProduto.appendChild(inputQtd);


    document.querySelector('#lista').appendChild(liProduto);

    nomeProduto.textContent = produto.titulo;
    precoProduto.textContent = produto.preco;
    Img.src = produto.imagem;



    let precoss = Number($(liProduto).children('.preco-produto').text());
    console.log(precoss);
    subtotal += parseFloat(precoss);
    if ($('.qtd').text == null) {
        $('#total').text(0)
    }
    $('#total').text(subtotal);


}


function novoLiResumo(produto) {
    liProduto = document.createElement('li');
    let nomeProduto = document.createElement('label');

    let precoProduto = document.createElement('span');
    let Img = document.createElement('img');
    let textpqtd = document.createElement('span');
    let inputQtd = document.createElement('span');


    nomeProduto.classList.add('produto-produto');
    precoProduto.classList.add('preco-produto');
    Img.classList.add('imagem-produto');
    inputQtd.classList.add('qtd');

    liProduto.classList.add('list-group-item');
    //clProduto = ['nome-produto'];

    inputQtd.disabled;
    inputQtd.type = "number";
    inputQtd.style.margin = "5px";

    inputQtd.textContent = 1;

    liProduto.appendChild(Img);
    liProduto.appendChild(nomeProduto);

    liProduto.appendChild(precoProduto);
    textpqtd.textContent = "  Quantidade: ";
    inputQtd.parseFloat = 1;
    liProduto.appendChild(textpqtd);
    liProduto.appendChild(inputQtd);

    document.querySelector('#resumoProduto').appendChild(liProduto);

    nomeProduto.textContent = produto.titulo;
    precoProduto.textContent = produto.preco;
    Img.src = produto.imagem;
}

function totalresumo() {

    var totalproduto = document.getElementById("total").innerHTML;

    var frete = 0;
    var desc = 0;


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


    var descontoCalc = ((parseFloat(totalproduto) + frete) * desc) / 100;


    var totalDesc = ((frete + (parseFloat(totalproduto))) - descontoCalc);

    document.getElementById("totaldesc").innerHTML = "Desconto: " + desc + "% ==== R$ " + descontoCalc;
    document.getElementById("totalresumo").innerHTML = "R$ " + totalDesc;

}


function totalresumo2() {
    var data = new Date();
  
    var totalprodutosss = document.getElementById("total").innerHTML;
    var formapagam;
    var frete = 0;
    var desc = 0;


    if (document.getElementById("pac").checked) {
        frete = 10;
    } else {
        frete = 15;
    }

    if (document.getElementById("customRadio1").checked) {
        desc = 0;
        formapagam = "Mercado pago";
    } else if (document.getElementById("customRadio2").checked) {
        desc = 0;
        formapagam = "Cartão de crédito";
    } else {
        desc = 10;
        formapagam = "Boleto";
    }


    var descontoCalc = ((parseFloat(totalprodutosss) + frete) * desc) / 100;
    var totalDesc = ((frete + (parseFloat(totalprodutosss))) - descontoCalc);


    document.getElementById("countProdutosresumo").innerHTML = count;
    var data = new Date();
    document.getElementById("data").innerHTML = data.getDate()+"/"+data.getMonth()+1+"/"+data.getFullYear();
    document.getElementById("formapagamento").innerHTML = formapagam;
    document.getElementById("fretevalor").innerHTML = "R$ " + frete;
    document.getElementById("subtotalresumoo").innerHTML = "R$ " + ((frete + (parseFloat(totalprodutosss))));
    document.getElementById("totaldesconto").innerHTML = desc + "% ==== R$ " + descontoCalc;
    document.getElementById("totalresumoo").innerHTML = "R$ " + totalDesc;

}


//function addQtd() {
 //   let precoss = Number($(liProduto).children('.preco-produto').text());
 //   subtotal += precoss;
  //  $('#total').text(subtotal);
//}

function getProduto(element) {
    let produto = {
        titulo: element.querySelector('.nome-produto').textContent,
        preco: element.querySelector('.preco-produto').textContent,
        imagem: element.querySelector('.imagem-produto').textContent,
    }
    return produto;
}

function setArrayStorage(arr) {
    localStorage.setItem('listaProdutos', JSON.stringify(arr)) || [];
}


function novoBotao(elemento, classe) {
    let componente = document.createElement(elemento);
    componente.setAttribute('href', '#');
    classe.map(function (item) {
        componente.classList.add(item);
    })
    componente.style.paddingLeft = '5px';

    return componente;
}

// function addProdutoArray() {
//     let produtos = [];
//     lista.querySelectorAll('.list-group-item').forEach((itensArray, index) => {
//         produtos.push(getProduto(itensArray));
//     })
//     console.log("Produtos: ", produtos);
//     setArrayStorage(produtos);
// }



function setProduto() {
    let produto = novoProduto();
    let prod = [];
    prod.push(produto);

    arrayCarrinho = getArrayStorage();
    arrayCarrinho.forEach(element => {
        prod.push(element);
    });
    setArrayStorage(prod);



}



function setVenda() {
    let venda = novaVenda();
    let prod = [];
    prod.push(produto);

    arrayCarrinho = getArrayStorage();
    arrayCarrinho.forEach(element => {
        prod.push(element);
    });
    setArrayStorage(prod);



}

function novaVenda() {
    let titulo = document.querySelector('.produtos-titulo');
    let preco = document.querySelector('.produtos-preco');
    var imagem = document.querySelector(".produtos-img");
    let produto = {
        titulo: titulo.innerHTML,
        preco: preco.innerHTML,
        imagem: imagem.src
    }
    return produto;
}



function terminaVendaPedido() {

        let venda = new Object();
        venda.vendaItens = new Array();
        let itens = vendaSt.listaProdutos;

    itens.forEach((item,i) => {
            venda.vendaItens[i] = new Object();
            venda.vendaItens[i].item = new Object();
            venda.vendaItens[i].item.idItem = item.idItem;
            venda.vendaItens[i].quantidade = item.qtd;
        })

        venda.tipo_pagamento = vendaSt.formaPagamento;
        // pedido.formaEnvio = pedidoStorage.formaEnvio;
        // pedido.numeroParcelas = pedidoStorage.numeroParcelas;

        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/venda',
            contentType : 'application/json',
            data : JSON.stringify(venda),
            success: function() {
                Swal.fire({
                    title: 'Salvo!',
                    text: 'Registro salvo com sucesso!',
                    type: 'success'
                }).then((result) => {
                        setArrayStorage('itensCarrinho',  new Array());
                        localStorage.removeItem("venda") ;
                        window.location = 'vendas';
                    }
                );//FIM swal()

            },
            error: function(data) {
                console.log(data);
                Swal.fire('Errou!', 'Falha ao salvar registro!', 'error');
            }
        }); //FIM ajax()
        return false;

}
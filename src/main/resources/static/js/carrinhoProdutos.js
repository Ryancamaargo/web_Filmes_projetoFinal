let totalLabel = document.querySelector("#total");

let precoss = 0;
let subtotal = 0;

$(function () {
    let items = getArrayStorage();
    items.forEach(function (item) {
        novoLi(item);
        count = count + 1;
    })
    
    document.getElementById("countProdutos").innerHTML = count;
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

limparCarrinho.addEventListener('click', function (e) {
    localStorage.removeItem("listaProdutos") ;
    $("#lista").empty();
    $('#countProdutos').text(0);
    $('#total').text(0);

});

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
    return JSON.parse(localStorage.getItem('listaProdutos')) || [];
}

function novoLi(produto) {
    liProduto = document.createElement('li');
    let nomeProduto = document.createElement('label');
    let precoProduto = document.createElement('span');
    let Img = document.createElement('img');

    let textpqtd = document.createElement('span');
    let inputQtd = document.createElement('label');

    let btSubtrair = novoBotao('a', ['subtrair']);
    let btAdicionar = novoBotao('a', ['adicionar']);
    let btExcluir = novoBotao('a', ['excluir']);

    btAdicionar.innerHTML = '<i class="fa fa-plus"></i>';
    btSubtrair.innerHTML = '<i class="fa fa-minus"></i>';
    btExcluir.innerHTML = '<i class="fa fa-trash"></i>';

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
    liProduto.appendChild(btAdicionar);
    liProduto.appendChild(btSubtrair);

    liProduto.appendChild(btExcluir);

    document.querySelector('#lista').appendChild(liProduto);

    nomeProduto.textContent = produto.titulo;
    precoProduto.textContent = produto.preco;
    Img.src = produto.imagem;




    liProduto.querySelector('.adicionar').addEventListener('click', (e) => {
        inputQtd.textContent = parseInt(inputQtd.textContent) + 1;
        totalLabel.textContent = somar(parseFloat(produto.preco), parseFloat(totalLabel.textContent));
    })

    liProduto.querySelector('.subtrair').addEventListener('click', (e) => {
        inputQtd.textContent = parseInt(inputQtd.textContent) - 1;



        totalLabel.textContent = subtrair(parseFloat(totalLabel.textContent), parseFloat(produto.preco));

    })

    liProduto.querySelector('.excluir').addEventListener('click', (e) => {

        arrayCarrinho = getArrayStorage();

        subtotal = subtrair(parseFloat(totalLabel.textContent), parseFloat(inputQtd.textContent * produto.preco));

        let filmeLi = arrayCarrinho.findIndex(filme => filme.titulo == e.target.parentNode.parentNode.children[1].innerHTML);

        arrayCarrinho.splice(filmeLi, 1);

        e.target.parentNode.parentNode.remove();

        setArrayStorage(arrayCarrinho);


        $('#total').text(subtotal);

    })

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
    var tipofrete;

    if (document.getElementById("pac").checked) {
        frete = 10;
        tipofrete = "PAC";
    } else {
        frete = 15;
        tipofrete = "SEDEX";
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
    document.getElementById("data").innerHTML = data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear();
    document.getElementById("formapagamento").innerHTML = formapagam;
    document.getElementById("fretevalor").innerHTML = tipofrete + " - R$ " + frete;
    document.getElementById("subtotalresumoo").innerHTML = "R$ " + ((frete + (parseFloat(totalprodutosss))));
    document.getElementById("totaldesconto").innerHTML = desc + "% ==== R$ " + descontoCalc;
    document.getElementById("totalresumoo").innerHTML = "R$ " + totalDesc;

}

function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
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


function salvarVenda() {
    let pagamento = document.getElementById('formapagamento').innerHTML;
    const desconto = document.getElementById('totaldesconto').innerHTML;
    const frete = document.getElementById('fretevalor').innerHTML;

    const subtotalresumoo = document.getElementById('subtotalresumoo').innerHTML;
    const totalresumoo = document.getElementById('totalresumoo').innerHTML;
    let venda = {
        listaProdutos: getArrayStorage(),
        formaPagamento: pagamento,
        frete: frete,
        desconto: desconto,
        subtotalresumo: subtotalresumoo,
        totalresumo: totalresumoo,
    }
    localStorage.setItem('venda', JSON.stringify(venda));
}

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
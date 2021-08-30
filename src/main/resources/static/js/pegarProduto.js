function novoProduto() {
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

function getStorageLogada() {
    return JSON.parse(localStorage.getItem('pessoaLogada')) || [];
}


function setArrayStorage(arr) {
    localStorage.setItem('listaProdutos', JSON.stringify(arr)) || [];
}

function getArrayStorage() {
    return JSON.parse(localStorage.getItem('listaProdutos')) || [];
}

let arrayCarrinho = [];

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

$(function () {
    var pessoalogada = getStorageLogada();
    document.getElementById("nomeusuariologado").innerHTML = pessoalogada.nome;
    let botao = document.getElementsByClassName('btn-success');

    for (let i = 0; i < botao.length; i++) {
        let buttonselecionado = botao[i];
        buttonselecionado.addEventListener('click', function () {
          let li = buttonselecionado.parentElement.parentElement;

          let titulo = li.querySelector('.produtos-titulo').textContent;
          let preco = li.querySelector('.produtos-preco').textContent;
          var imagem = li.querySelector(".produtos-img").src;
          let produto = {
                titulo,
                preco,
                imagem
        }

        let prod = [];
        
        prod.push(produto);
        console.log("prod ",prod)
        arrayCarrinho = getArrayStorage();
        arrayCarrinho.forEach(element => {
            prod.push(element);
        });
        console.log("prod dps",prod)
        setArrayStorage(prod);

        });
    }




})

const btAdicionar = document.querySelector("#btAdicionar");


btAdicionar.addEventListener('click', function (e) {
    e.preventDefault();
   
    setProduto();
    
    
    
})

function setArrayStorage(arr) {
    localStorage.setItem('listaProdutos', JSON.stringify(arr))|| [];
    //Storage.length('listaProdutos');
}

function getArrayStorage() {
    return JSON.parse(localStorage.getItem('listaProdutos')) || [];
}

function setProduto() {

    let produto = novoProduto();
    // let prod = [];
    // prod.push(produto);

    arrayCarrinho = getArrayStorage();
    // se tem atualiza se não adiciona

    const posicao = arrayCarrinho.findIndex(item => item.idItem == produto.idItem)
    if (posicao !== -1) arrayCarrinho[posicao] = produto;
    else   arrayCarrinho.push(produto);
    //lista.empt()
    setArrayStorage(arrayCarrinho);
    

    


}

function novoProduto() {
    const titulo = document.querySelector('.produtos-titulo');
    const preco = document.querySelector('.produtos-preco');
    const imagem = document.querySelector(".produtos-img");
    const idItem = document.getElementById("idItem").innerHTML;
    const qtd = $("#qtd").val();
    let produto = {
        idItem: idItem,
        titulo: titulo.innerHTML,
        preco: preco.innerHTML,
        qtd: qtd,
        imagem: imagem.src
    }
    return produto;
}

function getStorageLogada() {
    return JSON.parse(localStorage.getItem('pessoaLogada')) || [];
}




let arrayCarrinho = [];


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

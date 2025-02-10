const buscarProdutoId = () => {
    const produtoAtual = new URLSearchParams(document.location.search).get('produto')

    const boxProduto = document.getElementById('produto');


    fetch(`https://fakestoreapi.com/products/${produtoAtual}`)
    .then(res => res.json()).then(json => boxProduto.innerHTML += componenteProdutoUnico(json));
};
import componenteProdutoUnico from "../components/produtoUnico.js";

function buscarProdutoId (){
    const produtoAtual = new URLSearchParams(document.location.search).get('produto');

    fetch(`https://fakestoreapi.com/products/${produtoAtual}`)
    .then(res => res.json())
    .then(json => {
        document.getElementById('produto').innerHTML += componenteProdutoUnico(json)
    });
};

function clickProdutoFavorito(event){
    const favoritado = event.target.dataset.produto;
    
    if(!favoritado){
        return;
    }
 
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    
    if(!favoritos.includes(favoritado)){
        favoritos.push(favoritado);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        event.target.classList.add("favoritado")
    } else {
        const index = favoritos.indexOf(favoritado);
        if (index !== -1) {
            favoritos.splice(index, 1);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
            event.target.classList.remove("favoritado");
        }
    }
}
document.addEventListener('click', clickProdutoFavorito);

buscarProdutoId();
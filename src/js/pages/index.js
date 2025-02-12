import componenteProduto from "../components/produtos.js";
import renderizarFiltro from "../components/filtro.js";

if(!sessionStorage.getItem('userToken')){
    window.location.href = 'login.html';
}

async function buscarProdutos(categoria = "") {
    const url = categoria 
        ? `https://fakestoreapi.com/products/category/${categoria}` 
        : "https://fakestoreapi.com/products/";

    const app = document.getElementById('app');
    const produtosContainer = document.getElementById('produtosContainer');

    const produtos = await fetch(url).then(res => res.json());
    produtosContainer.innerHTML = produtos.map(componenteProduto).join('');

}

async function buscarCategorias() {
    const app = document.getElementById('app');

    const categorias = await fetch('https://fakestoreapi.com/products/categories').then(res => res.json());

    app.innerHTML = renderizarFiltro(categorias) + '<div id="produtosContainer"></div>';

    document.querySelector('#filtroProdutos select').addEventListener('change', (event) => {
        buscarProdutos(event.target.value);
    });

    buscarProdutos();
}

buscarCategorias();

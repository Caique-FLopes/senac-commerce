import componenteProduto from "../components/produtos.js";

const renderizarFiltro = (categorias) => {
    return `
        <div id="filtroProdutos">    
            <select>
                <option value="">Todas as categorias</option>
                ${categorias.map(categoria => `<option value="${categoria}">${categoria}</option>`).join('')}
            </select>
        </div>
    `;
};

async function buscarProdutos(categoria = "") {
    const url = categoria 
        ? `https://fakestoreapi.com/products/category/${categoria}` 
        : "https://fakestoreapi.com/products/";

    const app = document.getElementById('app');
    const produtosContainer = document.getElementById('produtosContainer');

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erro ao carregar produtos: ${res.statusText}`);

        const produtos = await res.json();

        produtosContainer.innerHTML = produtos.map(componenteProduto).join('');
    } catch (error) {
        console.error(error);
        produtosContainer.innerHTML = "<p>Erro ao carregar produtos.</p>";
    }
}

async function buscarCategorias() {
    const app = document.getElementById('app');

    try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        if (!res.ok) throw new Error(`Erro ao carregar categorias: ${res.statusText}`);

        const categorias = await res.json();

        app.innerHTML = renderizarFiltro(categorias) + '<div id="produtosContainer"></div>';

        document.querySelector('#filtroProdutos select').addEventListener('change', (event) => {
            buscarProdutos(event.target.value);
        });

        buscarProdutos();
    } catch (error) {
        console.error(error);
        app.innerHTML = "<p>Erro ao carregar categorias.</p>";
    }
}

buscarCategorias();

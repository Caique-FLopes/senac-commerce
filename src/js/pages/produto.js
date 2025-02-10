
const buscarProdutoId = () => {
    const produtoAtual = new URLSearchParams(document.location.search).get('produto')

    const boxProduto = document.getElementById('produto');


    fetch(`https://fakestoreapi.com/products/${produtoAtual}`)
    .then(res => res.json()).then(json => boxProduto.innerHTML += componenteProdutoUnico(json));
};

const componenteProdutoUnico = ({title, image, price, id, description, category}) => {
    let galeria = [];
    for(let i = 0; i < 3; i++){
        galeria = [...galeria, image];
    }

    

    console.log(galeria)
    return `
        <div id="boxProduto">
            <div class="galeriaProduto">
                <div class="listaImgs">
                    <ul>
                        ${galeria.map(
                            (img, index) => {
                                return `
                                    <li class="imgsProduto" key=${index}>
                                        <img src=${img} />
                                    </li>
                                `
                            }
                        ).join('')}
                    </ul>
                </div>
            </div>
            <div class="infoProduto">
                <h1>${title}</h1>
                <span id="category">${category}</span>
                <span class="preco">R$ ${price}</span>
                <p>${description}</p>
                <div class="cta-produtos">
                <a href="./carrinho.html?produto=${id}" id="addCarrinho">Adicionar ao Carrinho</a>
                <button data-produto=${id} id="favoritar">❤</button>
                </div>
            </div>
        </div>
    `;
};

buscarProdutoId()
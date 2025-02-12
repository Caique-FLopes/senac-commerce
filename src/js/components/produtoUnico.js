const componenteProdutoUnico = ({title, image, price, id, description, category}) => {
    let galeria = [];
    for(let i = 0; i < 3; i++){
        galeria = [...galeria, image];
    } 
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
                <button data-produto=${id} id="favoritar" class="${!JSON.parse(localStorage.getItem("favoritos")).includes(id)? "favoritado" : ""}">❤</button>
                </div>
            </div>
        </div>
    `;
};

export default componenteProdutoUnico;
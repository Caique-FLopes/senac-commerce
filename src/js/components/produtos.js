const componenteProduto = ({title, image, price, id}) => {
    
    return `
        <div class="produto">
            <a href="./produto.html?produto=${id}">
                <div class="imgProduto">
                    <img src="${image}">
                </div>
                <div class="infoProduto">
                    <h2>${title}</h2>
                    <p class="preco">R$ ${price}</p>
                </div>
            </a>
        </div>
    `;
};

export default componenteProduto;
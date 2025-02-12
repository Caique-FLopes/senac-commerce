const renderizarFiltro = (categorias) => {
    return `
        <div id="filtroProdutos">    
            <select>
                <option value="">Todas as categorias</option>
                ${categorias.map(categoria => `<option value="${categoria}">${categoria}</option>`).join("")}
            </select>
        </div>
    `;
};

export default renderizarFiltro;
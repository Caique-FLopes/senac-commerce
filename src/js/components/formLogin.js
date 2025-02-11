const formLogin = () => {

    return `
        <form name="formLogin">
            <div class="containerInput">
                <label for="nomeUsuario">Usuario:</label>
                <input type="text" id="nomeUsuario" name="nomeUsuario" placeholder="Usuario123">
            </div>
            <div class="containerInput">
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" placeholder="Senha">
            </div>
            <div class="ctaForm">
                <button type="submit">Teste</button><a href="./cadastro.html">Cadastrar</a>
            </div>
        </form>
    `;
};

export default formLogin;
const mostrarUsuario = ({email, name, username, phone, password}) => {
    return `<form name="infoUsuario">
        <div class="containerInput">
            <label for="email">Email: </label>
            <input type="mail" id="email" name="email" value=${email} disabled>
        </div>
        <div class="containerInput">
            <label for="senha">senha: </label>
            <input type="password" id="senha" name="senha" value=${password} >
        </div>
        <div class="containerInput">
            <label for="nome">Nome: </label>
            <input type="text" id="nome" name="primeiroNome" value=${name.firstname} disabled>
            <input type="text" name="ultimoNome" value=${name.lastname}>
        </div>
        <div class="containerInput">
            <label for="usuario">Usuario: </label>
            <input type="text" name="usuario" id="usuario" value=${username}>
        </div>
        <div class="containerInput">
            <label for="telefone">Telefone: </label>
            <input type="tel" name="telefone" id="telefone" value=${phone}>
        </div>
        <div class="ctaProdutos">
            <input type="submit" value="Atualizar">
        </div>
    </form>`;
}

export default mostrarUsuario;
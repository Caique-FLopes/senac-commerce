import formLogin from "../components/formLogin.js";

async function pesquisarTodosUsuarios(){
    const usuarios = await fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(json=>json)

    return usuarios;
};

async function validarUsuario(usuario){
    const usuarios = await pesquisarTodosUsuarios();
    const [usuarioAutenticado] = usuarios.filter(user => user.username === usuario);

    return usuarioAutenticado.id;
};

async function sessionUsuario(token, usuario){
    sessionStorage.clear();
    const setToken = sessionStorage.setItem('userToken', JSON.stringify(token));
    const setUser = sessionStorage.setItem('userId', await validarUsuario(usuario));
    if(setToken && setUser){
        return true;
    }
}

async function fetchLogin(usuario, senha){

    const token = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usuario,
            password: senha
        })
    })
    .then(res=>res.json())
    .then(json=>json);

    await sessionUsuario(token, usuario);
    window.location.href = 'index.html';

};

function enviarLogin(event){
    event.preventDefault();

    const usuario = event.target.nomeUsuario.value;
    const senha = event.target.senha.value ;

    if (usuario && senha) {
        fetchLogin(usuario, senha);
    } else {
        alert("Preencha todos os campos.");
    }
}

document.getElementById('login').innerHTML = formLogin();

document.addEventListener('submit', enviarLogin );
import mostrarUsuario from "../components/usuario.js";

const userId = sessionStorage.getItem("userId");

fetch(`https://fakestoreapi.com/users/${userId}`)
.then(res=>res.json())
.then(json => {
    document.getElementById("usuario").innerHTML += mostrarUsuario(json);
})

document.addEventListener("submit", (event) => {
    event.preventDefault()
    if(!event.target == infoUsuario){
        return;
    }

    const jsonAtt = {
        email: infoUsuario.email.value,
        username: infoUsuario.usuario.value,
        password: infoUsuario.senha.value,
        name:{
            firstname: infoUsuario.primeiroNome.value,
            lastname: infoUsuario.ultimoNome.value
        },
        phone: infoUsuario.telefone.value
    }

    fetch(`https://fakestoreapi.com/users/${userId}`,{
        method:"PATCH",
        body:JSON.stringify(jsonAtt)
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
})

// import formCarrinho from "../components/formCarrinho";


formCarrinho.addEventListener('change', async (event) => {
    if(event.target == formCarrinho.cep){
        const dadosCep = await fetch(`https://viacep.com.br/ws/${event.target.value}/json`).then(res => res.json()).then(json => json);
    
        console.log(dadosCep);
        if(!formCarrinho.estado.value){
            formCarrinho.estado.value = dadosCep.estado
            formCarrinho.cidade.value = dadosCep.localidade
            formCarrinho.logradouro.value = dadosCep.logradouro
        }

    } else if(formCarrinho.estado.value&&formCarrinho.cidade.value&&formCarrinho.logradouro.value){
        const endereco = await fetch(`https:viacep.com.br/ws/ms/campo grande/ministro azevedo/json/`)
        .then(res => res.json())
        .then(json => json[0].cep);

        if (endereco && endereco.length > 0) {
            formCarrinho.cep.value = endereco;
        }
    }
});

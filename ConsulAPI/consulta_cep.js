// Preencher formulario com dados de retorno

function preencherFormulario(endereco) {
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
    ducument.getElementById("ibge").value = endereco.ibge;
    ducument.getElementById("siafi").value = endereco.siafi;
    ducument.getElementById("ddd").value = endereco.ddd;

}

// Limpar dados do formulario quando erro
function clearFormulario(endereco) {
    document.getElementById("bairro").value = endereco.bairro = "";
    document.getElementById("cidade").value = endereco.localidade = "";
    document.getElementById("estado").value = endereco.uf = "";
    ducument.getElementById("numero").value = endereco.numero = "";
    ducument.getElementById("cep").value = endereco.cep = "";
    ducument.getElementById("ibge").value = endereco.ibge = "";
    ducument.getElementById("siafi").value = endereco.siafi = "";
    ducument.getElementById("ddd").value = endereco.ddd = "";

}

// Limpar todo o formulario
function clearFormularioFull() {
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
    ducument.getElementById("numero").value = "";
    ducument.getElementById("cep").value = "";
    ducument.getElementById("ibge").value = "";
    ducument.getElementById("siafi").value = "";
    ducument.getElementById("ddd").value = "";

}

// Funcao para verificar se o que foi digitado e somente numero
function eNumero(numero) {
    return /^[0-9]+$/.test(numero);
    
}

// Funcao para verificar se o CEP e valido atraves de contagem
// do tamanho pelo .length e atraves da condicao na funcao eNumero
function cepValido(cep) {
    return cep.length == 8 && eNumero(cep);
}

// Funcao para pesquisar o cep via API
async function pesquisarCEP() {
    
    const cep = document.getElementById("cep").value.replace("-","");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    

    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        console.log(endereco);

        if(endereco.hasOwnProperty("erro")){
            document.getElementById("endereco").value = "CEP não encontrado!"
            clearFormulario(endereco)
        } else {
            preencherFormulario(endereco);
        }

        
    } else {
        document.getElementById("endereco").value = "CEP incorreto!"
        clearFormulario(endereco)
    }

}

// Funcao para salvar dados
function salvar(){
    alert("Aluno Cadastrado!")
}


document.getElementById("salva").addEventListener("click", salvar)

document.getElementById("clearInput").addEventListener("click",clearFormularioFull)

document.getElementById("cep").addEventListener("focusout", pesquisarCEP);


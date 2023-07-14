
// ====================================================== FUNÇÕES PARA MOSTRAR COR NOS ERROS
function mudarCorErro(campo){
    campo.style.background = "#FFB6C1";
}
function mudarCorNormal(campo){
    campo.style.background = "#FFFFFF";
}

// ====================================================== FUNÇÕES DE VALIDAÇÃO DOS DADOS PESSOAIS
function validarNome(nome) {
    let auxiliar = nome.value.indexOf(' '); // vendo se tem o caractere espaço apenas
    if (auxiliar > 1 && nome.value.length > 7) { // se o espaço tiver no "meio" e o nome for maior q 7
        mudarCorNormal(nome);
        return true;
    } else {
        mudarCorErro(nome);
        return false;
    }
}

function validarRg(rg) {
    if (rg.value.length === 9) { // tamanho padrao em alguns estados
        mudarCorNormal(rg);
        return true;
    } else {
        mudarCorErro(rg);
        return false;
    }
}

function validarEmail(email) {
    var atPos = email.value.indexOf('@'); // encontrando o index do arroba
    if (atPos < 4 || email.value.length - atPos - 1 < 8) { // se apos o arroba não tem os caractere necessários
        mudarCorErro(email);
        return false;
    } else {
        mudarCorNormal(email);
        return true;
    }
}

function validarSenha(senha) {
    var specialChars = '!@#$%^&*'; // caracteres especiais aceitos
    var auxiliar = false;
    for (var i = 0; i < senha.value.length; i++) {
        if (specialChars.indexOf(senha.value.charAt(i)) > -1) {
            auxiliar = true; // verificando se há caractere especial
        }
    }

    if (auxiliar && senha.value.length > 8) { // se tem caractere especial e o tamanho maior q 8
        mudarCorNormal(senha);
        return true;
    } else {
        mudarCorErro(senha);
        return false;
    }
}

function validarConfirmaSenha(confirma) {
    let senha = document.getElementById('senha').value;
    if (senha === confirma.value) {
        mudarCorNormal(confirma);
        return true;
    } else {
        mudarCorErro(confirma);
        return false;
    }
}

// ====================================================== FUNÇÕES DE VALIDAÇÃO DO ENDEREÇO

// function validarCep(cep){
//     const form = document.getElementById('formCadastro');
//     if (cep.value)
//     // limpando os campos a cada mudança do cep
//     form.estado.value = ``;
//     form.cidade.value = ``;
//     form.bairro.value = ``;
//     form.rua.value = ``;
//     console.log(form.cep.value)
//     console.log(cep.value)
//     var req = new XMLHttpRequest()
//     req.open("GET", `https://viacep.com.br/ws/${form.cep.value}/json/`);
//     req.onload = function(){
//         if(req.status === 200){
//             resObj = JSON.parse(req.responseText);

//             form.estado.value = resObj.uf;
//             form.cidade.value = resObj.localidade;
//             form.bairro.value = resObj.bairro;
//             form.rua.value = resObj.logradouro;
//         } else {
//             // alert("Cep invalido");
//             throw new Error("oops");
//         }
//     }
//     req.send();
// }

function limparCamposEndereco(form){
    // função para limpar os campos automaticos do endereço
    form.cidade.value = ``;
    form.estado.value = ``;
    form.bairro.value = ``;
    form.rua.value = ``;
}

function validarCep(form){
    if (form.cep.value.length === 8) { // se o cep tiver o tamanho padrão de 8
        var req = new XMLHttpRequest();
        req.open("GET", `https://viacep.com.br/ws/${form.cep.value}/json/`);
        req.onload = function(){
            if(req.status === 200){ // se houver retorno da api
                resObj = JSON.parse(req.responseText);
                if (!resObj.erro) { // se o cep não retornou erro, ou seja, está com informações válidas
                    mudarCorNormal(form.cep);
                    form.cidade.value = resObj.localidade;
                    form.estado.value = resObj.uf;
                    form.bairro.value = resObj.bairro;
                    form.rua.value = resObj.logradouro;
                    return true;
                } else {
                    mudarCorErro(form.cep);
                    throw new Error("Cep não encontrado...");
                }
            } else {
                mudarCorErro(form.cep);
                throw new Error("Cep não encontrado......");
            }
        }
        req.send();
    } else {
        mudarCorErro(form.cep);
    }
}

// ====================================================== FUNÇÃO DE VALIDAÇÃO DO ENVIO DO FORMULARIO

function validarFormulario(form){

    if(validarNome(form.nome) && validarRg(form.rg) && validarEmail(form.email) && validarSenha(form.senha) && validarConfirmaSenha(form.senhaConfirma)){
        alert(form.nome.value + ' está na lista de espera!\nEntraremos em contato pelo email: ' + form.email.value);
        return true;
    } else {
        alert("Formulário não validadado!\nVerifique se os campos cumprem os requisitos");
        return false;
    }
}

// ====================================================== INICIO DOS EVENT LISTENERS

document.getElementById('nome').addEventListener("keyup", function(event){
    event.preventDefault()
    validarNome(event.target)
})

document.getElementById('rg').addEventListener("keyup", function(event){
    event.preventDefault()
    validarRg(event.target)
})

document.getElementById('email').addEventListener("keyup", function(event){
    event.preventDefault()
    validarEmail(event.target)
})

document.getElementById('senha').addEventListener("keyup", function(event){
    event.preventDefault()
    validarSenha(event.target)
})

document.getElementById('senhaConfirma').addEventListener("keyup", function(event){
    event.preventDefault()
    validarConfirmaSenha(event.target)
})

document.getElementById('cep').addEventListener("keyup", function(event){
    event.preventDefault()
    // limpando os campos a cada mudança do cep
    limparCamposEndereco(event.view.document.getElementById('formCadastro'));
    try {
        validarCep(event.view.document.getElementById('formCadastro'));
    } catch(e) {
        console.log(e); 
        console.error(e);
    }
})

// ====================================================== ENVIO DO FORMULARIO PARA O CADASTRO

document.getElementById('formCadastro').addEventListener("submit", function(event){
    if (!validarFormulario(event.target)){
        event.preventDefault()
    }
})



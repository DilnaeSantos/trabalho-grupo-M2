
// ====================================================== FUNÇÕES DE TESTES

function preencherCampos(){
    var nome = document.getElementById('nome');
    var rg = document.getElementById('rg');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var senhaConfirma = document.getElementById('senhaConfirma');
    var numero = document.getElementById('numero');

    nome.value = `Creusa Aparecida`;
    rg.value = `123789466`;
    email.value = `Creusinha@hotmail.com`;
    senha.value = `Senh4uWu#`;
    senhaConfirma.value = `Senh4uWu#`;
    numero.value = `810`;
}

// ====================================================== FUNÇÕES PARA MOSTRAR COR NOS ERROS

function mudarCorErro(campo){
    campo.style.background = "#FF6961";
}
function mudarCorNormal(campo){
    campo.style.background = "#FFFFFF";
}

// ====================================================== FUNÇÕES DE VALIDAÇÃO DOS DADOS PESSOAIS

function validarNome(nome) {
    var auxiliar = nome.value.indexOf(' '); // vendo se tem o caractere espaço apenas
    if (auxiliar > 1 && nome.value.length > 7) { // se o espaço tiver no "meio" e o nome for maior q 7
        mudarCorNormal(nome);
        return true;
    } else {
        mudarCorErro(nome);
        return false;
    }
}

function validarRg(rg) {
    if (rg.value.length === 9) {
        mudarCorNormal(rg);
        return true;
    } else {
        mudarCorErro(rg);
        return false;
    }
}

function validarEmail(email) {
    var atPos = email.value.indexOf('@');
    if (atPos < 4 || email.value.length - atPos - 1 < 8) {
        mudarCorErro(email);
        return false;
    } else {
        mudarCorNormal(email);
        return true;
    }
}

function validarSenha(senha) {
    var specialChars = '!@#$%^&*';
    var auxiliar = false;
    for (var i = 0; i < senha.value.length; i++) {
        if (specialChars.indexOf(senha.value.charAt(i)) > -1) {
            auxiliar = true; // verificando se há caractere especial
        }
    }

    if ( auxiliar && senha.value.length > 8 && senha.value.length < 13) {
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

function validarCep(cep){
    
    const form = document.getElementById('formCadastro');

    // limpando os campos a cada mudança do cep
    form.estado.value = ``;
    form.cidade.value = ``;
    form.bairro.value = ``;
    form.rua.value = ``;
    
    var req = new XMLHttpRequest()
    req.open("GET", `https://viacep.com.br/ws/${cep.value}/json/`);
    req.onload = function(){
        if(req.status === 200){
            resObj = JSON.parse(req.responseText);

            form.estado.value = resObj.uf;
            form.cidade.value = resObj.localidade;
            form.bairro.value = resObj.bairro;
            form.rua.value = resObj.logradouro;
        } else {
            alert("Cep invalido");
        }
    }
    req.send();
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

document.getElementById('nome').addEventListener("change", function(event){
    event.preventDefault()
    validarNome(event.target)
})

document.getElementById('rg').addEventListener("change", function(event){
    event.preventDefault()
    validarRg(event.target)
})

document.getElementById('email').addEventListener("change", function(event){
    event.preventDefault()
    validarEmail(event.target)
})

document.getElementById('senha').addEventListener("change", function(event){
    event.preventDefault()
    validarSenha(event.target)
})

document.getElementById('senhaConfirma').addEventListener("change", function(event){
    event.preventDefault()
    validarConfirmaSenha(event.target)
})

document.getElementById('cep').addEventListener("change", function(event){
    event.preventDefault()
    validarCep(event.target)
})

// ====================================================== ENVIO DO FORMULARIO PARA O CADASTRO

document.getElementById('formCadastro').addEventListener("submit", function(event){
    if (!validarFormulario(event.target)){
        event.preventDefault()
    }
})



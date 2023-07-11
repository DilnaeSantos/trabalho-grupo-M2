
// ====================================================== FUNÇÕES DE TESTES

function preencherCampos(){
    var nome = document.getElementById('nome');
    var rg = document.getElementById('rg');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var senhaConfirma = document.getElementById('senhaConfirma');
    var numero = document.getElementById('numero');

    nome.value = `Creusa Aparecida`;
    rg.value = `12.378.946-6`;
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
    // console.log("foi - nome " + nome.value); // só para ver se entrou na função
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
    // console.log("foi - rg " + rg); // só para ver se entrou na função
    
    if (rg.value.length === 9) {
        mudarCorNormal(rg);
        return true;
    } else {
        mudarCorErro(rg);
        return false;
    }
    console.log("padrao considerado : 12.345.678-9");
}

function validarEmail(email) {
    // console.log("foi - email " + email); // só para ver se entrou na função
    
    var atPos = email.value.indexOf('@');
    if (atPos < 4 || email.value.length - atPos - 1 < 8) {
        console.log('Email inválido!');
        mudarCorErro(email);
        return false;
    } else {
        console.log("email ok");
        mudarCorNormal(email);
        return true;
    }
}

function validarSenha(senha) {
    // console.log("foi - senha " + senha); // só para ver se entrou na função
    
    var specialChars = '!@#$%^&*';
    var auxiliar = false;
    for (var i = 0; i < senha.value.length; i++) {
        if (specialChars.indexOf(senha.value.charAt(i)) > -1) {
            auxiliar = true; // verificando se há caractere especial
        }
    }

    if ( auxiliar && senha.value.length > 8 && senha.value.length < 13) {
        console.log("deu certo a senha");
        mudarCorNormal(senha);
        return true;
    } else {
        console.log('Senha inválida! A senha deve ter de 8 a 13 caracteres e pelo menos um caractere especial.');
        mudarCorErro(senha);
        return false;
    }
}

function validarConfirmaSenha(confirma) {
    // console.log("foi - confirma " + confirma);
    
    let senha = document.getElementById('senha').value;
    // console.log("foi - senha " + senha);

    if (senha === confirma.value) {
        console.log('senha confirmada');
        mudarCorNormal(confirma);
        return true;
    } else {
        console.log('senha diferente');
        mudarCorErro(confirma);
        return false;
    }
}

// ====================================================== FUNÇÕES DE VALIDAÇÃO DO ENDEREÇO

function validarCep(cep){
    
    const estado = document.getElementById('estado');
    const cidade = document.getElementById('cidade');
    const bairro = document.getElementById('bairro');
    const rua = document.getElementById('rua');

    estado.value = ``;
    cidade.value = ``;
    bairro.value = ``;
    rua.value = ``;
    
    var req = new XMLHttpRequest()
    req.open("GET", `https://viacep.com.br/ws/${cep.value}/json/`);
    req.onload = function(){
        console.log(req.status);
        if(req.status === 200){
            resObj = JSON.parse(req.responseText);

            estado.value = resObj.uf;
            cidade.value = resObj.localidade;
            bairro.value = resObj.bairro;
            rua.value = resObj.logradouro;
        } else {
            alert("Cep invalido");
        }
    }
    req.send();
}

// ====================================================== FUNÇÃO DE VALIDAÇÃO DO ENVIO DO FORMULARIO

function validarFormulario(form){

    if(validarNome(form.nome) && validarRg(form.rg) && validarEmail(form.email) && validarSenha(form.senha) && validarConfirmaSenha(form.senhaConfirma)){
        alert(form.nome.value + ' está na lista de espera');
        return true;
    } else {
        alert("deu ruim");
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



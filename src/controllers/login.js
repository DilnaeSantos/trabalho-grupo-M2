document.getElementById('submit').addEventListener('click', function(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(!validarEmail(usuario)) {
        alert('Email inválido!');
        return;
    }

    if(!validarSenha(senha)) {
        alert('Senha inválida! A senha deve ter de 8 a 13 caracteres e pelo menos um caracter especial!');
        return;
    }


    alert('Formulário Válido!');
});

function validarEmail(email) {
    var atPos = email.indexOf('@');
    if (atPos < 4 || email.length - 1 < 8) {
        return false;
    }

    return true;
}

function validarSenha(){
    if (senha.length < 8 || senha.length > 13) {
        return false;
    }

    var caracterEspecial = '!@#$%^&*';
    for (var i = 0; i < senha.length; i++){
        if (caracterEspecial.indexOf(senha.charAt(i)) > -1) {
            return true;
        }
    }

    return false;
}
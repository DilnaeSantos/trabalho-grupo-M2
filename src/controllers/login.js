document.getElementById('submit').addEventListener('click', function () {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (!validarEmail(usuario)) {
        alert('Email inválido!');
        return;
    }

    if (!validarSenha(senha)) {
        alert('Senha inválida! A senha deve ter de 8 a 13 caracteres e pelo menos um caractere especial.');
        return;
    }

    // Se a validação passar, faça o login ou envie o formulário
    // Aqui você pode adicionar o código para fazer o login ou enviar o formulário para o servidor
    // Por exemplo:
    // document.forms[0].submit();

    alert('Formulário válido!'); // Apenas para fins de exemplo
});

function validarEmail(email) {
    var atPos = email.indexOf('@');
    if (atPos < 4 || email.length - atPos - 1 < 8) {
        return false;
    }
    return true;
}

function validarSenha(senha) {
    if (senha.length < 8 || senha.length > 13) {
        return false;
    }
    var specialChars = '!@#$%^&*';
    for (var i = 0; i < senha.length; i++) {
        if (specialChars.indexOf(senha.charAt(i)) > -1) {
            return true;
        }
    }
    return false;
}

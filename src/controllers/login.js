/* classe do FOrmulário */
class LoginForm {
    constructor(){
        this.usuario = '';
        this.senha = '';
    }

    /* validação do email */
    validarEmail() {
        var atPos = this.usuario.indexOf('@');
        if (atPos < 4 || this.usuario.length - atPos - 1 < 8) /* garante que o email tenha pelo menos 3 caracteres antes do @, e que após o @ tenha pelo menos 8 caracteres (gmail.com, hotmail.com) */
            return false;
    }

    
}
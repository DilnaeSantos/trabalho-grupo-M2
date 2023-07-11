/* classe do formulário */
class LoginForm {
    constructor() {
      this.usuario = '';
      this.senha = '';
    }
  
    /* validação do email */
    validarEmail() {
      var atPos = this.usuario.indexOf('@');
      if (atPos < 4 || this.usuario.length - atPos - 1 < 8) {  /* garante que o email tenha as quantidades válidas pra um email antes e depois do @ */
          return false;
      }
      return true;
    }
  
    /* validação da senha */
    validarSenha() {
      if (this.senha.length < 8) {   /* verifica se a senha tem o valor mínimo de 8 caracteres */
          return false;
      }
      var specialChars = '!@#$%^&*';   /* verifica se a senha tem pelo menos 1 caracteres  */
      for (var i = 0; i < this.senha.length; i++) {
          if (specialChars.indexOf(this.senha.charAt(i)) > -1) {
              return true;
          }
      }
      return false;
    }
    
    /* lógica de submissão do formulário */
    submeterFormulario() {
      if (!this.validarEmail()) {
          alert('Email inválido!');
          return;
      }
  
      if (!this.validarSenha()) {
          alert('Senha inválida! A senha deve ter no mínimo 8 caracteres e pelo menos um caractere especial.');
          return;
      }
  
      /* redireciona para a pagina dashboard após a validação correta do formulário */
      window.location.href = '../html/dashboard.html';
    }
  }
  
  /* instânciando o objeto loginForm */
  var loginForm = new LoginForm();
  
  /* utilizando propriedades da classe LoginForm */
  document.getElementById('submit').addEventListener('click', function () {
      loginForm.usuario = document.getElementById('usuario').value;
      loginForm.senha = document.getElementById('senha').value;
      loginForm.submeterFormulario();
  });
  
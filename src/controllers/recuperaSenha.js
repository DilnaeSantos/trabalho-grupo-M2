class Formulario {
    constructor() {
      this.emailInput = document.getElementById('email');
      this.submitButton = document.getElementById('submit');
      this.submitButton.addEventListener('click', this.submeterFormulario.bind(this));
    }
  
    submeterFormulario() {
      var email = this.emailInput.value;
  
      if (!this.validarEmail(email)) {
        alert('Email inválido!');
        return;
      }
  
      // Código adicional para submeter o formulário
  
      alert('Enviado Email de recuperação de senha!');
    }
  
    validarEmail(email) {
      var atPos = email.indexOf('@');
      if (atPos < 4 || email.length - atPos - 1 < 8) {
        return false;
      }
      return true;
    }
  }
  
  var formulario = new Formulario();
  
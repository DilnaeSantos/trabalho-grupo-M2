const btnEnvio = document.querySelector('#enviarBtn')

function comfirmação (event) {
    event.preventDefault()

    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let msg = document.querySelector('#msg').value
    let msgDeEnvio = document.querySelector('#msgDeEnvio')
    
  if (nome === '' || email === '' || msg === '') {
    console.log('erro campo invalido')
  } else {
    msgDeEnvio.textContent = 'E-mail enviado com sucesso'
    setTimeout(() => {
      document.querySelector('form').submit()
    },1460)
  }
}

btnEnvio.addEventListener('click', comfirmação)
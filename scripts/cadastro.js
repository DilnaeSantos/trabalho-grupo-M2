
document.getElementById('cep').addEventListener("change", function(event){
    event.preventDefault()

    const cep = document.getElementById('cep')
    const estado = document.getElementById('estado')
    const cidade = document.getElementById('cidade')
    const bairro = document.getElementById('bairro')
    const rua = document.getElementById('rua')

    estado.value = ``
    cidade.value = ``
    bairro.value = ``
    rua.value = ``
    
    var cepNumero = cep.value
    var req = new XMLHttpRequest()
    req.open("GET", `https://viacep.com.br/ws/${cepNumero}/json/`)
    req.send()
    req.onload = function(){
        if(req.status == 200){
            resObj = JSON.parse(req.responseText)

            estado.value = resObj.uf
            cidade.value = resObj.localidade
            bairro.value = resObj.bairro
            rua.value = resObj.logradouro
        }
    }
})

// document.getElementById('formCadastro').addEventListener("submit", function(event){
//     // event.preventDefault()

//     //falta verificaões de erros
//     alert('cadastrado na lista de espera')

// })


function preencherCampos(){
    var nome = document.getElementById('nome')
    var rg = document.getElementById('rg')
    var email = document.getElementById('email')
    var senha = document.getElementById('senha')
    var senhaConfirma = document.getElementById('senhaConfirma')
    var numero = document.getElementById('numero')


    nome.value = `Creusa`
    rg.value = `12378946-6`
    email.value = `Creusinha@hotmail.com`
    senha.value = `Senh4Secret4`
    senhaConfirma.value = `Senh4Secret4`
    numero.value = `810`
    
    
}
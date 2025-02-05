const form = document.getElementById('form-contato')

const imgVerificado = '<img src="img/verificar.png" alt="logo verificado"'

const contatosNo = []

const contatosNu = []

let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()
    addLinha()
    atualizaTabela()
    calculaContatos()
    atualizarQuantidadeDeContatos()
})

function addLinha() {
    const nomeContato = document.getElementById('nome-contato')
    const numeroContato = document.getElementById('numero-contato')
    
    if (contatosNo.includes(nomeContato.value) || contatosNu.includes(numeroContato.value)) {
        alert(`O nome do contato ${nomeContato.value} ou numero ${numeroContato.value} já foi adicionado!`)
    }else {
        contatosNo.push(nomeContato.value)
        contatosNu.push(numeroContato.value)


        let linha = '<tr>'
        linha += `<td>${nomeContato.value}</td>`
        linha += `<td>${numeroContato.value}</td>`
        linha += `<td>${imgVerificado}</td>`
        linha += '</tr>'
        
        linhas += linha
    }




    nomeContato.value = ''
    numeroContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('#tbody-1')
    corpoTabela.innerHTML = linhas
}


function atualizarQuantidadeDeContatos() {
    const QuantidadeDeContatos = calculaContatos()

    document.getElementById('quantidade-de-contatos').innerHTML = contatosNo.length
}

function calculaContatos() {
    let somaDasContatos = 0;

    for (let i = 0; i < contatosNo.length; i++) {
        somaDasContatos = contatosNo[i];
        
    }
    return somaDasContatos + contatosNo.length

}


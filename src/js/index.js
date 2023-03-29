const listaAgente = document.querySelectorAll('.agente')
const agentesCard = document.querySelectorAll('.cartao-agente')

listaAgente.forEach(agente => {
    agente.addEventListener('click', () => {
        const cartaoAgenteAberto = document.querySelector('.aberto')
        cartaoAgenteAberto.classList.remove('aberto')

        const idAgenteSelected = agente.attributes.id.value

        const idCartaoAgenteAbrir = 'cartao-' + idAgenteSelected

        const cartaoAgenteAbrir = document.getElementById(idCartaoAgenteAbrir)
        cartaoAgenteAbrir.classList.add('aberto')

        const agenteAtivoListagem = document.querySelector('.ativo')
        agenteAtivoListagem.classList.remove('ativo')

        const agenteSelectedListagem = document.getElementById(idAgenteSelected)
        agenteSelectedListagem.classList.add('ativo')
    })
})

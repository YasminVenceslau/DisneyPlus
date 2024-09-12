document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões que possuem o atributo 'data-tab-button'
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    // Adiciona um listener de clique para cada botão
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            // Obtém o valor do atributo 'data-tab-button' do botão clicado
            const abaAlvo = botao.target.dataset.tabButton;
            // Seleciona a aba correspondente ao valor do botão clicado
            const aba = document.querySelector(`[data-tab-id = ${abaAlvo}]`);
            // Esconde todas as abas
            escondeAbas();
            // Exibe a aba alvo adicionando a classe que a torna visível
            aba.classList.add('shows__list--is-active');
            // Remove o estado ativo dos outros botões
            removeBotatoAtivo();
            // Adiciona a classe de ativo ao botão clicado
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }

    // Função para remover o estado ativo de todos os botões de aba
    function removeBotatoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        // Itera sobre todos os botões e remove a classe de ativo
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }
    }

    // Função para esconder todas as abas
    function escondeAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        // Itera sobre todas as abas e remove a classe que as deixa visíveis
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }

});

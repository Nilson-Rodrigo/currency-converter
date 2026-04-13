/**
 * CONTROLADOR - Responsabilidade Única: orquestrar eventos
 */

class UIController {
    constructor() {
        this.inputValor = document.getElementById('valor');
        this.btnCalcular = document.getElementById('btnCalcular');
        this.btnNovo = document.getElementById('btnNovo');

        this.inicializarEventos();
    }

    /**
     * Inicializa todos os event listeners
     */
    inicializarEventos() {
        this.btnCalcular.addEventListener('click', () => this.calcular());
        this.btnNovo.addEventListener('click', () => this.resetar());

        this.inputValor.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.calcular();
            }
        });

        this.inputValor.addEventListener('input', (event) => {
            event.target.value = Validator.sanitizarValor(event.target.value);
        });
    }

    /**
     * Executa cálculo da decomposição
     */
    calcular() {
        try {
            const valor = parseFloat(this.inputValor.value);
            const resultado = MoneyDecomposer.decomporValor(valor);

            if (!resultado.verificarIntegridade()) {
                console.warn('⚠️ Integridade do resultado comprometida');
            }

            UIRenderer.exibirResultados(resultado);
            console.log('✅ Decomposição realizada:', resultado);

        } catch (erro) {
            alert(erro.message);
            this.inputValor.focus();
        }
    }

    /**
     * Reseta formulário
     */
    resetar() {
        UIRenderer.esconderResultados();
        this.inputValor.focus();
    }
}

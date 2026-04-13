/**
 * RENDERIZAÇÃO - Responsabilidade Única: gerar HTML
 */

class UIRenderer {
    /**
     * Renderiza linha de resultado
     * @private
     * @param {Object} item - {quantidade, descricao}
     * @returns {HTMLElement}
     */
    static criarLinhaResultado(item) {
        const row = document.createElement('div');
        row.className = 'result-row' + (item.quantidade === 0 ? ' zero' : '');

        row.innerHTML = `
            <span class="result-label">${item.quantidade} ${item.tipo}(s) de ${item.descricao}</span>
            <div class="result-value">${item.quantidade}</div>
        `;

        return row;
    }

    /**
     * Renderiza tabela de notas
     * @param {Array} notas - Array de notas
     */
    static renderizarNotas(notas) {
        const container = document.getElementById('tabelaNotas');
        container.innerHTML = '';

        notas.forEach(nota => {
            container.appendChild(this.criarLinhaResultado({
                ...nota,
                tipo: 'nota'
            }));
        });
    }

    /**
     * Renderiza tabela de moedas
     * @param {Array} moedas - Array de moedas
     */
    static renderizarMoedas(moedas) {
        const container = document.getElementById('tabelaMoedas');
        container.innerHTML = '';

        moedas.forEach(moeda => {
            container.appendChild(this.criarLinhaResultado({
                ...moeda,
                tipo: 'moeda'
            }));
        });
    }

    /**
     * Exibe seção de resultados
     * @param {DecomposicaoResultado} resultado
     */
    static exibirResultados(resultado) {
        // Renderiza tabelas
        this.renderizarNotas(resultado.notas);
        this.renderizarMoedas(resultado.moedas);

        // Exibe valor formatado
        const valorElement = document.getElementById('valorExibicao');
        valorElement.textContent = MoneyConverter.formatarMoeda(resultado.valorOriginal);

        // Mostra seção
        const section = document.getElementById('resultadosSection');
        section.style.display = 'block';

        // Scroll suave
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /**
     * Esconde seção de resultados
     */
    static esconderResultados() {
        document.getElementById('resultadosSection').style.display = 'none';
    }
}

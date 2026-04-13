/**
 * LÓGICA DE NEGÓCIO - Responsabilidade Única: algoritmo guloso
 */

class MoneyDecomposer {
    /**
     * Decompõe valor em notas e moedas usando algoritmo guloso
     * @param {number} valor - Valor em reais
     * @returns {DecomposicaoResultado}
     * @throws {Error} Se valor inválido
     */
    static decomporValor(valor) {
        // Valida valor
        const validacao = Validator.validarValor(valor);
        if (!validacao.isValid) {
            throw new Error(validacao.erro);
        }

        // Converte para centavos
        let saldo = MoneyConverter.paraCentavos(valor);

        // Processa notas (o saldo é atualizado internamente)
        const notas = this._processarDenominacoes(CurrencyConfig.NOTAS, saldo);
        
        // Calcula saldo restante após notas
        saldo = notas.reduce((restante, nota) => {
            return restante - (nota.quantidade * MoneyConverter.paraCentavos(nota.valor));
        }, saldo);

        // Processa moedas com o saldo restante
        const moedas = this._processarDenominacoes(CurrencyConfig.MOEDAS, saldo);
        
        // Calcula saldo final
        saldo = moedas.reduce((restante, moeda) => {
            return restante - (moeda.quantidade * MoneyConverter.paraCentavos(moeda.valor));
        }, saldo);

        // Verifica integridade (saldo deve ser 0)
        if (saldo !== 0) {
            console.warn(`⚠️ Saldo residual: ${saldo} centavos`);
        }

        return new DecomposicaoResultado(valor, notas, moedas);
    }

    /**
     * Processa uma lista de denominações
     * @private
     * @param {Array} denominacoes - Array de {valor, descricao}
     * @param {number} saldo - Saldo em centavos
     * @returns {Array} Array de {descricao, quantidade, valor}
     */
    static _processarDenominacoes(denominacoes, saldo) {
        const resultado = [];
        let saldoAtual = saldo;

        for (const denominacao of denominacoes) {
            const valorEmCentavos = MoneyConverter.paraCentavos(denominacao.valor);
            const quantidade = Math.floor(saldoAtual / valorEmCentavos);

            resultado.push({
                descricao: denominacao.descricao,
                quantidade: quantidade,
                valor: denominacao.valor,
                tipo: denominacao.tipo
            });

            // Atualiza o saldo para a próxima iteração
            saldoAtual -= quantidade * valorEmCentavos;
        }

        return resultado;
    }
}

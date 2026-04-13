/**
 * CONVERSÃO - Responsabilidade Única: converter entre unidades
 */

class MoneyConverter {
    /**
     * Converte reais para centavos (evita problemas de ponto flutuante)
     * @param {number} reais - Valor em reais
     * @returns {number} Valor em centavos
     */
    static paraCentavos(reais) {
        return Math.round(reais * 100);
    }

    /**
     * Converte centavos para reais
     * @param {number} centavos - Valor em centavos
     * @returns {number} Valor em reais
     */
    static paraReais(centavos) {
        return centavos / 100;
    }

    /**
     * Formata número como moeda brasileira
     * @param {number} valor - Valor a formatar
     * @returns {string} Valor formatado (ex: "R$ 576.73")
     */
    static formatarMoeda(valor) {
        return 'R$ ' + valor.toFixed(2).replace('.', '.');
    }
}

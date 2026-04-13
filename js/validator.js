/**
 * VALIDAÇÃO - Responsabilidade Única: validar entrada
 */

class Validator {
    /**
     * Valida se o valor é um número válido
     * @param {number} valor - Valor a validar
     * @returns {Object} { isValid: boolean, erro: string|null }
     */
    static validarValor(valor) {
        if (isNaN(valor)) {
            return { isValid: false, erro: '❌ Por favor, insira um valor numérico válido' };
        }

        if (valor < CurrencyConfig.MIN_VALUE) {
            return { isValid: false, erro: '❌ O valor não pode ser negativo' };
        }

        if (valor > CurrencyConfig.MAX_VALUE) {
            return { isValid: false, erro: `❌ O valor não pode ser maior que ${CurrencyConfig.MAX_VALUE.toLocaleString('pt-BR')}` };
        }

        return { isValid: true, erro: null };
    }

    /**
     * Sanitiza valor do input (remove caracteres inválidos)
     * @param {string} texto - Texto do input
     * @returns {string} Texto sanitizado
     */
    static sanitizarValor(texto) {
        let valor = texto.replace(/[^0-9.]/g, '');
        const partes = valor.split('.');

        if (partes.length > 2) {
            valor = partes[0] + '.' + partes[1];
        }

        if (partes[1] && partes[1].length > 2) {
            valor = parseFloat(valor).toFixed(2);
        }

        return valor;
    }
}

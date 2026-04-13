/**
 * MODELO DE RESULTADO - Responsabilidade Única: representar resultado
 */

class DecomposicaoResultado {
    constructor(valorOriginal, notas, moedas) {
        this.valorOriginal = valorOriginal;
        this.notas = notas;
        this.moedas = moedas;
        this.totalNotas = notas.reduce((sum, n) => sum + n.quantidade, 0);
        this.totalMoedas = moedas.reduce((sum, m) => sum + m.quantidade, 0);
        this.timestamp = new Date();
    }

    /**
     * Verifica integridade do resultado
     * @returns {boolean}
     */
    verificarIntegridade() {
        const total = this.notas.reduce((sum, n) => sum + (n.valor * n.quantidade), 0)
                    + this.moedas.reduce((sum, m) => sum + (m.valor * m.quantidade), 0);
        
        const diferenca = Math.abs(total - this.valorOriginal);
        return diferenca < 0.01; // Tolerância de 1 centavo
    }
}

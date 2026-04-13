/**
 * CONFIGURAÇÃO - Responsabilidade Única: manter as denominações
 */

class CurrencyConfig {
    static NOTAS = [
        { valor: 100, descricao: 'R$ 100.00', tipo: 'nota' },
        { valor: 50, descricao: 'R$ 50.00', tipo: 'nota' },
        { valor: 20, descricao: 'R$ 20.00', tipo: 'nota' },
        { valor: 10, descricao: 'R$ 10.00', tipo: 'nota' },
        { valor: 5, descricao: 'R$ 5.00', tipo: 'nota' },
        { valor: 2, descricao: 'R$ 2.00', tipo: 'nota' }
    ];

    static MOEDAS = [
        { valor: 1, descricao: 'R$ 1.00', tipo: 'moeda' },
        { valor: 0.50, descricao: 'R$ 0.50', tipo: 'moeda' },
        { valor: 0.25, descricao: 'R$ 0.25', tipo: 'moeda' },
        { valor: 0.10, descricao: 'R$ 0.10', tipo: 'moeda' },
        { valor: 0.05, descricao: 'R$ 0.05', tipo: 'moeda' },
        { valor: 0.01, descricao: 'R$ 0.01', tipo: 'moeda' }
    ];

    static MIN_VALUE = 0;
    static MAX_VALUE = 1000000.00;
}

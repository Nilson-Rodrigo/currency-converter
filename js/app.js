/**
 * APLICAÇÃO - Responsabilidade Única: inicializar sistema
 */

class App {
    static iniciar() {
        document.addEventListener('DOMContentLoaded', () => {
            new UIController();
            console.log('✅ Aplicação inicializada com sucesso (POO + Clean Architecture)!');
        });
    }
}

// Inicializa aplicação
App.iniciar();

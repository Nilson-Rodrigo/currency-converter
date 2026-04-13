# 🏗️ Arquitetura POO - Estrutura Modular

Código refatorado com **POO** e **Clean Architecture**, separado em 8 módulos independentes.

## 📁 Estrutura de Arquivos

```
js/
├── config.js         # 🔧 Configurações de moedas/notas
├── converter.js      # 💱 Conversões de valores
├── validator.js      # ✅ Validação de entrada
├── resultado.js      # 📊 Modelo de resultado
├── decomposer.js     # ⚙️ Algoritmo guloso (lógica de negócio)
├── renderer.js       # 🎨 Renderização de UI
├── controller.js     # 🎮 Orquestração de eventos
├── app.js            # 🚀 Inicialização
└── script.js         # 📞 Ponto de entrada (referência)
```

---

## 🔄 Ordem de Carregamento (Dependências)

```
index.html
    ↓
config.js          ← Configurações base
    ↓
converter.js       ← Depende de config
    ↓
validator.js       ← Depende de config
    ↓
resultado.js       ← Modelo (sem dependências de classe)
    ↓
decomposer.js      ← Depende de converter, validator, config, resultado
    ↓
renderer.js        ← Depende de converter
    ↓
controller.js      ← Depende de validator, decomposer, renderer
    ↓
app.js             ← Depende de controller (inicia a app)
```

---

## 📖 Descrição de Cada Módulo

### 1. **config.js** (50 linhas)
**Responsabilidade:** Configurações centralizadas

```javascript
class CurrencyConfig {
    static NOTAS = [...]      // 6 notas
    static MOEDAS = [...]     // 6 moedas
    static MIN_VALUE = 0
    static MAX_VALUE = 1000000
}
```

**Por que separado:**
- Fácil manutenção se valores mudam
- Reutilizável em outros projetos
- Sem lógica, apenas dados

---

### 2. **converter.js** (30 linhas)
**Responsabilidade:** Conversões entre unidades

```javascript
class MoneyConverter {
    static paraCentavos(reais)    // 576.73 → 57673
    static paraReais(centavos)     // 57673 → 576.73
    static formatarMoeda(valor)    // 576.73 → "R$ 576.73"
}
```

**Por que separado:**
- Reutilizável em múltiplos contextos
- Centraliza conversões
- Evita problemas de ponto flutuante

---

### 3. **validator.js** (40 linhas)
**Responsabilidade:** Validação de entrada

```javascript
class Validator {
    static validarValor(valor)    // Valida intervalo e tipo
    static sanitizarValor(texto)  // Remove caracteres inválidos
}
```

**Por que separado:**
- Validação pode ficar complexa
- Reutilizável em múltiplos formulários
- Single Responsibility Principle (SRP)

---

### 4. **resultado.js** (25 linhas)
**Responsabilidade:** Modelo de dados

```javascript
class DecomposicaoResultado {
    constructor(valorOriginal, notas, moedas)
    verificarIntegridade()  // Valida cálculo
}
```

**Por que separado:**
- Representa a resposta do sistema
- Encapsula dados com métodos
- Fácil de estender com novos métodos

---

### 5. **decomposer.js** (50 linhas)
**Responsabilidade:** Lógica de negócio

```javascript
class MoneyDecomposer {
    static decomporValor(valor)              // Método principal
    static _processarDenominacoes(...)       // Privado
    static _atualizarSaldo(...)              // Privado
}
```

**Por que separado:**
- Contém algoritmo principal
- Reutilizável em APIs/CLI
- Bem testável em isolamento
- Sem dependências de UI

---

### 6. **renderer.js** (55 linhas)
**Responsabilidade:** Renderização da interface

```javascript
class UIRenderer {
    static criarLinhaResultado(item)    // Cria 1 linha HTML
    static renderizarNotas(notas)       // Renderiza tabela
    static renderizarMoedas(moedas)     // Renderiza tabela
    static exibirResultados(resultado)  // Mostra seção
    static esconderResultados()         // Esconde seção
}
```

**Por que separado:**
- Isolado de lógica de negócio
- Facilita testes de UI
- Reutilizável com React/Vue

---

### 7. **controller.js** (40 linhas)
**Responsabilidade:** Orquestração de eventos

```javascript
class UIController {
    constructor()           // Inicializa listeners
    inicializarEventos()    // Setup
    calcular()             // Executa fluxo
    resetar()              // Limpa UI
}
```

**Por que separado:**
- Coordena componentes
- Gerencia fluxo de dados
- Conecta entrada → processamento → saída

---

### 8. **app.js** (10 linhas)
**Responsabilidade:** Inicialização

```javascript
class App {
    static iniciar()  // Point of entry
}

App.iniciar();
```

**Por que separado:**
- Um ponto de entrada claro
- Fácil encontrar onde iniciar
- Facilita testes

---

## ✨ Princípios Aplicados

### 1. **Single Responsibility Principle (SRP)**
Cada classe tem uma única razão para mudar:
- `CurrencyConfig`: Mudan valores de moedas
- `MoneyConverter`: Muda formato de conversão
- `Validator`: Mudam regras de validação
- etc.

### 2. **Dependency Inversion**
Classes de baixo nível (converter, validator) não dependem de classes de alto nível (controller, renderer)

### 3. **Open/Closed Principle**
Fácil estender sem modificar código existente:
```javascript
// Adicionar nova denominação:
CurrencyConfig.NOTAS.push({ valor: 200, ... })

// Adicionar novo validador:
class ValidadorCPF extends Validator { ... }
```

### 4. **Interface Segregation**
Cada classe expõe apenas o necessário:
```javascript
// Públicos
MoneyDecomposer.decomporValor(valor)
UIRenderer.exibirResultados(resultado)

// Privados (método auxiliar)
MoneyDecomposer._processarDenominacoes(...)
```

---

## 🔗 Fluxo de Execução

```
Usuario digita 576.73
         ↓
[HTML Input] 
         ↓
[Controller] inicializa eventos
         ↓
click "Calcular"
         ↓
Controller.calcular()
    ├─ Validator.validarValor() ✅
    ├─ MoneyDecomposer.decomporValor()
    │  ├─ MoneyConverter.paraCentavos(576.73)
    │  ├─ _processarDenominacoes(NOTAS)
    │  ├─ _processarDenominacoes(MOEDAS)
    │  └─ return DecomposicaoResultado
    └─ UIRenderer.exibirResultados()
         ├─ renderizarNotas()
         ├─ renderizarMoedas()
         └─ scrollIntoView()
         
Resultado exibido ✓
```

---

## 🧪 Testabilidade

Cada módulo é independente e testável:

```javascript
// Testar converter sem UI
MoneyConverter.paraCentavos(100.50) // ✅ Isolado

// Testar validador sem controller
Validator.validarValor(576.73) // ✅ Isolado

// Testar decomposer sem renderer
MoneyDecomposer.decomporValor(100) // ✅ Isolado

// Testar renderer sem controller
UIRenderer.criarLinhaResultado({...}) // ✅ Isolado
```

---

## 🚀 Vantagens desta Arquitetura

| Aspecto | Vantagem |
|--------|---------|
| **Manutenção** | Fácil encontrar/editar código específico |
| **Reusabilidade** | Módulos podem ser usados em outros projetos |
| **Testabilidade** | Cada classe pode ser testada isoladamente |
| **Escalabilidade** | Fácil adicionar novas funcionalidades |
| **Colaboração** | Múltiplos devs podem trabalhar em paralelo |
| **Debugging** | Erros isolados a um módulo específico |

---

## 📝 Exemplo: Adicionar Nova Feature

**Objetivo:** Adicionar suporte a criptomoedas

```javascript
// 1. Criar novo config
class CryptoCurrencyConfig {
    static CRYPTOS = [...]
}

// 2. Criar novo converter
class CryptoConverter extends MoneyConverter {
    static cotacao(simbolo) { ... }
}

// 3. Criar novo decomposer
class CryptoDecomposer extends MoneyDecomposer {
    static decomporCrypto(valor) { ... }
}

// 4. Nova tab na UI
class CryptoRenderer extends UIRenderer {
    static exibirCryptos(resultado) { ... }
}

// 5. Plugar ao controller
class CryptoController extends UIController {
    calcularCrypto() { ... }
}
```

**Sem modificar código existente!** ✨

---

## 📊 Estatísticas de Código

| Arquivo | Linhas | Responsabilidade |
|---------|--------|-----------------|
| config.js | 25 | Dados |
| converter.js | 30 | Conversão |
| validator.js | 40 | Validação |
| resultado.js | 25 | Modelo |
| decomposer.js | 50 | Algoritmo |
| renderer.js | 55 | UI |
| controller.js | 40 | Orquestração |
| app.js | 10 | Inicialização |
| **TOTAL** | **275** | **Código limpo** |

vs. **script.js único original: ~300 linhas desorganizadas**

---

## 🎯 Conclusão

Mesma funcionalidade, código muito mais:
- ✅ Organizado
- ✅ Legível
- ✅ Manutenível
- ✅ Testável
- ✅ Extensível
- ✅ Profissional

**Clean Architecture em JavaScript!** 🎉

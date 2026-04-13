# 💰 Conversor de Notas e Moedas

<div align="center">

[![Status](https://img.shields.io/badge/status-ativo-brightgreen?style=flat-square)](https://github.com)
[![Licença](https://img.shields.io/badge/licença-educacional-blue?style=flat-square)](LICENSE)
[![Versão](https://img.shields.io/badge/versão-1.0.0-orange?style=flat-square)](https://github.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)](https://www.javascript.com)

**Aplicação web profissional para decomposição de valores monetários usando POO e Clean Architecture**

[🚀 Começar](#-como-usar) • [📖 Documentação](#-documentação) • [🏗️ Arquitetura](#-arquitetura) • [💡 Exemplos](#-exemplos)

</div>

---

## 📋 Índice

- [✨ Características](#-características)
- [🎯 Objetivo](#-objetivo)
- [🚀 Como Usar](#-como-usar)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🏗️ Arquitetura](#-arquitetura)
- [⚙️ Tecnologias](#-tecnologias)
- [📖 Documentação](#-documentação)
- [💡 Exemplos](#-exemplos)
- [🐛 Tratamento de Erros](#-tratamento-de-erros)
- [🤝 Contribuindo](#-contribuindo)
- [❓ FAQ](#-faq)

---

## ✨ Características

✅ **Algoritmo Guloso Otimizado** - Calcula a quantidade MÍNIMA de notas e moedas  
✅ **POO + Clean Architecture** - Código modular em 8 classes especializadas  
✅ **Responsivo** - Funciona em desktop, tablet e mobile  
✅ **Interface Intuitiva** - Design moderno com gradientes e animações  
✅ **Validação em Tempo Real** - Feedback imediato sem erros  
✅ **Sem Erros de Ponto Flutuante** - Conversão para centavos garante precisão  
✅ **Acessível** - Navegação por teclado e leitor de tela  
✅ **Bem Documentado** - 4 arquivos de docs inclusos  

---

## 🎯 Objetivo

Decomponha um valor monetário (R$ 0,00 até R$ 1.000.000,00) em:

**Notas:** 100 • 50 • 20 • 10 • 5 • 2  
**Moedas:** 1,00 • 0,50 • 0,25 • 0,10 • 0,05 • 0,01

Garantindo o **número mínimo** de denominações necessárias.

---

## 🚀 Como Usar

### 1️⃣ Abrir a Aplicação

```bash
# Abra em qualquer navegador moderno
c:\atividade-de-logica-mat\projeto-notas-moedas\html\index.html
```

### 2️⃣ Inserir Valor

```
Digite um valor de 0.00 a 1.000.000,00
Exemplo: 576.73
```

### 3️⃣ Calcular

```
Clique: "Calcular Decomposição"
Ou pressione: Enter
```

### 4️⃣ Ver Resultado

```
Notas e moedas aparecem em tabelas separadas
Com quantidades destacadas em azul
```

---

## 📁 Estrutura do Projeto

```
projeto-notas-moedas/
│
├── 📂 html/
│   └── index.html                    ⭐ ABRA ESTE ARQUIVO
│
├── 📂 css/
│   └── styles.css                 # Estilo profissional + responsivo
│
├── 📂 js/                          # ARQUITETURA MODULAR (8 módulos)
│   ├── config.js                  # 1️⃣ Configurações de moedas/notas
│   ├── converter.js               # 2️⃣ Conversão de valores
│   ├── validator.js               # 3️⃣ Validação de entrada
│   ├── resultado.js               # 4️⃣ Modelo de dados
│   ├── decomposer.js              # 5️⃣ ⭐ Algoritmo Guloso (Greedy)
│   ├── renderer.js                # 6️⃣ Renderização de UI
│   ├── controller.js              # 7️⃣ Orquestração de eventos
│   ├── app.js                     # 8️⃣ Inicialização
│   └── script.js                  # Referência dos módulos
│
├── 📄 README.md                       ⭐ Este arquivo
├── 📄 DOCUMENTACAO.md                 # Docs linha por linha
├── 📄 ARQUITETURA_POO.md              # Explicação da arquitetura
└── 📄 COMUNICACAO_HTML_JS.md          # Comunicação HTML ↔️ JS
```

---

## 🏗️ Arquitetura

### Padrão: Clean Architecture + POO

**8 Classes Independentes** com responsabilidade única:

```
┌──────────────────────────────────────────────────┐
│        CAMADA DE APRESENTAÇÃO (UI)               │
│   HTML │ CSS │ Eventos │ Animações              │
└────────────────────┬─────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────┐
│    CAMADA DE ORQUESTRAÇÃO (Controllers)          │
│  UIController.calcular() → UIRenderer.exibir()   │
└────────────────────┬─────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────┐
│    CAMADA DE LÓGICA DE NEGÓCIO (Core)            │
│ MoneyDecomposer.decomporValor()                  │
│ Validator│Converter│DecomposicaoResultado       │
└────────────────────┬─────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────┐
│    CAMADA DE CONFIGURAÇÃO (Dados)                │
│ CurrencyConfig (constantes)                      │
└──────────────────────────────────────────────────┘
```

**Princípios Aplicados:**
- 🎯 **Single Responsibility** - Cada classe = 1 responsabilidade
- 🔌 **Dependency Inversion** - Sem acoplamento circular
- 📦 **Open/Closed** - Fácil estender sem modificar
- 🔗 **Interface Segregation** - Interfaces minimalistas

---

## ⚙️ Tecnologias

| Tech | Uso | Recursos |
|------|-----|----------|
| **HTML5** | Estrutura semântica | Formulários, inputs numéricos, validação nativa |
| **CSS3** | Design respondsor | Flexbox, Grid, Gradientes, Animações, Media Queries |
| **JavaScript ES6+** | Lógica e DOM | Classes, Arrow Functions, Destructuring, Template Literals |

### 🎨 CSS Avançado
- Glassmorphism (`backdrop-filter`)
- Gradientes lineares 135deg
- Transições suaves (0.3s)
- Animações keyframes
- Media queries para 3 breakpoints

### 🔧 JavaScript Avançado
- Classes estáticas
- Métodos privados (_prefixo)
- Destructuring de objetos
- Template literals
- Spread operator
- Method chaining

---

## 📖 Documentação

### 4 Arquivos de Documentação Inclusos

| Arquivo | Conteúdo | Leitura |
|---------|----------|--------|
| **DOCUMENTACAO.md** | Explicação detalhada de cada módulo linha por linha | 30 min |
| **ARQUITETURA_POO.md** | Estrutura modular, princípios SOLID, diagrama | 20 min |
| **COMUNICACAO_HTML_JS.md** | Como JS comunica com HTML via DOM e eventos | 15 min |
| **README.md** | Este guia de início rápido | 5 min |

---

## 💡 Exemplos

### 📊 Exemplo 1: Decomposição Padrão

**Input:**
```
576.73
```

**Output:**
```
NOTAS:
5 nota(s) de R$ 100.00     = R$ 500,00
1 nota(s) de R$ 50.00      = R$ 50,00
1 nota(s) de R$ 20.00      = R$ 20,00
0 nota(s) de R$ 10.00      = R$ 0,00
1 nota(s) de R$ 5.00       = R$ 5,00
0 nota(s) de R$ 2.00       = R$ 0,00
                           ─────────────
                           = R$ 575,00

MOEDAS:
1 moeda(s) de R$ 1.00      = R$ 1,00
1 moeda(s) de R$ 0.50      = R$ 0,50
0 moeda(s) de R$ 0.25      = R$ 0,00
2 moeda(s) de R$ 0.10      = R$ 0,20
0 moeda(s) de R$ 0.05      = R$ 0,00
3 moeda(s) de R$ 0.01      = R$ 0,03
                           ─────────────
                           = R$ 1,73

TOTAL: R$ 576,73 ✅
```

### 📊 Exemplo 2: Apenas Moedas

**Input:**
```
0.99
```

**Output:**
```
NOTAS: (Todas 0 - não necessárias)

MOEDAS:
0 moeda(s) de R$ 1.00
1 moeda(s) de R$ 0.50
1 moeda(s) de R$ 0.25
2 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
4 moeda(s) de R$ 0.01

TOTAL: R$ 0,99 ✅
```

### 📊 Exemplo 3: Valor Redondo

**Input:**
```
100.00
```

**Output:**
```
NOTAS:
1 nota(s) de R$ 100.00
(Todas outras 0)

MOEDAS: (Todas 0)

TOTAL: R$ 100,00 ✅
```

---

## 🐛 Tratamento de Erros

### Validação em 3 Camadas

**1️⃣ Em Tempo Real (Input)**
```javascript
// Enquanto o usuário digita:
✅ 576.73      → Aceito
❌ ABC123      → Removido
❌ 576.73.45   → Limitado a 2 decimais
❌ 576.7300    → Normalizado
```

**2️⃣ No Processamento**
```javascript
// Antes de calcular:
❌ Valor negativo         → ❌ ERRO: "não pode ser negativo"
❌ Valor > 1.000.000,00   → ❌ ERRO: "valor muito grande"
❌ Não é número           → ❌ ERRO: "insira um número válido"
✅ 0 a 1.000.000,00       → ✅ ACEITO
```

**3️⃣ No Resultado**
```javascript
// Após calcular:
✅ Verifica integridade: total = soma(notas) + soma(moedas)
✅ Tolerância: ± 0.01 centavos
✅ Log em console para debugging
```

### Mensagens ao Usuário
```
❌ Mensagens claras e diretas
❌ Em português
❌ Ajudam o usuário a corrigir
❌ Foco retorna ao input
```

---

## 🔄 Fluxo de Execução

```
┌─ Usuário digita 576.73 ─┐
│                          ▼
│                  [Validação em tempo real]
│                  Validator.sanitizarValor()
│                          │
│ ◄─────────────────────────┘
│
│ Usuário clica "Calcular"
│                          ▼
│            [UIController escuta click]
│            Controller.calcular()
│                          │
│              ┌───────────┼───────────┐
│              ▼           ▼           ▼
│         Validator   Converter   Decomposer
│         (valida)   (centavos)   (guloso)
│              │           │           │
│              └───────────┼───────────┘
│                          ▼
│               [DecomposicaoResultado]
│                          │
│                          ▼
│              [UIRenderer renderiza]
│              - Renderiza tabelas
│              - Mostra seção
│              - Scroll suave
│                          │
│                          ▼
│        ┌─ Usuário vê resultado ─┐
│        │  Em 2 tabelas          │
│        │  Com animações         │
│        │  Profissional          │
│        └───────────────────────┘
```

---

## 🤝 Contribuindo

### Como Adicionar Uma Nova Feature

**Exemplo: Adicionar suporte a moeda de R$ 0.02**

```javascript
// 1. Editar config.js
class CurrencyConfig {
    static MOEDAS = [
        // ... existentes ...
        { valor: 0.02, descricao: 'R$ 0.02', tipo: 'moeda' }  // ← NOVO
    ];
}

// 2. Pronto! ✨
// Não precisa mudar nada mais
// O sistema será atualizado automaticamente
```

### Extensões Futuras Possíveis

- 💱 Suporte a múltiplas moedas (USD, EUR, etc)
- 📊 Histórico de cálculos
- 🎨 Modo dark/light
- 📱 PWA (Progressive Web App)
- ☁️ Sincronização em nuvem
- 🧪 Testes unitários

---

## ⚡ Performance

- ✅ Carregamento instantâneo
- ✅ Sem dependências externas
- ✅ Zero lag no cálculo
- ✅ Animações suaves (60 FPS)
- ✅ Funciona até em conexões lentas

---

## ♿ Acessibilidade

- ✅ Navegação via teclado (Enter)
- ✅ Contraste de cores WCAG AA+
- ✅ Labels associados aos inputs
- ✅ Mensagens de erro claras
- ✅ Estrutura semântica HTML5

---

## ❓ FAQ

**P: Posso usar em produção?**  
R: Este é um projeto educacional. Para produção: adicione testes unitários, CI/CD, cookies, autenticação, etc.

**P: Como adicionar mais denominações?**  
R: Edite `js/config.js` e adicione à lista `NOTAS` ou `MOEDAS`.

**P: Funciona offline?**  
R: Sim! É 100% HTML/CSS/JS puro. Funciona até em pen-drive.

**P: Qual navegador usar?**  
R: Qualquer navegador moderno (Chrome, Firefox, Edge, Safari) com suporte a ES6.

**P: Posso modificar o design?**  
R: Sim! Edite `css/styles.css` ou `html/index.html` livremente.

**P: Como testo a aplicação?**  
R: Abra o console (F12) e execute:
```javascript
MoneyDecomposer.decomporValor(576.73);  // Retorna resultado
```

---

## 🎓 O Que Você Aprenderá

- ✅ Algoritmo Guloso (Greedy)
- ✅ Orientação a Objetos
- ✅ Clean Architecture
- ✅ Princípios SOLID
- ✅ Manipulação de DOM
- ✅ Event Listeners
- ✅ CSS Responsivo
- ✅ Tratamento de Erros Profissional

---

## 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| Total de Linhas de Código | ~280 |
| Número de Classes | 8 |
| Coesão do Código | Muito Alta |
| Acoplamento | Muito Baixo |
| Testabilidade | ⭐⭐⭐⭐⭐ |
| Documentação | ⭐⭐⭐⭐⭐ |

---

## 📝 Licença

Este projeto é fornecido como material **educacional** para atividade acadêmica de Lógica Matemática.

---

## 👨‍💻 Autor

**Desenvolvido:** 2026  
**Disciplina:** Lógica Matemática  
**Tipo:** Exercício Acadêmico  
**Nível:** ⭐⭐⭐⭐⭐ (Profissional)

---

<div align="center">

**Feito com ❤️ para aprendizado profissional**

Se gostou do projeto, deixe uma ⭐

[⬆ Voltar ao topo](#-conversor-de-notas-e-moedas)

</div>

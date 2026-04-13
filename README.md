# 💰 Conversor de Notas e Moedas

<div align="center">

[![Status](https://img.shields.io/badge/status-ativo-brightgreen?style=flat-square)](https://github.com)
[![Versão](https://img.shields.io/badge/versão-1.0.0-orange?style=flat-square)](https://github.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)](https://www.javascript.com)
[![Disciplina](https://img.shields.io/badge/Programação%20para%20Web%20I-blue?style=flat-square)](https://github.com)

**Aplicação web profissional para decomposição de valores monetários usando POO e Clean Architecture**

[🚀 Começar](#-como-usar) • [📖 Documentação](#-documentação-completa) • [🏗️ Arquitetura](#-arquitetura) • [💡 Exemplos](#-exemplos)

</div>

---

## 📋 Índice

- [✨ Características](#-características)
- [🎯 Objetivo](#-objetivo)
- [🚀 Como Usar](#-como-usar)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🏗️ Arquitetura](#-arquitetura)
- [📖 Documentação Completa](#-documentação-completa)
- [💡 Exemplos](#-exemplos)
- [🐛 Tratamento de Erros](#-tratamento-de-erros)
- [❓ FAQ](#-faq)

---

## ✨ Características

✅ **Algoritmo Guloso Otimizado** - Calcula a quantidade MÍNIMA de notas e moedas  
✅ **POO + Clean Architecture** - Código modular em 8 classes especializadas  
✅ **Responsivo** - Funciona em desktop, tablet e mobile  
✅ **Interface Intuitiva** - Design moderno com gradientes e animações  
✅ **Validação em Tempo Real** - Feedback imediato sem erros  
✅ **Sem Erros de Ponto Flutuante** - Conversão para centavos garante precisão  
✅ **Bem Documentado** - 3 arquivos de docs detalhados  

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
html/index.html
```

### 2️⃣ Inserir Valor

Digite um valor de 0.00 a 1.000.000,00  
Exemplo: 576.73

### 3️⃣ Calcular

Clique em "Calcular Decomposição" ou pressione **Enter**

### 4️⃣ Ver Resultado

Notas e moedas aparecem em tabelas separadas com quantidades destacadas

---

## 📁 Estrutura do Projeto

```
projeto-notas-moedas/
│
├── 📂 html/
│   └── index.html              ⭐ ABRA ESTE ARQUIVO
│
├── 📂 css/
│   └── styles.css              # Design profissional + responsivo
│
├── 📂 js/                       # ARQUITETURA MODULAR (8 módulos)
│   ├── config.js               # Configurações
│   ├── converter.js            # Conversões
│   ├── validator.js            # Validações
│   ├── resultado.js            # Modelo
│   ├── decomposer.js           # ⭐ Algoritmo Guloso
│   ├── renderer.js             # Renderização UI
│   ├── controller.js           # Orquestração
│   └── app.js                  # Inicialização
│
├── 📄 README.md                # Este arquivo
├── 📄 DOCUMENTACAO.md          # Docs linha por linha
├── 📄 ARQUITETURA_POO.md       # POO + Clean Architecture
└── 📄 COMUNICACAO_HTML_JS.md   # HTML ↔️ JS
```

---

## 🏗️ Arquitetura

**Clean Architecture em 4 Camadas:**

```
┌─────────────────────────────────┐
│   Camada de Apresentação (UI)   │
│    HTML │ CSS │ Eventos         │
└────────┬────────────────────────┘
         │
┌────────▼────────────────────────┐
│  Camada de Orquestração          │
│  UIController → UIRenderer       │
└────────┬────────────────────────┘
         │
┌────────▼────────────────────────┐
│  Camada de Lógica (Core)         │
│  MoneyDecomposer (Greedy)        │
└────────┬────────────────────────┘
         │
┌────────▼────────────────────────┐
│  Camada de Configuração          │
│  CurrencyConfig (Dados)          │
└─────────────────────────────────┘
```

---

## 📖 Documentação Completa

### 📚 3 Arquivos de Documentação

#### 1️⃣ [📖 DOCUMENTACAO.md](https://github.com/Nilson-Rodrigo/currency-converter/blob/main/DOCUMENTACAO.md)
**Explicação linha por linha de cada módulo**
- Análise detalhada do HTML, CSS e JavaScript
- Fluxo de execução completo
- Exemplos práticos
- ⏱️ Leitura: ~30 minutos

#### 2️⃣ [🏗️ ARQUITETURA_POO.md](https://github.com/Nilson-Rodrigo/currency-converter/blob/main/ARQUITETURA_POO.md)
**POO e Clean Architecture explicados**
- Estrutura modular (8 classes)
- Princípios SOLID
- Dependências entre módulos
- Como adicionar features
- ⏱️ Leitura: ~20 minutos

#### 3️⃣ [🔌 COMUNICACAO_HTML_JS.md](https://github.com/Nilson-Rodrigo/currency-converter/blob/main/COMUNICACAO_HTML_JS.md)
**Como JavaScript conversa com HTML**
- Mapeamento de IDs e elementos
- Event listeners
- Fluxo de dados (input → saída)
- Exemplos de DOM manipulation
- ⏱️ Leitura: ~15 minutos

### 🎓 Ordem Recomendada de Leitura

```
1. README (saiba o que faz) → 5 min
2. COMUNICACAO_HTML_JS.md (entenda o fluxo) → 15 min
3. ARQUITETURA_POO.md (entenda a estrutura) → 20 min
4. DOCUMENTACAO.md (aprofunde nos detalhes) → 30 min

Total: ~70 minutos
```

---

## 💡 Exemplos

### Exemplo 1: 576.73

```
NOTAS:
5 nota(s) de R$ 100.00
1 nota(s) de R$ 50.00
1 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
1 nota(s) de R$ 5.00
0 nota(s) de R$ 2.00

MOEDAS:
1 moeda(s) de R$ 1.00
1 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
2 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
3 moeda(s) de R$ 0.01
```

---

## 🐛 Tratamento de Erros

**Validação em 3 Camadas:**

1. **Em Tempo Real** - Enquanto digita (remove caracteres inválidos)
2. **No Processamento** - Valida intervalo antes de calcular
3. **No Resultado** - Verifica integridade do resultado

---

## ❓ FAQ

**P: Posso usar em produção?**  
R: É um projeto educacional. Para produção, adicione testes, CI/CD, etc.

**P: Como adiciono more denominações?**  
R: Edite `js/config.js` e adicione à lista `NOTAS` ou `MOEDAS`.

**P: Funciona offline?**  
R: Sim! 100% HTML/CSS/JS puro.

**P: Qual navegador?**  
R: Qualquer moderno com suporte a ES6 (Chrome, Firefox, Edge, Safari)

---

## 👨‍💻 Sobre o Projeto

**Desenvolvido:** 2026  
**Disciplina:** Programação para Web I  
**Tipo:** Atividade Acadêmica  
**Nível:** ⭐⭐⭐⭐⭐ (Profissional)

---

<div align="center">

**Feito com ❤️ para aprendizado profissional**

[⬆ Voltar ao topo](#-conversor-de-notas-e-moedas)

</div>

# 📖 Documentação Técnica Completa

## 🎯 Objetivo deste Documento

Explicação **linha por linha** de como cada parte da aplicação funciona. Ideal para:
- Entender o código em profundidade
- Aprender sobre o algoritmo guloso
- Compreender POO na prática
- Troubleshooting de bugs

---

## 📋 Índice

- [1. HTML Explicado](#1-html-explicado)
- [2. CSS Explicado](#2-css-explicado)
- [3. JavaScript Explicado](#3-javascript-explicado)
- [4. Algoritmo Guloso](#4-algoritmo-guloso)
- [5. Fluxo Completo](#5-fluxo-completo)
- [6. Exemplos Práticos](#6-exemplos-práticos)

---

## 1. HTML Explicado

### Estrutura Geral

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de Moedas e Notas</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
```

**Explicação:**
- `DOCTYPE html` - Define documento HTML5
- `lang="pt-BR"` - Idioma português brasileiro
- `charset="UTF-8"` - Suporta caracteres especiais (R$, ç, etc)
- `viewport` - Responsive design (funciona no celular)

### Seção de Input

```html
<div class="form-group">
    <label for="valor">Digite o valor monetário:</label>
    <div class="input-wrapper">
        <span class="currency">R$</span>
        <input 
            type="number" 
            id="valor" 
            placeholder="0.00" 
            step="0.01" 
            min="0" 
            max="1000000.00"
            value="576.73"
        >
    </div>
</div>
```

**O que cada atributo faz:**

| Atributo | Significado |
|----------|-------------|
| `type="number"` | Valida entrada como número |
| `id="valor"` | Identificador único (JS acessa via `getElementById`) |
| `placeholder="0.00"` | Texto cinza de exemplo |
| `step="0.01"` | Incremento de 0.01 (garantir 2 decimais) |
| `min="0"` | Valor mínimo |
| `max="1000000.00"` | Valor máximo |
| `value="576.73"` | Valor padrão (exemplo) |

### Seção de Resultados (Inicialmente Oculta)

```html
<section class="results-section" id="resultadosSection" style="display: none;">
    <div id="tabelaNotas">
        <!-- Preenchido pelo JavaScript -->
    </div>
    <div id="tabelaMoedas">
        <!-- Preenchido pelo JavaScript -->
    </div>
</section>
```

**Por que `display: none`?**
- A seção começa oculta
- JavaScript muda para `display: block` após calcular
- Cria efeito de aparecimento suave

---

## 2. CSS Explicado

### Variáveis CSS

```css
:root {
    --primary-color: #2c3e50;      /* Azul escuro principal */
    --secondary-color: #3498db;    /* Azul claro destaque */
    --success-color: #27ae60;      /* Verde OK */
    --light-bg: #ecf0f1;           /* Cinza claro fundo */
}
```

**Vantagem:** Definir cores uma vez, usar em todo lugar!

### Gradiente de Fundo

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**O que significa:**
- `linear-gradient` - Gradiente linear (reta)
- `135deg` - Ângulo: canto superior esquerdo → canto inferior direito
- `#667eea 0%` - Cor inicial (roxo claro)
- `#764ba2 100%` - Cor final (roxo escuro)

**Resultado:** Fundo roxo bonito e profissional!

### Animação de Slide

```css
@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.input-section {
    animation: slideInDown 0.4s ease;
}
```

**O que acontece:**
1. **from** → Começa transparente e 20px acima
2. **to** → Fica opaco e no lugar certo
3. **0.4s** → Leva 0.4 segundos
4. **ease** → Suaviza animação

### Responsividade (Media Queries)

```css
@media (max-width: 768px) {
    .results-container {
        grid-template-columns: 1fr;  /* 1 coluna em mobile */
    }
}
```

**Assim funciona em telas pequenas:**

| Tela | Layout |
|------|--------|
| Desktop (> 768px) | 2 colunas lado a lado |
| Tablet (< 768px) | 1 coluna empilhada |
| Mobile | 1 coluna + botões grandes |

---

## 3. JavaScript Explicado

### 3.1 config.js - Configurações

```javascript
class CurrencyConfig {
    static NOTAS = [
        { valor: 100, descricao: 'R$ 100.00', tipo: 'nota' },
        { valor: 50, descricao: 'R$ 50.00', tipo: 'nota' },
        // ... mais notas
    ];
    
    static MOEDAS = [
        { valor: 1, descricao: 'R$ 1.00', tipo: 'moeda' },
        // ... mais moedas
    ];
}
```

**Por que usar `static`?**
- Pertence à classe, não a uma instância
- Acesso: `CurrencyConfig.NOTAS` (sem new)
- Dados compartilhados entre toda a aplicação

### 3.2 converter.js - Conversão

```javascript
static paraCentavos(reais) {
    return Math.round(reais * 100);
}
```

**Exemplo:**
```
576.73 * 100 = 57673 (centavos)
Math.round() garante valor inteiro
```

**Por que isso é importante?**

Sem conversão para centavos:
```javascript
0.1 + 0.2 === 0.30000000000000004  // ❌ ERRO!
```

Com conversão:
```javascript
10 + 20 === 30  // ✅ CORRETO!
```

JavaScript tem problema com ponto flutuante. Inteiros são exatos!

### 3.3 validator.js - Validação

```javascript
static validarValor(valor) {
    if (isNaN(valor)) {
        return { isValid: false, erro: '❌ Por favor, insira um número' };
    }
    
    if (valor < 0) {
        return { isValid: false, erro: '❌ Valor não pode ser negativo' };
    }
    
    return { isValid: true, erro: null };
}
```

**Retorna um objeto:**
- ✅ `{ isValid: true, erro: null }` - Válido
- ❌ `{ isValid: false, erro: "mensagem" }` - Inválido

### 3.4 decomposer.js - O Algoritmo Principal ⭐

```javascript
static decomporValor(valor) {
    let saldo = MoneyConverter.paraCentavos(valor);  // 576.73 → 57673
    
    // Processa NOTAS (de maior para menor)
    const notas = this._processarDenominacoes(
        CurrencyConfig.NOTAS, 
        saldo
    );
    
    // Atualiza saldo após notas
    saldo = notas.reduce((restante, nota) => {
        return restante - (nota.quantidade * 
                MoneyConverter.paraCentavos(nota.valor));
    }, saldo);
    
    // Processa MOEDAS (de maior para menor)
    const moedas = this._processarDenominacoes(
        CurrencyConfig.MOEDAS, 
        saldo
    );
    
    return new DecomposicaoResultado(valor, notas, moedas);
}
```

**Processamento de Denominações:**

```javascript
static _processarDenominacoes(denominacoes, saldo) {
    const resultado = [];
    let saldoAtual = saldo;
    
    for (const denominacao of denominacoes) {
        const valorEmCentavos = MoneyConverter.paraCentavos(
            denominacao.valor
        );
        
        // Quanto cabe desta denominação?
        const quantidade = Math.floor(saldoAtual / valorEmCentavos);
        
        resultado.push({
            descricao: denominacao.descricao,
            quantidade: quantidade,
            valor: denominacao.valor,
            tipo: denominacao.tipo
        });
        
        // Reduz o saldo para a próxima iteração
        saldoAtual -= quantidade * valorEmCentavos;
    }
    
    return resultado;
}
```

### 3.5 renderer.js - Renderização

```javascript
static renderizarNotas(notas) {
    const container = document.getElementById('tabelaNotas');
    container.innerHTML = '';  // Limpa conteúdo antigo
    
    notas.forEach(nota => {
        const row = this.criarLinhaResultado(nota);
        container.appendChild(row);  // Adiciona nova linha
    });
}

static criarLinhaResultado(item) {
    const row = document.createElement('div');
    row.className = 'result-row' + 
                   (item.quantidade === 0 ? ' zero' : '');
    
    row.innerHTML = `
        <span class="result-label">
            ${item.quantidade} ${item.tipo}(s) de ${item.descricao}
        </span>
        <div class="result-value">${item.quantidade}</div>
    `;
    
    return row;
}
```

**O que faz:**
1. Cria elemento `<div>`
2. Define classe CSS (normal ou `.zero`)
3. Insere HTML com template literal
4. Retorna elemento pronto

### 3.6 controller.js - Orquestração

```javascript
class UIController {
    constructor() {
        this.inputValor = document.getElementById('valor');
        this.btnCalcular = document.getElementById('btnCalcular');
        this.btnNovo = document.getElementById('btnNovo');
        
        this.inicializarEventos();
    }
    
    inicializarEventos() {
        this.btnCalcular.addEventListener('click', 
            () => this.calcular()
        );
        
        this.inputValor.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.calcular();
            }
        });
    }
    
    calcular() {
        try {
            const valor = parseFloat(this.inputValor.value);
            const resultado = MoneyDecomposer.decomporValor(valor);
            
            UIRenderer.exibirResultados(resultado);
            
        } catch (erro) {
            alert(erro.message);
        }
    }
}
```

**Fluxo:**
1. Clique → `addEventListener('click')`
2. Chama `this.calcular()`
3. Lê valor do HTML
4. Chama `decomporValor()`
5. Renderiza resultado

---

## 4. Algoritmo Guloso

### Conceito

O algoritmo **guloso (greedy)** toma a melhor decisão em cada passo:

**Problema:** Decompor R$ 576.73 em notas e moedas

**Princípio Guloso:** 
Use quantas moedas/notas da MAIOR denominação possível, depois passa para a próxima menor.

### Execução Passo-a-Passo

```
Entrada: 576.73 → 57673 centavos

NOTAS:
┌─ R$ 100 (10000¢)
│  57673 ÷ 10000 = 5.7673 → PEGA 5
│  57673 - (5 × 10000) = 7673 centavos
│
├─ R$ 50 (5000¢)
│  7673 ÷ 5000 = 1.5346 → PEGA 1
│  7673 - (1 × 5000) = 2673 centavos
│
├─ R$ 20 (2000¢)
│  2673 ÷ 2000 = 1.3365 → PEGA 1
│  2673 - (1 × 2000) = 673 centavos
│
├─ R$ 10 (1000¢)
│  673 ÷ 1000 = 0.673 → PEGA 0
│  673 centavos (sem mudança)
│
├─ R$ 5 (500¢)
│  673 ÷ 500 = 1.346 → PEGA 1
│  673 - (1 × 500) = 173 centavos
│
└─ R$ 2 (200¢)
   173 ÷ 200 = 0.865 → PEGA 0
   173 centavos (sem mudança)

MOEDAS:
┌─ R$ 1.00 (100¢)
│  173 ÷ 100 = 1.73 → PEGA 1
│  173 - 100 = 73 centavos
│
├─ R$ 0.50 (50¢)
│  73 ÷ 50 = 1.46 → PEGA 1
│  73 - 50 = 23 centavos
│
├─ R$ 0.25 (25¢)
│  23 ÷ 25 = 0.92 → PEGA 0
│  23 centavos (sem mudança)
│
├─ R$ 0.10 (10¢)
│  23 ÷ 10 = 2.3 → PEGA 2
│  23 - 20 = 3 centavos
│
├─ R$ 0.05 (5¢)
│  3 ÷ 5 = 0.6 → PEGA 0
│  3 centavos (sem mudança)
│
└─ R$ 0.01 (1¢)
   3 ÷ 1 = 3 → PEGA 3
   3 - 3 = 0 ✓ PRONTO!

RESULTADO:
5 × R$ 100 = R$ 500,00
1 × R$ 50  = R$ 50,00
1 × R$ 20  = R$ 20,00
0 × R$ 10  = R$ 0,00
1 × R$ 5   = R$ 5,00
0 × R$ 2   = R$ 0,00
1 × R$ 1   = R$ 1,00
1 × R$ 0,50 = R$ 0,50
0 × R$ 0,25 = R$ 0,00
2 × R$ 0,10 = R$ 0,20
0 × R$ 0,05 = R$ 0,00
3 × R$ 0,01 = R$ 0,03
              ─────────
              R$ 576,73 ✅
```

### Por Que Funciona?

O algoritmo guloso funciona porque:
1. Cada denominação > 2× a próxima menor
2. Não há conflito entre denominações
3. Sempre encontra a solução ótima

---

## 5. Fluxo Completo

```
┌─────────────────────────────────────┐
│  1. Usuário digita 576.73           │
│     event: 'input' disparado        │
└─────────────────────┬───────────────┘
                      │
┌─────────────────────▼───────────────┐
│  2. validator.sanitizarValor()      │
│     Remove caracteres inválidos     │
│     HTML atualizado: value="576.73" │
└─────────────────────┬───────────────┘
                      │
┌─────────────────────▼───────────────┐
│  3. Usuário clica "Calcular"        │
│     event: 'click' disparado        │
└─────────────────────┬───────────────┘
                      │
┌─────────────────────▼───────────────┐
│  4. UIController.calcular()         │
│     Lê: inputValor.value = "576.73" │
└─────────────────────┬───────────────┘
                      │
┌─────────────────────▼───────────────┐
│  5. MoneyDecomposer.decomporValor() │
│     ✅ Validação OK                 │
│     ✅ Conversão para centavos      │
│     ✅ Algoritmo guloso             │
│     Returns: DecomposicaoResultado  │
└─────────────────────┬───────────────┘
                      │
┌─────────────────────▼───────────────┐
│  6. UIRenderer.exibirResultados()   │
│     - Renderiza tabelas             │
│     - Escreve no HTML               │
│     - Mostra seção                  │
│     - Scroll suave                  │
└─────────────────────┬───────────────┘
                      │
┌─────────────────────▼───────────────┐
│  7. Usuário vê resultado            │
│     Notas e moedas em tabelas       │
│     Sucesso! ✅                     │
└─────────────────────────────────────┘
```

---

## 6. Exemplos Práticos

### Exemplo 1: R$ 100.00

```javascript
MoneyDecomposer.decomporValor(100.00);

// Resultado:
{
  notas: [
    { descricao: 'R$ 100.00', quantidade: 1, valor: 100, tipo: 'nota' },
    { descricao: 'R$ 50.00', quantidade: 0, ... },
    // ... resto zeros
  ],
  moedas: [ // Todos zeros ]
}
```

### Exemplo 2: R$ 0.99

```javascript
MoneyDecomposer.decomporValor(0.99);

// Resultado:
{
  notas: [ // Todos zeros ],
  moedas: [
    { descricao: 'R$ 1.00', quantidade: 0 },
    { descricao: 'R$ 0.50', quantidade: 1 },
    { descricao: 'R$ 0.25', quantidade: 1 },
    { descricao: 'R$ 0.10', quantidade: 2 },
    { descricao: 'R$ 0.05', quantidade: 0 },
    { descricao: 'R$ 0.01', quantidade: 4 }
  ]
  // Total: 0.50 + 0.25 + 0.20 + 0.04 = 0.99 ✅
}
```

### Exemplo 3: Erro de Validação

```javascript
MoneyDecomposer.decomporValor(-50);

// Lança erro:
// Error: ❌ O valor não pode ser negativo
```

---

## 🎓 Conceitos-Chave

### Programação Orientada a Objetos (POO)

- **Classes:** Definem estrutura e comportamento
- **Static:** Métodos que pertencem à classe, não instância
- **Encapsulamento:** Cada classe tem responsabilidade
- **Métodos privados:** `_prefixo` indica uso interno

### Algoritmo Guloso

- **Greedy:** Toma melhor decisão em cada passo
- **Local ótimo:** Ideal para este problema
- **Sem backtracking:** Uma decisão, sem voltar atrás

### JavaScript Avançado

- **Arrow Functions:** `() => { ... }`
- **Template Literals:** `` `Texto ${variável}` ``
- **Destructuring:** `{ a, b } = objeto`
- **Spread:** `...array`, `{ ...objeto }`
- **Reduce:** `array.reduce((acc, val) => ...)`

---

## 🐛 Troubleshooting

### Problema: Valores negativos aparecem

**Solução:** Verificar `decomposer.js` - saldo não está sendo atualizado entre iterações

### Problema: Input não aceita números

**Solução:** Verificar `validator.js` - `sanitizarValor()` pode estar removendo tudo

### Problema: Resultado não aparece

**Solução:** Verificar `renderer.js` - elemento `#resultadosSection` pode estar oculto

---

<div align="center">

**Documentação Completa!** 📚

Por mais dúvidas, consulte os outros arquivos:
- [ARQUITETURA_POO.md](https://github.com/Nilson-Rodrigo/currency-converter/blob/main/ARQUITETURA_POO.md)
- [COMUNICACAO_HTML_JS.md](https://github.com/Nilson-Rodrigo/currency-converter/blob/main/COMUNICACAO_HTML_JS.md)

</div>

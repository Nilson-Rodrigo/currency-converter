# 🔌 Comunicação entre JavaScript e HTML

Explicação de como os módulos JS conversam com o HTML (DOM).

---

## 📡 Fluxo de Comunicação

```
HTML (estrutura)
     ↓
JS (lê elementos via IDs)
     ↓
Eventos (clique, digitação)
     ↓
JS (processa)
     ↓
JS (modifica HTML)
     ↓
HTML (atualizado na tela)
```

---

## 🔑 Elementos HTML com IDs

Esses são os **pontos de comunicação** entre HTML e JS:

```html
<!-- INPUT -->
<input id="valor">                    ← UIController lê valor daqui

<!-- BOTÕES -->
<button id="btnCalcular">             ← UIController escuta clique
<button id="btnNovo">                 ← UIController escuta clique

<!-- CONTÊINERES DE RESULTADO -->
<div id="tabelaNotas">                ← UIRenderer escreve aqui
<div id="tabelaMoedas">               ← UIRenderer escreve aqui
<div id="valorExibicao">              ← UIRenderer escreve valor formatado
<section id="resultadosSection">      ← UIRenderer mostra/esconde

<!-- CLASSES CSS -->
<div class="result-row zero">         ← CSS aplica estilos
<div class="result-value">            ← CSS colore resultado
```

---

## 📍 Mapeamento Completo: HTML ↔ JS

### INPUT (Entrada do usuário)

**HTML:**
```html
<input 
    type="number" 
    id="valor" 
    placeholder="0.00" 
    step="0.01" 
    min="0" 
    max="1000000.00"
    value="576.73"
>
```

**Como JS acessa:**
```javascript
// controller.js - Linha 10
this.inputValor = document.getElementById('valor');

// Ler valor
const valor = parseFloat(this.inputValor.value);  // 576.73

// Escrever valor
this.inputValor.value = "123.45";

// Focar no input
this.inputValor.focus();
```

**Fluxo:**
1. Usuário digita "576.73"
2. `validator.js` sanitiza em tempo real (evento 'input')
3. Usuário clica "Calcular"
4. `controller.js` lê `inputValor.value`
5. `decomposer.js` processa
6. `renderer.js` escreve no HTML

---

### BOTÃO CALCULAR

**HTML:**
```html
<button class="btn-calcular" id="btnCalcular">
    Calcular Decomposição
</button>
```

**Como JS acessa:**
```javascript
// controller.js - Linha 12
this.btnCalcular = document.getElementById('btnCalcular');

// Escutar clique
this.btnCalcular.addEventListener('click', () => this.calcular());
```

**Fluxo:**
1. Usuário clica botão
2. Dispara evento 'click'
3. Chama `this.calcular()`
4. Executa algoritmo
5. Renderiza resultados

---

### BOTÃO NOVO

**HTML:**
```html
<button class="btn-novo" id="btnNovo">
    Calcular Outro Valor
</button>
```

**Como JS acessa:**
```javascript
// controller.js - Linha 13
this.btnNovo = document.getElementById('btnNovo');

// Escutar clique
this.btnNovo.addEventListener('click', () => this.resetar());
```

**Fluxo:**
1. Usuário clica botão
2. Dispara evento 'click'
3. Chama `this.resetar()`
4. Limpa a UI
5. Foca no input para novo valor

---

### TABELA DE NOTAS (Saída)

**HTML (estrutura vazia):**
```html
<div class="result-table" id="tabelaNotas">
    <!-- Preenchido dinamicamente pelo JS -->
</div>
```

**Como JS escreve:**
```javascript
// renderer.js - Linha 26
static renderizarNotas(notas) {
    const container = document.getElementById('tabelaNotas');
    container.innerHTML = '';  // Limpa antes
    
    notas.forEach(nota => {
        const row = this.criarLinhaResultado(nota);
        container.appendChild(row);  // Adiciona linha
    });
}
```

**Resultado no HTML (após processamento):**
```html
<div id="tabelaNotas">
    <div class="result-row">
        <span class="result-label">5 nota(s) de R$ 100.00</span>
        <div class="result-value">5</div>
    </div>
    <div class="result-row">
        <span class="result-label">1 nota(s) de R$ 50.00</span>
        <div class="result-value">1</div>
    </div>
    <!-- ... mais linhas ... -->
</div>
```

---

### TABELA DE MOEDAS (Saída)

**HTML (estrutura vazia):**
```html
<div class="result-table" id="tabelaMoedas">
    <!-- Preenchido dinamicamente pelo JS -->
</div>
```

**Como JS escreve:**
```javascript
// renderer.js - Linha 42
static renderizarMoedas(moedas) {
    const container = document.getElementById('tabelaMoedas');
    container.innerHTML = '';
    
    moedas.forEach(moeda => {
        const row = this.criarLinhaResultado(moeda);
        container.appendChild(row);
    });
}
```

---

### SEÇÃO DE RESULTADOS (Visibilidade)

**HTML (oculta por padrão):**
```html
<section class="results-section" id="resultadosSection" style="display: none;">
    <!-- Conteúdo -->
</section>
```

**Como JS controla:**
```javascript
// renderer.js - Linha 67
static exibirResultados(resultado) {
    // ... renderiza notas e moedas ...
    
    const section = document.getElementById('resultadosSection');
    section.style.display = 'block';  // Mostra
    
    section.scrollIntoView({ behavior: 'smooth' });  // Scroll suave
}

// controller.js - Linha 53
static esconderResultados() {
    document.getElementById('resultadosSection').style.display = 'none';  // Esconde
}
```

**Fluxo:**
1. Página carrega: `display: none` (oculto)
2. Usuário calcula
3. JS muda para `display: block`
4. Seção fica visível com animação

---

### VALOR EXIBIÇÃO (Saída)

**HTML:**
```html
<p>Valor inserido: <strong id="valorExibicao">R$ 0.00</strong></p>
```

**Como JS escreve:**
```javascript
// renderer.js - Linha 62
static exibirResultados(resultado) {
    const valorElement = document.getElementById('valorExibicao');
    valorElement.textContent = MoneyConverter.formatarMoeda(resultado.valorOriginal);
    // Escreve: "R$ 576.73"
}
```

---

## 🎬 Exemplo Completo: Usuário Digita 123.45

### PASSO 1: Digitação (evento 'input')

```javascript
// HTML dispara evento quando usuário digita
inputValor.addEventListener('input', (event) => {
    // validator.js - sanitizar
    event.target.value = Validator.sanitizarValor(event.target.value);
    // Remove caracteres inválidos
    // HTML atualizado: value="123.45"
});
```

### PASSO 2: Clique no Botão (evento 'click')

```javascript
// HTML dispara evento ao clicar
btnCalcular.addEventListener('click', () => this.calcular());

// controller.js - calcular()
calcular() {
    const valor = parseFloat(this.inputValor.value);  // Lê HTML
    // valor = 123.45
    
    const resultado = MoneyDecomposer.decomporValor(valor);
    // Processa (sem tocar HTML)
    
    UIRenderer.exibirResultados(resultado);  // Escreve HTML
}
```

### PASSO 3: Renderização (escreve no HTML)

```javascript
// renderer.js
static exibirResultados(resultado) {
    // Limpa containers antigos
    document.getElementById('tabelaNotas').innerHTML = '';
    document.getElementById('tabelaMoedas').innerHTML = '';
    
    // Renderiza notas
    const notaRow = document.createElement('div');
    notaRow.className = 'result-row';
    notaRow.innerHTML = `
        <span class="result-label">1 nota(s) de R$ 100.00</span>
        <div class="result-value">1</div>
    `;
    document.getElementById('tabelaNotas').appendChild(notaRow);
    
    // HTML agora tem:
    // <div id="tabelaNotas">
    //     <div class="result-row">
    //         <span class="result-label">1 nota(s) de R$ 100.00</span>
    //         <div class="result-value">1</div>
    //     </div>
    // </div>
    
    // Mostra section
    document.getElementById('resultadosSection').style.display = 'block';
    document.getElementById('resultadosSection').scrollIntoView();
}
```

### PASSO 4: Usuário Vê (HTML renderizado)

```html
<section id="resultadosSection" style="display: block;">
    <div id="tabelaNotas">
        <div class="result-row">
            <span class="result-label">1 nota(s) de R$ 100.00</span>
            <div class="result-value">1</div>
        </div>
    </div>
    <!-- ... mais resultados ... -->
</section>
```

---

## 🔍 Tabela: Quem Acessa O Quê

| Módulo | Lê Do HTML | Escreve No HTML | Escuta Eventos |
|--------|-----------|-----------------|----------------|
| **config.js** | ❌ | ❌ | ❌ |
| **converter.js** | ❌ | ❌ | ❌ |
| **validator.js** | ❌ | ❌ | ❌ |
| **resultado.js** | ❌ | ❌ | ❌ |
| **decomposer.js** | ❌ | ❌ | ❌ |
| **renderer.js** | ❌ | ✅ `#tabelaNotas`, `#tabelaMoedas`, `#valorExibicao`, `#resultadosSection` | ❌ |
| **controller.js** | ✅ `#valor` | ❌ | ✅ `click`, `keypress`, `input` |
| **app.js** | ❌ | ❌ | ❌ |

---

## 📊 Mapa de Comunicação (Diagrama ASCII)

```
┌──────────────────────────────────────────────────────────┐
│                      HTML/DOM/CSS                         │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │ #valor      │  │ #btnCalcular │  │ #btnNovo       │  │
│  │ (input)     │  │ (button)     │  │ (button)       │  │
│  └──────┬──────┘  └──────┬───────┘  └────────┬───────┘  │
│         │                 │                   │           │
│         ↓                 ↓                   ↓           │
│  ┌────────────────────────────────────────────────────┐  │
│  │          UIController (controller.js)              │  │
│  │  - Lê: #valor                                      │  │
│  │  - Escuta: click, keypress, input                 │  │
│  │  - Orquestra: validator → decomposer → renderer   │  │
│  └────────────────────────────────────────────────────┘  │
│         ↑                                       │         │
│         │                                       ↓         │
│  ┌────────────────┐  ┌────────────────────────────────┐ │
│  │ Validator      │  │      UIRenderer (renderer.js)  │ │
│  │ Decomposer     │  │  - Escreve: #tabelaNotas       │ │
│  │ (lógica pura)  │  │  - Escreve: #tabelaMoedas      │ │
│  │                │  │  - Escreve: #valorExibicao     │ │
│  │ ❌ Sem DOM     │  │  - Controla: #resultadosSection│ │
│  └────────────────┘  └────────────────────────────────┘ │
│         ↑                                       ↑         │
│         │                       ┌───────────────┘         │
│         └───────────────────────┘                         │
│                                                           │
│  ┌────────────────┐  ┌────────────────┐                 │
│  │ #tabelaNotas   │  │ #tabelaMoedas  │                 │
│  │ #valorExibicao │  │ #resultadosBtn │                 │
│  └────────────────┘  └────────────────┘                 │
└──────────────────────────────────────────────────────────┘
```

---

## ✅ Checklist: Elementos HTML com IDs

Quando adicionar nova feature, verificar:

- [ ] Nova entrada → adicionar `<input id="...">` 
- [ ] Novo botão → adicionar `<button id="...">` 
- [ ] Novo painel → adicionar `<div id="...">` 
- [ ] Atualizar `controller.js` com `document.getElementById(...)`
- [ ] Atualizar `renderer.js` para escrever no novo elemento
- [ ] Testar fluxo completo

---

## 🎓 O Que Acham Cada Um?

| O que quer... | Vai em... |
|---------------|-----------|
| Adicionar novo input | HTML + `controller.js` |
| Mudar layout resultado | HTML + `css/styles.css` |
| Mudar lógica cálculo | `decomposer.js` |
| Adicionar validação | `validator.js` |
| Mudar como exibe dados | `renderer.js` |
| Adicionar nova moeda | `config.js` |

---

## 🚨 Erros Comuns

### ❌ ERRADO: Lógica pura com DOM

```javascript
// renderer.js ou decomposer.js
let resultado = decomporValor(valor);
document.getElementById('tabelaNotas').innerHTML = '...';  // ❌ Acoplado!
```

### ✅ CERTO: Separação clara

```javascript
// decomposer.js (sem HTML)
let resultado = decomporValor(valor);

// controller.js (orquestra)
UIRenderer.exibirResultados(resultado);  // ✅ Limpo!
```

---

## 💡 Resumo

**JavaScript e HTML conversam através de:**

1. **IDs** (`id="..."`) - Seletores únicos
2. **DOM Methods** (`getElementById`, `appendChild`, etc)
3. **Event Listeners** (click, input, keypress)
4. **innerHTML / textContent** - Escrever dados
5. **style.display** - Mostrar/esconder elementos

**Fluxo:**
```
HTML (estrutura) → JS (lê/escreve) → CSS (estilo) → Usuário vê
```

**Separação:**
- `controller.js` = ponte com HTML
- `renderer.js` = escreve no HTML
- `decomposer.js` = pura lógica (sem DOM)

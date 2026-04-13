# 💰 Conversor de Notas e Moedas

Aplicação web profissional para decomposição de valores monetários em notas e moedas.

## 🎯 O que faz?

- Lê um valor monetário (0 a 1.000.000,00)
- Decompõe em notas (100, 50, 20, 10, 5, 2)
- Decompõe em moedas (1, 0.50, 0.25, 0.10, 0.05, 0.01)
- Garante a quantidade **mínima** de denominações
- Interface profissional e responsiva

## 🚀 Como usar

1. Abra `html/index.html` no navegador
2. Digite um valor (ex: 576.73)
3. Clique em "Calcular Decomposição"
4. Veja o resultado em notas e moedas

## 📁 Estrutura

```
projeto-notas-moedas/
├── html/index.html          # Interface (HTML)
├── css/styles.css           # Design (CSS)
├── js/script.js             # Lógica (JavaScript)
├── DOCUMENTACAO.md          # Documentação completa
└── README.md                # Este arquivo
```

## 🔧 Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Design responsivo com gradientes e animações
- **JavaScript (ES6+)**: Algoritmo guloso para decomposição

## 📖 Documentação

Para detalhes técnicos completos, veja [DOCUMENTACAO.md](DOCUMENTACAO.md)

## 💡 Exemplo

**Entrada:** 576.73

**Saída:**
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

**Desenvolvido para:** Atividade de Lógica Matemática | **Ano:** 2026

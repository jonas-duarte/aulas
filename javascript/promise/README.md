# Exercicios

Utilizando promises resolva os seguintes exercicíos:

## 1. Modificando apenas a função **print()**, faça o conteúdo ser exibido na ordem correta

```javascript
const promise = new Promise((resolve) => resolve("Segundo!!"));

function print() {
  console.log("Primeiro!!");
  promise.then((n) => console.log(n));
  console.log("Terceiro!!");
}

print();
// Primeiro!!
// Segundo!!
// Terceiro!!
```

## 2. Escreva o que cada cliente comprou

```javascript
const clientes = new Promise((resolve) =>
  resolve([
    { id: 1, nome: "José" },
    { id: 2, nome: "Pedro" },
    { id: 3, nome: "João" },
  ])
);

const pedidos = new Promise((resolve) =>
  resolve([
    { id: 1, clientId: 1, produto: "Computador" },
    { id: 2, clientId: 2, produto: "XBOX ONE" },
    { id: 3, clientId: 3, produto: "Mouse" },
    { id: 4, clientId: 2, produto: "Teclado" },
    { id: 5, clientId: 1, produto: "Celular" },
    { id: 6, clientId: 2, produto: "Headset" },
    { id: 7, clientId: 3, produto: "Monitor" },
    { id: 8, clientId: 2, produto: "Notebook" },
    { id: 9, clientId: 1, produto: "Carregador do iPhone" },
  ])
);

// ... code here

// José comprou: Computador, Celular, Carregador do iPhone;
// Pedro comprou: XBOX ONE, Teclado, Headset, Notebook;
// João comprou: Mouse, Monitor;
```

## 3. Comprando bananas 
Cada cacho de banana custa 3 reais, caso você informe uma quantidade multipla de 3 e não sobre troco, a promise deve ser resolved, caso precise de troco, deve ser retornado um reject, pois o dono da venda odeia dar troco e é muito furioso quanto a isso.

**Observação:** No exercício abaixo a ordem do resultado não importa, já que estamos trabalhando com funções assíncronas

```javascript
function comprarBananas(valor) {
  // ... code here
}

function escreve(promise) {
  promise
    .then((v) =>
      console.log(
        `Você comprou bananas por ${v} reais e não precisou de troco!`
      )
    )
    .catch(({ valor, troco }) =>
      console.log(
        `Você comprou bananas por ${valor} reais e precisou de ${troco} reais de troco!`
      )
    );
}

escreve(comprarBananas(9));
escreve(comprarBananas(10));
escreve(comprarBananas(12));
escreve(comprarBananas(17));
// Você comprou bananas por 9 reais e não precisou de troco!
// Você comprou bananas por 12 reais e não precisou de troco!
// Você comprou bananas por 10 reais e precisou de 1 reais de troco!
// Você comprou bananas por 17 reais e precisou de 2 reais de troco!
```

## 4. Dobrando números

```javascript
function double(n) {
  return new Promise((resolve) => {
    resolve(n * 2);
  });
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ...code here

// [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
```

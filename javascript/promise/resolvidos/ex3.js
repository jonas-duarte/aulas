function comprarBananas(valor) {
  return new Promise((resolve, reject) => {
    if (valor % 3 === 0) resolve(valor);
    else reject({ valor, troco: valor % 3 });
  });
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

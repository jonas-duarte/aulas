function double(n) {
  return new Promise((resolve) => {
    resolve(n * 2);
  });
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Promise.all(numeros.map((n) => double(n))).then((n) => console.log(n));
// [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

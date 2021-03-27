const promise = new Promise((resolve) => resolve("Segundo!!"));

async function print() {
  console.log("Primeiro!!");
  await promise.then((n) => console.log(n));
  console.log("Terceiro!!");
}

print();
// Primeiro!!
// Segundo!!
// Terceiro!!

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

(async () => {
  const _clientes = await clientes;
  const _pedidos = await pedidos;

  _clientes.forEach(({ id, nome }) => {
    const comprou = _pedidos
      .filter(({ clientId }) => clientId === id)
      .map(({ produto }) => produto)
      .join(", ");

    console.log(`${nome} comprou: ${comprou};`);
  });
})();

// José comprou: Computador, Celular, Carregador do iPhone;
// Pedro comprou: XBOX ONE, Teclado, Headset, Notebook;
// João comprou: Mouse, Monitor;

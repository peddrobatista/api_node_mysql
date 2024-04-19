(async () => {
    const db = require('./db');
    console.log("Obtendo todos os clientes:");
    const clientes = await db.todosClientes();
    console.log(clientes);
})()
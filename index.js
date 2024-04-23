(async () => {
    const db = require('./db');
    // console.log("Inserir novo cliente...");
    // await db.insereClientes({nome: 'joão', idade: '22'})

    /* await db.atualizaClientes(2, {nome: 'Carlos', idade: '27'})
    console.log("Cliente atualizado...") */
    const id = 4;
    await db.deletarClientes(id);
    console.log(`Cliente  de ID = ${id} foi deletado!`);

    console.log("Obtendo todos os clientes:");
    const clientes = await db.todosClientes();
    console.log(clientes);
})()
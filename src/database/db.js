const { Database } = require("sqlite3")
//com as linhas 1 e 2 criamos o banco de dados.
// no terminal rodar: node src/database/db.js e ele cria um banco de dados

//1. importar a dependência do sqlite3
const sqlite3 = require ("sqlite3").verbose()

//2. criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database.db.js")

module.exports = db



//utilizar o objeto de bando de dados, para nossas operações
//db.serialize(() => {
   //o metodo serialize gera um sequencia de código.

    //com comandos SQL eu vou:
    // 1 criar uma tabela

    // foi utilizado aspas simples para que o código possa ser escrito na linha de baixo
    // usando aspas dupla eu não posso fazer em outra linha
    //db.run(`
   //     CREATE TABLE IF NOT EXISTS places (
   //         id INTEGER PRIMARY KEY AUTOINCREMENT,
  //          image TEXT,
   //         name TEXT,
   //         address TEXT,
   //         address2 TEXT,
   //         state TEXT,
   //         city TEXT,
    //        items TEXT

   //     );     
    
  //  `)


  //  // 2 inserir dados na tabela
  //  const query = `
  //      INSERT INTO places (
  //          image,
   //         name,
  //          address,
    //        address2,
      //      state,
        //    city,
   //         items
  //      ) VALUES (?,?,?,?,?,?,?);

  //    `
    //   const values = [

  //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
   //     "Papersider",
   //     "Guilherme Gemballa, Jardim América",
  //      "número 260",
   //     "Santa Catarina",
   //     "Rio do Sul",
   //     "Resíduos Eletrônicos, Lâmpadas"
  //  ]

  //  function afterInsertData(err) {
  //      if(err) {
  //          return console.log(err)
   //   }
  //      console.log("Cadastrado com Sucesso")
    //    console.log(this)
   //   }

  //  db.run(query, values, afterInsertData)
     

    // 3 consultar dados da tabela
    
    // db.all(`SELECT name * places`, function(err, rows) {
  //      if(err) {
  //          return console.log(err)
  //      }
//
  //      console.log("Aqui estão seus registros: ")
  //      console.log(rows)

 //   })

            // 4 deletar um dado na tabela
            //    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
        //
        //           if(err) {
        //             return console.log(err)
            //       }
            //     
                //   console.log("Registro deletado com sucesso!")
            //      
                //})
            
   
// 





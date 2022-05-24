
const { json } = require('express/lib/response')
const math = require('mathjs')
const pool = require('../db/config')


module.exports = {

  

    
    async create(req, res){
        const values = req.body.values
        let result = ''
        let conn;

        try
       {
       // Realiza as Operações Matemáticas
       result = math.evaluate(req.body.values)
       // armazena no banco os valores e o resultado da operação
       conn = await pool.getConnection()
       conn.query("insert into calculadora.calc (conta, resultado) values( ?, ?)" , [ values, result])
      
        }
       catch(e)
        {
         result = "Error";
        }
    res.render("index" , { result: result})

     },
     
     async index(req, res){
       let list;
       let conn;

       try{
       conn = await pool.getConnection()
       const rows = await conn.query("SELECT * FROM calculadora.calc")
       list = JSON.stringify(rows)
       }
       catch(e){
        console.log(e)
       }  
       res.render("historico" , { list: list})
     }

    }
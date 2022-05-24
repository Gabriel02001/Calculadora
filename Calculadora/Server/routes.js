const express = require('express')
const CalculatorController = require('./controllers/CalculatorController')




const route = express.Router()


route.get('/', (req,res) => res.render("index", { result: ""}))
route.get('/historico', CalculatorController.index)

route.post('/', CalculatorController.create)




module.exports = route
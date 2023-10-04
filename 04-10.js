const PORT = 8080;
const express = require("express");
const app = express();
const fs = require('fs');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
res.render('cadastro2')
})

app.post('/app',(req, res) => {
const data = {
nome: req.body.name,
sobrenome: req.body.surname,
cidade: req.body.cep
}
res.render('exemplo', {data})
})

app.listen(PORT, () => {
console.log(`server funcionando em ${PORT}`)
})
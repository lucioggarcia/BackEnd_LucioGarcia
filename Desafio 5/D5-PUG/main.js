
const Contenedor = require('./contenedor')
const newContainer = new Contenedor('./productos.json')


const express = require('express')
const app = express()

const PORT = 8000


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.set('views', './views') 
app.set('view engine', 'pug') 


app.get('/productos', async(req, res) => {
    const products = await newContainer.getAll();
    res.render('list', {products})
})


app.get('/', (req,res) => {
    res.render('form', {})
})


app.post('/productos', async(req,res) => {
    const dataBody = req.body
    await newContainer.save(dataBody)
    res.redirect('/')
})


const server = app.listen(PORT, () => {
    console.log(`Server listening in port: ${server.address().port}`)
})

server.on('error', error => {
    console.log(error)
})
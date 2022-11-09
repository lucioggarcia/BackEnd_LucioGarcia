
const Contenedor = require('./contenedor')
const newContainer = new Contenedor('./productos.json')


const express = require('express')
const app = express()

const PORT = 8080


app.use(express.json());
app.use(express.urlencoded({extended:true}))


const handlebars = require('express-handlebars')


app.engine('hbs', handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views',
        
    })
)


app.set('views', './views') 
app.set('view engine', 'hbs') 


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
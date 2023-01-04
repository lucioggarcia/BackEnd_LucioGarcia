import { Router } from 'express'

const productosWebRouter = new Router()


productosWebRouter.get('/home', (req, res) => {
    const nombre = req.session.nombre;
    if(nombre){
        res.render(process.cwd() + '/views/pages/home.ejs', { nombre: nombre })
    }else{
        res.redirect('/login')
    }
   
})

productosWebRouter.get('/productos-vista-test', (req, res) => {
    res.sendFile(process.cwd() + '/views/productos-vista-test.html')
})

export default productosWebRouter
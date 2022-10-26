const Contenedor = require('./contenedor')


//SERVIDOR**************************
const express = require('express')
const aplicacion = express();
const PORT = 8080;
//**********************************

const producto = new Contenedor('./productos.json');


//paso1- compilar la linea de abajo sola
//producto.save({ title: 'Buzo', price: 500, thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flistado.mercadolibre.com.ar%2Fbuzo-nike&psig=AOvVaw1mo39UGweWhYZdQ1gK3QKN&ust=1666311969767000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPiwhvrF7foCFQAAAAAdAAAAABAH'});

//paso2- compilar solo la linea de abajo(comentar linea anterior)
//producto.getById(2);

//paso3- compilar la linea de abajo(comentar las demas)
//producto.getAll();

//paso4- compliar linea de abajo(comentar las demas)
//producto.deleteById(4);

//paso5- ultimo paso- eliminar todo
//producto.deleteAll()


//ENDPOINTS***********************************

aplicacion.get('/productos', async (peticion,respuesta)=>{
    const all = await producto.getAll()

    respuesta.json(all)
})

aplicacion.get('/productoRandom', async (peticion,respuesta)=>{
    const all = await producto.getAll()
    
    const random =   Math.floor(Math.random()*all.length)+1


    const prodRandom = await producto.getById(random)

    respuesta.json(prodRandom)
})



//********************************************* 



//SERVIDOR************************

const servidor = aplicacion.listen(PORT,()=>{
    console.log(`servidor escuchando: ${servidor.address().port}`)
})

servidor.on('error', error=> console.log(`Error: ${error}`))

//******************************* 

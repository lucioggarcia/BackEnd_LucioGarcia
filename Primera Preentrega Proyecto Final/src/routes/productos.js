//RUTA PRODUCTOS--------------------------------------------
import express from 'express';
import { Contenedor } from '../contenedor/contenedorFs.js';
const rutaProducto = express.Router();

const productos = new Contenedor('src/db/productos.json');

const privilegio = (peticion, respuesta, next) => {
  const administrador = peticion.headers.administrador;
  if (administrador === 'true') {
    next();
  } else {
    respuesta.status(401).send({ error : -1, descripcion: `ruta ${peticion.url} no autorizada` });
  }
};

//ENDPOINTS-------------------------------------------------

rutaProducto.get('/', async (peticion, respuesta) => {
  const listaProductos = await productos.getAll();
  respuesta.json(listaProductos);
});

rutaProducto.get('/:id', async (peticion, respuesta) => {
    const getId = parseInt(peticion.params.id)
    const producto = await productos.getById(getId)

    producto ? respuesta.json(producto) : respuesta.status(400).json({"Error": "El producto no existe"})

});

rutaProducto.post('/', privilegio, async (peticion, respuesta) => {
    const getBody = peticion.body
    getBody.timestamp = Date.now()

    const newIdProduct = productos.save(getBody)

    newIdProduct ? respuesta.json({
        status: 'ok'
      }) : respuesta.status(400).json({"Error": "Error al cargar body"})

  
});

rutaProducto.put('/:id', privilegio, async (peticion, respuesta) => {
  const idProducto = parseInt(peticion.params.id);
  const producto = peticion.body;
  await productos.update(idProducto, producto);
  respuesta.json(producto);
});

rutaProducto.delete('/:id', privilegio, async (peticion, respuesta) => {

    const getId = parseInt(peticion.params.id)

    await productos.deleteById(getId)

    respuesta.json({
        status: 'ok'
      })

  
});

export { rutaProducto };
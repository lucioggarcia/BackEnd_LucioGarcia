//SERVIDOR--------------------------------------------
import express from 'express';

//IMPORTAR RUTAS--------------------------------------------
import { rutaProducto } from './routes/productos.js';
import { rutaCarrito } from './routes/carrito.js';

const aplicacion = express();

const port = process.env.PORT || 8080;

//JSON--------------------------------------------
aplicacion.use(express.json());
aplicacion.use(express.urlencoded({ extended: true }));

//IMPLEMENTACION RUTAS--------------------------------------------
aplicacion.use('/api/productos', rutaProducto);
aplicacion.use('/api/carrito', rutaCarrito);

//MIDLEWARES PARA RUTAS NO IMPLEMENTADAS--------------------------------------------
aplicacion.use((peticion, respuesta, next) => {
  if (!peticion.route) {
    respuesta.status(404).send({ error : -2, descripcion: `ruta ${peticion.url} no encontrada` });
  } else {
    next();
  }
})

//SERVER*****************************************************
const servidor = aplicacion.listen(port, () => {
  console.log(`Servidor escuchando: ${servidor.address().port}`);
});

servidor.on('error', error => console.log(`Error: ${error}`));
//****************
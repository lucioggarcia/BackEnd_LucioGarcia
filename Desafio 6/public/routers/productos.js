const { Router } = require("express");
const router = Router();
const Contenedor = require("../../controllers/controller.js");
const productos = new Contenedor("./controllers/productos.json");
const notFound = { error: "Producto no encontrado" };



router.get("/", async (req, res) => {
    const arrayProductos = await productos.getAll();
    console.log(arrayProductos);
    res.render("productos", {
        productos: arrayProductos,
        style: "productos.css",
        title: "Productos con Handlebars",
    });
});

module.exports = router;

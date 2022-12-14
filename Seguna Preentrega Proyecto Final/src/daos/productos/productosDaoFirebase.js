const config = require("../../config/config")
const contenedor = require("../../container/firebase")

const productos = new contenedor("productos")

const crud = async () => {
    await config.initFirebase()
    await productos.save({title: "BALON AL RIHLA", price: 35555, thumbnail: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_971658-MLA52063702604_102022-O.jpg&imgrefurl=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fpelota-de-futbol-adidas-al-rihla-training-n-5-color-blanco-y-pantone%2Fp%2FMLA19698714&tbnid=KZfImdJkLTUfXM&vet=12ahUKEwj0ld3m2fn7AhWeupUCHTL4DuwQMygLegUIARCwAg..i&docid=PKNSuOeBSQ_BlM&w=494&h=500&q=al%20rihla%20adidas&ved=2ahUKEwj0ld3m2fn7AhWeupUCHTL4DuwQMygLegUIARCwAg"})
    await productos.getAll()
    await productos.getById("cudQHslvXKXhv6i9Usaq")
    await productos.deleteById("cudQHslvXKXhv6i9Usaq")
    await productos.deleteAll()
}

crud()
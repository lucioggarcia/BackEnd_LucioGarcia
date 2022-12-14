const config = require("../../config/config")
const contenedor = require("../../container/mongodb")

const carritos = new contenedor("carritos", {
    timestamp: {type: String, require: true, max: 100},
    productos: {type: Array, require: true}
})

const crud = async () => {
    await config.initMongoDB()
    /* await carritos.save({timestamp: 1670919375156,products: [{
        timestamp:1670919375156,
        title:"BALON AL RIHLA",
        description:"BALON AL RIHLA",
        code:"9879",
        image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_971658-MLA52063702604_102022-O.jpg&imgrefurl=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fpelota-de-futbol-adidas-al-rihla-training-n-5-color-blanco-y-pantone%2Fp%2FMLA19698714&tbnid=KZfImdJkLTUfXM&vet=12ahUKEwj0ld3m2fn7AhWeupUCHTL4DuwQMygLegUIARCwAg..i&docid=PKNSuOeBSQ_BlM&w=494&h=500&q=al%20rihla%20adidas&ved=2ahUKEwj0ld3m2fn7AhWeupUCHTL4DuwQMygLegUIARCwAg",
        price:35555,
        stock:10
    }]}) */
    //await carritos.getAll()
    //await carritos.getById("639a13b59d244c07c6a04cc0")
    //await carritos.deleteAll()
    //await carritos.deleteById("639a13b59d244c07c6a04cc0")
}

crud()
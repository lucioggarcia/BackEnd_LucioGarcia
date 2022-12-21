const config = require("../../src/config")
const contenedor = require("../../src/contenedores/mongodb")

const mensajes = new contenedor("mensajes")

const crud = async () => {
    await config.initFirebase()
    await mensajes.save({
        author:{
            id:'lucio@gmail.com',
            nombre:'luciog',
            apellido:'garcia',
            edad:21,
            alias:'luchogarcia',
            avatar:'url avatar'
        },
        text: "Hola!"

    })
    //await mensajes.getAll()
    //await mensajes.getById(S4XRMdPNpAly9nW3Sff1)
    //await mensajes.deleteById( S4XRMdPNpAly9nW3Sff1)
    //await mensajes.deleteAll()
}

crud()
const config = require("../../src/config")
const contenedor = require("../../src/contenedores/mongodb")

const mensajes = new contenedor("mensajes",{
    author: {type:Object,require:true},
    text:{type:String,require:true,max:100}
})

const crud = async ()=>{
    await config.initMongoDB()
    /*
    await mensajes.save({
        author:{
            id:'lucio@gmail.com',
            nombre:'luciog',
            apellido:'garcia',
            edad:21,
            alias:'luchogarcia',
            avatar:'url avatar'
        },
        text:"Hola!"

    })
    */
   //await mensajes.getAll()
   //await mensajes.getById()
   //await mensajes.deleteAll()
   //await mensajes.deleteById()
}

crud()
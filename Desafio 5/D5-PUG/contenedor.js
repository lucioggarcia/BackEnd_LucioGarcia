const fs = require('fs')

class Contenedor {
    constructor(filename) {
        this.filename = filename
    }

    
    async save(object) {
        try {
            
            if(fs.existsSync(this.filename)) {
                let info = await fs.promises.readFile(this.filename, 'utf8')
                let result = JSON.parse(info)

                
                if (result.length > 0) {
                    let lastId = result.length + 1
                    let newProduct = {
                        id: lastId,
                        ...object
                    }
                    result.push(newProduct)
                    await fs.promises.writeFile(this.filename, JSON.stringify(result, null, 2))
                    return lastId
                } else { 
                    let newProduct = {
                        id: 1,
                        ...object
                    }
                    result.push(newProduct)
                    await fs.promises.writeFile(this.filename, JSON.stringify(result, null, 2))
                    return 1
                }
            } else {
                
                let newProduct = {
                    id: 1,
                    ...object
                }
                await fs.promises.writeFile(this.filename, JSON.stringify([newProduct], null, 2))
                return 1
            }
        } catch (error) {
            console.log(error)
        }
    }

    
    async getById(id) {
        try {
            let info = await fs.promises.readFile(this.filename, 'utf8')
            let result = JSON.parse(info)

            return result.find(product => product.id === id)
        } catch (error) {
            return null
        }
    }

    
    async getAll() {
        try {
            let info = await fs.promises.readFile(this.filename, 'utf8')
            let result = JSON.parse(info)
            return result
        } catch (error) {
            console.log(error)
        }
    }

    
    async deleteById(id) {
        try {
            let info = await fs.promises.readFile(this.filename, 'utf8')
            let result = JSON.parse(info)

            const objectToDelete = result.find(product => product.id === id)
            if(objectToDelete) {
                const index = result.indexOf(objectToDelete)
                result.splice(index, 1)
                await fs.promises.writeFile(this.filename, JSON.stringify(result, null, 2))
                return true
            } else {
                console.log(`Id ${id} doesn't exists`)
                return null
            }
        } catch (error) {
            console.log(error)
        }
    }

    //deleteAll()
    async deleteAll() {
        await fs.promises.writeFile(this.filename, JSON.stringify([]))
    }

    //updateById()
    async updateById(id, newObject) {
        try {
            let info = await fs.promises.readFile(this.filename, 'utf8')
            let result = JSON.parse(info)

            const objectToUpdate = result.find(product => product.id === id)
            if(objectToUpdate) {
                const index = result.indexOf(objectToUpdate)
                
                result[index]['title'] = newObject.title
                result[index]['price'] = newObject.price
                result[index]['thumbnail'] = newObject.thumbnail
                await fs.promises.writeFile(this.filename, JSON.stringify(result, null, 2))
                return true
            } else {
                console.log(`Id ${id} doesn't exists`)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Contenedor
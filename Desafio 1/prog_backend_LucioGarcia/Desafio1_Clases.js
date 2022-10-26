class Libro {
    constructor(nombre,autor){
        this.nombre = nombre;
        this.autor = autor;
    }

    getNombre(){
        return this.nombre;
    }

    getAutor(){
        return this.autor;
    }
}

class Usuario {

    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=[];
        this.mascotas=[];
    }


    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        console.log(this.mascotas.length)
    }

    addBook(nombre,autor) {
        const book= new Libro(nombre,autor)
        this.libros.push(book)
    }

    getBookNames() {
        let a=[];
        this.libros.forEach(e=>{
            a.push(e.nombre)
            
        })
        console.log(a);
    }

}

const yo= new Usuario('Lucio','Garcia');

yo.getFullName();


yo.addMascota('perro');
yo.addMascota('perro');
yo.addMascota('perro');
yo.addMascota('loro');

yo.countMascotas();

yo.addBook('Harry Potter','J.K Rowling');
yo.addBook('La leccion de August','R.J Palacio');

yo.getBookNames();
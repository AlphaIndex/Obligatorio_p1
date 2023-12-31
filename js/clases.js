// Oblig 2do semestre 2023 - Clases
//Guillermo Soanes y Danna Gonzales
class Sistema {
    constructor () {
        this.list_categorias = [];
        this.list_exp = [];
        this.list_compra = [];
        this.titulo_exp = "";
    }
    nuevaCategoria(categroria) {
        this.list_categorias.push(categroria);
    }
    nuevaExperiencia(experiencia) {
        this.list_exp.push(experiencia);
    }

    nuevaCompra(compra) {
        this.list_compra.push(compra)
    }

    darCompra() {
        return this.list_compra;
    }

    darExperiencia() {
        return this.list_exp;
    }
    
    darCategoria() {
        return this.list_categorias;
    }

    eliminarCategoria(posicion){
        this.list_categorias.splice(posicion, 1);
    }

    eliminarExperiencias(posicion){
        this.list_exp.splice(posicion, 1);
    }
    
    eliminarCompra(posicion){
        this.list_compra.splice(posicion, 1);
    }

    ordenarExpCreciente(){
        let listaOrdenada = [];
        for (let i of this.list_exp) {
            listaOrdenada.push(i);
        }
        listaOrdenada.sort(function(a,b){
            return a.compararCon(b);
        });
        return listaOrdenada;
    }

    ordenarExpDecreciente(){
        let listaOrdenada = [];
        for (let i of this.list_exp) {
            listaOrdenada.push(i);
        }
        listaOrdenada.sort(function(a,b){
            return b.compararCon(a);
        });
        return listaOrdenada;
    }

    encontrarCategoria(posicion){
        return this.list_categorias[posicion];
    }
   // encontrarExperiencia(posicion){
   //     return this.list_exp[posicion];
   // }
    verificarExistenciaExp(posicion){
        let validity = true;
        for (let i of this.list_exp){
            if (this.list_categorias[posicion].nombre == i.categoria.nombre) {
                validity = false;
            }
        }
        return validity;
    }
    verificarExistenciaComp(posicion){
        let validity = true;
        for (let i of this.list_compra){
            if (this.list_exp[posicion].titulo == i.experiencia.titulo) {
                validity = false;
            }
        }
        return validity;
    }
    filtrarCategoria(categoria, lista) {
        let listaFiltrada = [];
        for (let i of lista){
            if (this.list_categorias[categoria].nombre == i.categoria.nombre){
                listaFiltrada.push(i);
            }
        }
        return listaFiltrada;
    }
  /*  filtrarCategoriaCompraList(categoria, lista) {
        let listaFiltrada = [];
        for (let i of lista){
            if (categoria == i.experiencia.categoria.nombre){
                listaFiltrada.push(i);
            }
        }
        return listaFiltrada;
    }*/
    filtrarCategoriaCompra(categoria, lista) {
        let listaFiltrada = [];
        for (let i of lista){
            if (this.list_categorias[categoria].nombre == i.experiencia.categoria.nombre){
                listaFiltrada.push(i);
            }
        }
        return listaFiltrada;
    }
    filtrarCantidadP(posicion, lista) {
        let listaFiltrada = [];
        for (let i of lista) {
            if (posicion == i.cantidad) {
                listaFiltrada.push(i);
            }
        }
        return listaFiltrada;
    }
    asignarValorTitulo(titulo) {
        this.titulo_exp = titulo;
    }
    darNombreExperiencia(){
        return this.titulo_exp;
    }
    agregarcompra(exp) {
        for (let i of this.list_exp) {
            if (i.titulo == exp.experiencia.titulo) {
                i.compras++;
            }
        } 
    }
    mayorcompra() {
        let masComprada = [];
        let mayorValor = 0;
        for (let i of this.list_exp) {
            if (i.compras > mayorValor){
                masComprada = [];
                masComprada.push(i);
                mayorValor = i.compras;
            }else if (i.compras == mayorValor) {
                masComprada.push(i);
            }
        }
        return masComprada;
    }
   /* devolverTitulos() {
        let listaTitulos = [];
        for (let i of this.list_exp) {
            listaTitulos.push(i.titulo);
        }
        return listaTitulos;
    }*/
}
class Categoria {
    constructor(nombre_cate, detalles_cate) {
        this.nombre = nombre_cate;
        this.detalles = detalles_cate;
    }
    toString () {
        return "Nombre: " + this.nombre + "Detalle: " + this.detalles;
    }

}
class Experiencias {
    constructor(titulo_exp, descripcion_exp, precio_exp, cantidad_exp, categoria_exp) {
        this.titulo = titulo_exp;
        this.descripcion = descripcion_exp;
        this.precio = precio_exp;
        this.cantidad = cantidad_exp;
        this.categoria = categoria_exp;
        this.compras = 0;
    }
    compararCon(otro) {
        return this.precio-otro.precio;
    }
    toString () {
        return "Titulo: " + this.titulo + "Descripcion: " + this.descripcion + "Precio: " + this.precio + "Cantidad: " + this.cantidad + "Categoria: " + this.categoria;
    }
}
class Compra {
    constructor(nombre_compra, mail_compra, experiencia_compra,fecha_compra) {
        this.nombre = nombre_compra;
        this.mail = mail_compra;
        this.experiencia = experiencia_compra;
        this.fecha = fecha_compra;
    }
    toString () {
        return "Nombre: " + this.nombre + " Mail: " + this.mail + " Experiencia: " + this.experiencia + " Fecha: " + this.fecha_compra;
    }
}

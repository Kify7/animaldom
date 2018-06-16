/* document.write ("<p>hola</p>")

var obj = {
  hola: function() {
    console.log('hey hey hey');
  },
  nombre: 'Gabi'

},
*/


/*
function Persona (n, e) {
  this.nombre = n;
  this.edad = e;

  this.saludar = function() {
    console.log(' hola soy ' + this.nombre + ' y tengo ' + this.edad);
  }

}
var p1 = new Persona('Gabriela', 24);
p1.saludar();

var p2 = new Persona ('Karla', 22);
p2.saludar();

var p3 = new Persona ('Ara', 30);
p3.saludar();
*/

function Animal (r, t, p, e, m) {
  this.raza = r;
  this.tamano = t;
  this.patas = p;
  this.edad = e;
  this.mover = m;

    this.saludar = function () {
      console.log(' yo soy ' + this.raza + ' muy ' + this.tamano + ' tengo ' + this.patas + ' patas ' + ' y tengo ' +  this.edad + ' años ' + 'y puedo' + this.mover);
      if (this.raza == 'perro') {
        console.log('guau');
      } else if (this.raza == 'gato') {
        console.log('miau');
        } else {
          console.log('no soy ni perro ni gato');
      }

      this.madurez = function () {
        if (this.edad < 4) {
          console.log(' soy joven ');
        } else {
          console.log(' soy viejo');
        }

      }
    }

}
var a1 = new Animal ('perro', 'pequeño,', 4, 3, ' correr');
a1.saludar();
a1.madurez();
var a2 = new Animal ('gato', 'gordo,', 4, 7, ' brincar');
a2.saludar();
a2.madurez();
var a3 = new Animal ('ave', 'pequeño,', 2, 1, ' volar');
a3.saludar();
a3.madurez();

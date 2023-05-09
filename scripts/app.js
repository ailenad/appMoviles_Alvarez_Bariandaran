Vue.component('componente-cards',{
 
   data:function(){
    return{
        titulo:"Libros Disney",
            libros: [
        {
            id:1,
            img: "img/laSirenita.jpg",
            clase: "no fav",
            nombre: "La Sirenita",
            autor: "Hans Christian Andersen",
            descripcion: "La Sirenita es la historia de una niña llamada Ariel que sueña por conocer el mundo de los humanos. Un día se desata una enorme tormenta que hace naufragar un barco y Ariel rescatará a un apuesto joven de el mar, el príncipe Eric, del que se enamorará.",
            alt:"Imagen la sirenita"
        },
        {
            id:2,
            img: "img/cenicienta.jpg",
            clase: "no fav",
            nombre: "Cenicienta",
            autor: "Charles Perrault",
            descripcion: "Cenicienta vive con su madrastra y sus dos hijas, quienes la obligan a realizar todas las tareas del hogar. Mientras tanto, en palacio, los reyes deciden organizar un baile real, al que Cenicienta no puede asistir, hasta que llega su hada madrina.",
            alt:"Imagen cenicienta"
        },
        {
            id:3,
            img: "img/pocahontas.jpg",
            clase: "no fav",
            nombre: "Pocahontas",
            autor: "Sabina Colloredo",
            descripcion: "Pocahontas es una princesa india con la mente sabia y el corazón terco. John Smith es un colono inglés con los ojos azules y la ferocidad del aventurero. Ella sueña con un futuro en paz, él sueña con la conquista. Un amor imposible con una guerra cruel como telón de fondo.",
            alt:"Imagen Pocahontas"
        },
        {
            id:4,
            img: "img/peterpan.jpg",
            clase: "no fav",
            nombre: "Peter Pan",
            autor: "James Matthew Barrie",
            descripcion: "Peter Pan es un niño volador que, acompañado del hada Campanilla, invita a la niña Wendy y a sus dos hermanos a visitar volando la isla de Nunca Jamás y conocer a los Niños Perdidos que viven con él, con la intención de que Wendy sea la mamá de todos ellos.",
            alt:"Imagen peter pan",
        },
        {
            id:5,
            img: "img/laBellaDurmiente.jpg",
            clase: "no fav",
            nombre: "La Bella Durmiente",
            autor: "Charles Perrault",
            descripcion: "La bella durmiente trata de una bonita historia de amor sobre una joven princesa condenada a dormir eternamente hasta que llegase a su vida el verdadero amor. Se trata de un cuento que habla sobre la bondad y que ensalza el valor del amor, demostrando que es capaz de superar todos los obstáculos.",
            alt:"Imagen la bella durmiente"
        }

    ],
    }
},
    template:`
      <div class="contenedorLibros">
            <h1> {{titulo}} </h1>
            <hijos-cards v-for="x in libros"
                v-bind:key="x.id"
                v-bind:nombre="x.nombre" 
                v-bind:id="x.id"
                v-bind:autor="x.autor" 
                v-bind:descripcion="x.descripcion" 
                v-bind:img="x.img"
                v-bind:alt="x.alt">
            </hijos-cards>
        </div>`
})
Vue.component('hijos-cards', {
   props:["img","clase","nombre","autor","descripcion","alt","id"],
   template:`
       <div class="contenedor-hijo">
        <img v-bind:src="img" v-bind:alt="alt" class="portada"/>

        <h2> {{nombre}} </h2>
        <h3> {{autor}} </h3>
        <p> {{descripcion}} </p>
        </div>
   `
})
 var app= new Vue({
el: ".contenedor",
  data: {

  }
})

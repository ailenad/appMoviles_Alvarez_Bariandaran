Vue.component('componente-cards',{
 
   data:function(){
    return{
        titulo:"Nuestra bibilioteca",
            libros: [
        {
            id:1,
            img: "img/libros/laSirenita.png",
            clase: "no fav",
            favoritos: false,
            nombre: "La Sirenita",
            autor: "Hans Christian Andersen",
            descripcion: "La Sirenita es la historia de una niña llamada Ariel que sueña por conocer el mundo de los humanos. Un día se desata una enorme tormenta que hace naufragar un barco y Ariel rescatará a un apuesto joven de el mar, el príncipe Eric, del que se enamorará.",
            alt:"Imagen la sirenita"
        },
        {
            id:2,
            img: "img/libros/cenicienta.png",
            clase: "no fav",
            favoritos: false,
            nombre: "Cenicienta",
            autor: "Charles Perrault",
            descripcion: "Cenicienta vive con su madrastra y sus dos hijas, quienes la obligan a realizar todas las tareas del hogar. Mientras tanto, en palacio, los reyes deciden organizar un baile real, al que Cenicienta no puede asistir, hasta que llega su hada madrina.",
            alt:"Imagen cenicienta"
        },
        {
            id:3,
            img: "img/libros/pocahontas.png",
            clase: "no fav",
            favoritos: false,
            nombre: "Pocahontas",
            autor: "Sabina Colloredo",
            descripcion: "Pocahontas es una princesa india con la mente sabia y el corazón terco. John Smith es un colono inglés con los ojos azules y la ferocidad del aventurero. Ella sueña con un futuro en paz, él sueña con la conquista. Un amor imposible con una guerra cruel como telón de fondo.",
            alt:"Imagen Pocahontas"
        },
        {
            id:4,
            img: "img/libros/peterPan.png",
            clase: "no fav",
            favoritos: false,
            nombre: "Peter Pan",
            autor: "James Matthew Barrie",
            descripcion: "Peter Pan es un niño volador que, acompañado del hada Campanilla, invita a la niña Wendy y a sus dos hermanos a visitar volando la isla de Nunca Jamás y conocer a los Niños Perdidos que viven con él, con la intención de que Wendy sea la mamá de todos ellos.",
            alt:"Imagen peter pan",
        },
        {
            id:5,
            img: "img/libros/bellaDurmiente.png",
            clase: "no fav",
            favoritos: false,
            nombre: "La Bella Durmiente",
            autor: "Charles Perrault",
            descripcion: "La bella durmiente trata de una bonita historia de amor sobre una joven princesa condenada a dormir eternamente hasta que llegase a su vida el verdadero amor. Se trata de un cuento que habla sobre la bondad y que ensalza el valor del amor, demostrando que es capaz de superar todos los obstáculos.",
            alt:"Imagen la bella durmiente"
        },
         {
            id:6,
            img: "img/libros/aladin.jpeg",
            clase: "no fav",
            favoritos: false,
            nombre: "Aladdin",
            autor: "Howard Ashman",
            descripcion: "Es un joven ladrón de buen corazón que vive en la ciudad árabe de Agrabah junto a su mono mascota Abu. Un día rescata y se hace amigo de la princesa Jasmín, quien se escabulló del palacio para explorar la ciudad, cansada de su vida sobre-protegida.",
            alt:"imagen aladin"
        }

    ],
    }
},
    template:`
      <div class="contenedorLibros">
        <div class="banner"></div>
            <h1 class="tituloDisney"> {{titulo}} </h1>
    //         <btn-verFav>
    //         <hijos-cards v-for="n in libros" v-if="n.favoritos=true"
    //         v-bind:key="n.id"
    //         v-bind:nombre="n.nombre" 
    //         v-bind:id="n.id"
    //         v-bind:autor="n.autor" 
    //         v-bind:descripcion="n.descripcion" 
    //         v-bind:img="n.img"
    //         v-bind:alt="n.alt">
    //    </hijos-cards>
    //         </btn-verFav>
        <div class="contenedorPrincipal">
            <hijos-cards v-for="x in libros" v-if="x.favoritos===false"
                v-bind:key="x.id"
                v-bind:nombre="x.nombre" 
                v-bind:id="x.id"
                v-bind:autor="x.autor" 
                v-bind:descripcion="x.descripcion" 
                v-bind:img="x.img"
                v-bind:alt="x.alt">
            </hijos-cards>
        </div>
        </div>`
})
Vue.component('hijos-cards', {
 
   props:["img","clase","nombre","autor","descripcion","alt","id"],
   template:`
       <div class="contenedorHijo">
        <img v-bind:src="img" v-bind:alt="alt" class="portada"/>
        <h2 class="nombreLibro"> {{nombre}} </h2>
        <h3 class="nombreAutor" > {{autor}} </h3>
        <p class="descripcion"> {{descripcion}} </p>
        <btn-favoritos></btn-favoritos>
    
        </div>
   `
})

Vue.component('btn-favoritos', {
    props:["favoritos"],
// data:function(){
//     return{
//     // librosFav:[],
//     favoritos:true
//     }
// },
template:`
<div>
<button @click="agregar" class="btn success">Agregar a Favoritos</button>
</div>
`,
methods:{
    agregar:function(){
        favoritos=true;
    }
}
})

Vue.component('btn-verFav',{
    template: `
    <div>
    <button @click="ver" class="btn success">Ver Favoritos</button>
    </div>
    `,
    methods:{
        ver(){
            this.libros.forEach((favorito) => {
                if (favorito) 
                return `
                <hijos-cards v-for="n in libros" v-if="n.favoritos=true"
            v-bind:key="n.id"
            v-bind:nombre="n.nombre" 
            v-bind:id="n.id"
            v-bind:autor="n.autor" 
            v-bind:descripcion="n.descripcion" 
            v-bind:img="n.img"
            v-bind:alt="n.alt">
       </hijos-cards>
                `
                {
                    // Mostrar solo favorito2
                }
            }); 
        }
    }
})


 var app= new Vue({
el: ".contenedor",
  data: {

  }
})


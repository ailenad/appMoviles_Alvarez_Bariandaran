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
          autor: "hans christian andersen",
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
  methods: {
      cambiarFavorito(id, favorito) {
        const libro = this.libros.find(libro => libro.id === id)
        libro.favoritos = favorito
      }

    },
  template:`
    <div class="contenedorLibros">
      <div class="banner"></div>
          <h1 class="tituloDisney"> {{titulo}} </h1>
      <div class="contenedorPrincipal">
          <hijos-cards v-for="x in libros" 
              v-bind:key="x.id"
              v-bind:nombre="x.nombre" 
              v-bind:id="x.id"
              v-bind:autor="x.autor" 
              v-bind:descripcion="x.descripcion" 
              v-bind:img="x.img"
              v-bind:alt="x.alt"
              v-bind:favoritos="x.favoritos"
              v-on:cambiar-favorito="cambiarFavorito(x.id, $event)"
              >
          </hijos-cards>
      </div>
      <div>
          <lista-favoritos
          v-bind:libros="libros"
          >
          </lista-favoritos>
      </div>
      </div>`,
    

})
Vue.component('hijos-cards', {
  props:["img","clase","nombre","autor","descripcion","alt","id","favoritos"],
  data() {
      return {
          esFavorito: this.favoritos

      }
  },
  template:`
      <div class="contenedorHijo">
       <img :src="img" :alt="alt" class="portada"/>
       <h2 class="nombreLibro">{{nombre | uppercase}}</h2>
       <h3 class="nombreAutor">{{autor | capitalize}}</h3>
       <p class="descripcion">{{descripcion}}</p>
       <btn-favoritos :favoritos="esFavorito" @cambiar="cambiar"></btn-favoritos>
      </div>
  `,
  methods:{
      cambiar: function (){
        this.esFavorito = !this.esFavorito;
        this.$emit('cambiar-favorito', {id: this.id, favoritos: this.esFavorito});
      }
    }
    
})

Vue.component('btn-favoritos', {
  props:["favoritos"],
   template:`
   <div>
   <button @click="cambiar" class="btnAgregar success ">{{favoritos ? 'Ahora es uno de tus favoritos!' : 'Agregar a Favoritos'}}</button>
   </div>
   `,
  methods:{
      cambiar: function (){
          this.$emit('cambiar');
         this.favoritos = true;
      },
  }
  
})
Vue.component('lista-favoritos', {
  props:["libros"],
  data(){
      return{
          tituloF: "Lista de libros favoritos",
      }
  },
  template: `
  <div>
  <h2 class="tituloDisney">{{tituloF}}</h2>
  <div class="contenedorPrincipal">
    <div v-for="libro in libros" v-if="libro.favoritos" class="contenedorHijo">
          <img :src="libro.img" :alt="libro.alt">
          <p class="nombreLibro">{{ libro.nombre }}</p>
          <p class="descripcion"> {{ libro.descripcion }}</p>
          <p class="nombreAutor">Autor: {{ libro.autor }}</p>
      </div>  
  </div>  
  </div>
`,

})

Vue.component('mi-formulario', {
	data:function(){
		return {
				titulo:null,
				autor:"",
                descripcion:"",
				categoria:[],
				anio:null,
										
		array:[],
		errores:[],
		envio: false,
		}

	},
	computed : {
    error: function(){
    	return this.errores.length; 
    }
},
template:`<div class="formulario">
		<form v-on:submit.prevent="guardar" novalidate >

		<label>Nombre del libro</label>
			<input type="text" v-model="titulo"  placeholder="Ingrese Titulo" name="titulo" />

		<label>Nombre del autor</label>
        <input type="text" v-model="autor"  placeholder="Ingrese el nombre del autor" name="autor" />
		

        <label>Descripción</label>
		<textarea v-model="descripcion" name="descripcion"></textarea>

		<label>Categoria</label>

		<select v-model="categoria" multiple size="1" name="categoria">
        <option>Princesas</option>
        <option>SuperHeroes</option>
        <option>Hechizos</option>
        <option>Villanos</option>
		</select>
		
		<label>Año de lanzamiento</label>
		<input v-model.number="anio" name="anio" type="text"  />


		<input type="submit" value="Enviar"/>
		</form>

		<div v-if="envio === true">
			<div v-if="error" class="classerror">
			 <ul>
	     		 <li v-for="x in errores" >{{x}}</li>
	    	</ul>
	  		</div>
	  		<div v-else class="envio">
	          <span>Gracias por sumar libros!</span>
	      </div>
 		</div>

		<div class="contenedorPrincipal" v-if="this.array.length > 0" >
			<h1>Tu libro</h1>
            <div class="contenedorMos" v-for="item in array">
            <h2 class="nombreLibro">{{item.titulo}}</h2>
            <h3 class="nombreAutor">{{item.autor}}</h3>
            <p class="descripcion">{{item.descripcion}}</p>
            <span v-for="x in item.categoria">{{x}} </span>
            <p>{{item.anio}}</p>
            </div>
		</div>
		<div v-else class="classerror">
			<p>¡Comenzá a cargar tus libros!</p>
		</div>

		
	</div>`,
methods:{
	guardar:function(){
       this.envio = true; 
       this.errores=[] 
             
	  if (!this.titulo) {
	  	console.log(!this.titulo)
	   	this.errores.push('El titulo es obligatorio.');
       
      }
      if(this.titulo && this.titulo.length < 2) {
        this.errores.push('El título tiene que tener mas de 2 caracteres.');
         
      }
      if(!this.categoria[0]){
      	this.errores.push('Tenés que seleccionar una categoria.');
      }
      if (!this.anio) {
        this.errores.push('El año de publicación es obligatorio.');
        
      }
     	
     if(this.errores.length == 0){
     	     	 
     nuevoObj = {
        descripcion: this.descripcion,
        titulo: this.titulo,
        autor: this.autor,
        categoria: this.categoria,
        anio: this.anio
								}
			
      if(!localStorage.info){
					this.array=[]
				}else{
					this.array=JSON.parse(localStorage.getItem("info"))
				}

				this.array.push(nuevoObj)
				localStorage.setItem("info",JSON.stringify(this.array))
   		}
}

}, 
	mounted:function(){
		this.array=JSON.parse(localStorage.getItem("info")) || [] 
	}

});

var app= new Vue({
el: ".contenedor",
  data: {

  }
})


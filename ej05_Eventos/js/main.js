const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null, // con esto modificamos el modelo y añadimos la nueva tarea que hará la función
        tareas: [
            'Aprender Vue.js',
            'Aprender ES6',
            'Publicar algo todos los días'
        ]
    },
    // Con Vue, el método debe estar dentro del bloque de la creación de la instancia de Vue
    // para que quede dentro de la constante vm
    methods: {
        agregarTarea(){ //Esto equivale a agregarTarea: function()
            // console.log('Funciona');
            // Con la línea anterior hemos probado que el método y el evento en el html estaban enlazados y funcionaba
            
            // this, hace referencia a la instancia Vue
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null; // Eliminamos lo que se haya introducido a mano en el input
            // Observamos que ya no necesitamos hacer una consulta al DOM del document, 
            // como en Vanilla JavaScript
        }
    }
});

// Vanilla JavaScript
// function agregarTarea(){
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value = '';
// }


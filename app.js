// El principal objetivo de este desafío es fortalecer tus habilidades en 
// lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos =[]; // Array para almacenar los nombres de los amigos

function agregarAmigo(){
   const inputAmigo = document.getElementById('amigo').value.trim();//Obtener el valor del input y eliminar espacios en blanco al inicio y final
 
   //verificar si input no esta vacio

   if(inputAmigo ===""){
    alert("Por favor Ingrese un nombre Valido: "); //mostrar alerta si el input esta vacio
    return; //salir de la funcion si el input esta vacio
   }
   //agregar amigos al array

   amigos.push(inputAmigo);
   limpiarInput(); //llamado a la funcion para limpiar el input

   //mostrar en consola 
   ActulizarListaDeAmigos();

  // console.log(amigos)
}

function ActulizarListaDeAmigos(){
    const listadoamigos = document.getElementById('listaAmigos');
     // Limpiar la lista antes de actualizar
    listadoamigos.innerHTML="";
    // Recorrer el array de amigos y agregar cada uno a la lista
    for(let i=0; i<amigos.length;i++){

        // Crear un nuevo elemento <li> para cada amigo
        const li =document.createElement("li");

        li.textContent=amigos[i]; // Asignar el nombre del amigo al contenido del <li>

        //agregar el <li> a la lista
        listadoamigos.appendChild(li);
        
    }
}

function sortearAmigo(){

    const resultadoSorteo=document.getElementById('resultado');
   
//comprobar que haya amigos para sortear
    if(amigos.length===0){
        alert("No hay amaigos para sortear");
        return;
    }
         //sortear el array para obtener un indice aleatorio
    let IndiceAleatorio= Math.floor(Math.random()*amigos.length);

 //crear una variable para guardar el valor del indice del array
    let amigoSeleccionado = amigos[IndiceAleatorio];
  
    resultadoSorteo.innerHTML="";// Limpiar el contenido anterior del resultado

   //crear un elemento li
     const li =document.createElement("li");

        li.textContent=`El amigo secreto es: ${amigoSeleccionado}`;// Asignar el texto al <li
        
        resultadoSorteo.appendChild(li); // Limpiar el valor del input

   // console.log(amigoSeleccionado);
}

function limpiarInput(){
    document.querySelector('#amigo').value=''; // Limpiar el valor del input
}

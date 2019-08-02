//deinimos un evento para cuando se inicialice la pagina
document.addEventListener('DOMContentLoaded', inicializacion);



function inicializacion(){
  //accedimos al boton y le damos una funcion
  var cambiarClaseButton = document.getElementById('cambiarClase');
  cambiarClaseButton.addEventListener('click', cambiarEstilosClase);

//esta es la funcion que activa el boton, llama los items
  function cambiarEstilosClase(){
    var items = document.getElementsByClassName('item');
    console.log(items);
  }
}

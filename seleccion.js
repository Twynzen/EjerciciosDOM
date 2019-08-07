//deinimos un evento para cuando se inicialice la pagina
document.addEventListener('DOMContentLoaded', inicializacion);



function inicializacion(){
  //accedimos al boton y le damos una funcion
  var cambiarClaseButton = document.getElementById('cambiarClase');
  cambiarClaseButton.addEventListener('click', cambiarEstilosClase);

  var cambiarLiButton = document.getElementById('cambiarLi');
  cambiarLiButton.addEventListener('click', cambiarEstilosLi);
  }


//esta es la funcion que activa el boton, llama los items
  function cambiarEstilosClase(){
    var elemento = document.getElementsByClassName('item');
    console.log(elemento);
    console.log(elemento.length);
    console.log(elemento.item[0]);
    for (var i = 0; i < elemento.length ; i++) {
      console.log('item', elemento.item(i));
      elemento[i].style.color = '#399';
    }
  }
//Esta es la funcion que activa el boton y llama los li
    function cambiarEstilosLi(){
      var lielemento = document.getElementsByTagName('li');
      console.log(lielemento);

      for (var i = 0; i < lielemento.length ; i++) {
        console.log('item', lielemento.item(i));
        lielemento[i].classList.add('itemgrande');
      }

}

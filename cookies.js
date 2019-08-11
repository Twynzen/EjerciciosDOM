document.addEventListener('DOMContentLoaded', launchCookieAdvisor);

function launchCookieAdvisor() {
  var capaCookies = document.createElement('div');
  capaCookies.innerHTML = '<p>Tienes que aceptar las cookies <span id= "botonaceptar">Aceptar</span></p>';
  capaCookies.classList.add('avisoCookies');

  var todosSpanEnDiv = capaCookies.getElementsByTagName('span');
  todosSpanEnDiv.item(0).addEventListener('click', function() {
    //borra elementos el remove
    capaCookies.remove();
  });
  document.body.appendChild(capaCookies);
}

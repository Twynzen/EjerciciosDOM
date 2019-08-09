document.addEventListener('DOMContentLoaded', launchCookieAdvisor);

function launchCookieAdvisor() {
  var capaCookies = document.createElement('div');
  capaCookies.innerHTML = '<p>Tienes que aceptar las cookies <span id= "botonaceptar">Aceptar</span></p>';
  capaCookies.classList.add('avisoCookies');
  document.body.appendChild(capaCookies);
}

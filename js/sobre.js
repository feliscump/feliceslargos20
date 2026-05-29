function abrirSobre() {
  const envelope = document.getElementById('envelope');
  const overlay  = document.getElementById('overlay-transicion');
  const musica   = document.getElementById('musica');

  if (envelope.classList.contains('abierto')) return;
  envelope.classList.add('abierto');

  if (musica) {
    localStorage.setItem('musicaTiempo', musica.currentTime);
    localStorage.setItem('musicaVolumen', musica.volume);
    localStorage.setItem('musicaSonando', !musica.paused);
  }

  setTimeout(() => {
    envelope.style.transition = 'transform 0.8s ease, opacity 0.5s ease'; 
    envelope.style.transform  = 'scale(5)';
    envelope.style.opacity    = '0';

    setTimeout(() => {
      overlay.classList.add('activo');
      setTimeout(() => {
        window.location.href = './html/cumple.html'; 
      }, 650);
    }, 300);
  }, 100);
}

function abrirSobre2() {
  const envelope = document.getElementById('envelope2');
  const overlay  = document.getElementById('overlay-transicion');
  const musica   = document.getElementById('musica');

  if (envelope.classList.contains('abierto')) return;
  envelope.classList.add('abierto');

  if (musica) {
    localStorage.setItem('musicaTiempo', musica.currentTime);
    localStorage.setItem('musicaVolumen', musica.volume);
    localStorage.setItem('musicaSonando', !musica.paused);
  }

  setTimeout(() => {
    envelope.style.transition = 'transform 1.2s ease-in, opacity 1s ease'; 
    envelope.style.transform  = 'scale(10)'; 
    envelope.style.opacity    = '0';

    setTimeout(() => {
      overlay.classList.add('activo');
      setTimeout(() => {
        window.location.href = 'pag1.html';
      }, 700);
    }, 500);
  }, 100);
}

function volverAlInicio() {
  const musica = document.getElementById('musica');
  
  if (musica) {
    localStorage.setItem('musicaTiempo', musica.currentTime);
    localStorage.setItem('musicaVolumen', musica.volume);
    localStorage.setItem('musicaSonando', !musica.paused);
  }
  
  window.location.href = 'cumple.html';
}
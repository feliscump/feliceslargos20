// MODAL

function abrirModal(src) {
  const overlay = document.getElementById('modalOverlay');
  const img     = document.getElementById('modalImg');

  img.src = src;
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('visible');
  document.body.style.overflow = '';
}

// ESCAPE
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarModal();
});

// TRANSICIÓN
function irAPag3() {
  const btn    = document.getElementById('pag3-btn');
  const overlay = document.getElementById('overlay-transicion');
  const musica  = document.getElementById('musica');

  if (musica) {
    localStorage.setItem('musicaTiempo',  musica.currentTime);
    localStorage.setItem('musicaVolumen', musica.volume);
    localStorage.setItem('musicaSonando', !musica.paused);
  }

  btn.style.transition = 'transform 0.8s ease, opacity 0.6s ease';
  btn.style.transform  = 'scale(10)';
  btn.style.opacity    = '0';

  setTimeout(() => {
    overlay.classList.add('activo');
    setTimeout(() => {
      window.location.href = 'pag3.html'; 
    }, 650);
  }, 400);
}
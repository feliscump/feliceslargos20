// MÚSICA 
const audio    = document.getElementById('musica');
const musicBtn = document.getElementById('musicBtn');
let musicaActiva = false;

// MÚSICA INICAL
audio.volume = 0.3;

// MÚSICA TOGGLE
function toggleMusica() {
  if (musicaActiva) {
    audio.pause();
    musicBtn.textContent = '🔇 Música';
    musicaActiva = false;
  } else {
    audio.play().then(() => {
      musicBtn.textContent = '🔊 Música';
      musicaActiva = true;
    }).catch(() => {
      musicBtn.textContent = '⚠️ Sin audio';
    });
  }
}

// MÚSICA AUTO-PLAY
window.addEventListener('load', () => {
  audio.play().then(() => {
    musicBtn.textContent = '🔊 Música';
    musicaActiva = true;
  }).catch(() => {
    musicBtn.textContent = '▶️ Play música';
  });
});

// FUNCIONES PARA EL MODAL DEL GATO
function abrirModalGato() {
  const modal = document.getElementById('modal-gato');
  if (modal) {
    modal.classList.add('visible');
  }
}

function cerrarModalGato() {
  const modal = document.getElementById('modal-gato');
  if (modal) {
    modal.classList.remove('visible');
  }
}

// Cerrar también si hacen click fuera de la imagen (en el fondo oscuro)
window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal-gato');
  if (e.target === modal) {
    cerrarModalGato();
  }
});

// ESCAPE PARA EL MODAL DEL GATO (Añadir al final de cumple.js)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cerrarModalGato();
  }
});
// Ampliar las imágenes al hacer clic (usa el elemento <dialog> nativo)
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.zoom').forEach((btn) => {
  btn.addEventListener('click', () => {
    lightboxImg.src = btn.dataset.full;
    lightboxImg.alt = btn.dataset.alt || '';
    lightbox.showModal();
  });
});

lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());

// Cerrar al pulsar fuera de la imagen
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.close();
});

document.addEventListener('DOMContentLoaded', function () {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const volverBtn = document.getElementById('volverBtn');
  const contenedor = document.getElementById('contenedorPrincipal');
  const carta = document.getElementById('cartaRomantica');
  const audio = document.getElementById('audioRomantico');
  const flores = document.querySelector('.flores');

  audio.volume = 0.3;

  yesBtn.addEventListener('click', function () {
    contenedor.style.display = 'none';
    carta.style.display = 'block';
    audio.play().catch(() => {
      alert('Tu navegador bloqueó la música 😭');
    });
    crearFlores(12);
  });

  volverBtn.addEventListener('click', function () {
    carta.style.display = 'none';
    contenedor.style.display = 'block';
    audio.pause();
    audio.currentTime = 0;
  });

  noBtn.addEventListener('mouseover', function () {
    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  });

  function crearFlores(cantidad) {
    const emojis = ['🌸', '🌼', '🌺', '🌷', '💝'];
    for (let i = 0; i < cantidad; i++) {
      const flor = document.createElement('span');
      flor.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      flor.style.position = 'absolute';
      flor.style.left = `${Math.random() * 100}vw`;
      flor.style.top = `${Math.random() * 100}vh`;
      flor.style.fontSize = `${20 + Math.random() * 15}px`;
      flor.style.animation = `flotar ${8 + Math.random() * 5}s linear infinite`;
      flores.appendChild(flor);
    }
  }

  function crearPetalos() {
    const petalosContainer = document.createElement('div');
    petalosContainer.className = 'petalos-flotantes';
    document.body.appendChild(petalosContainer);

    for (let i = 0; i < 12; i++) {
      const petalo = document.createElement('div');
      petalo.className = 'petalo';
      petalo.innerHTML = '🌸';
      petalo.style.left = `${Math.random() * 100}vw`;
      petalo.style.top = `${Math.random() * 100}vh`;
      petalo.style.fontSize = `${20 + Math.random() * 15}px`;
      petalo.style.animationDuration = `${8 + Math.random() * 10}s`;
      petalo.style.animationDelay = `${Math.random() * 3}s`;
      petalosContainer.appendChild(petalo);
    }
  }

  window.addEventListener('load', crearPetalos);
});
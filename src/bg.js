'use strict';

const body = document.body;
const minute = 60000;

let scale = 1;
body.style.transformOrigin = `top center`;

function shrinktome() {
  if (scale < 0.05) return clearInterval(shrinktome);
  scale *= 0.95;
  body.style.transform = `scale(${scale}, ${scale})`;
}

setTimeout(() => setInterval(shrinktome, minute/10), 500);

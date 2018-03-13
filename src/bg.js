'use strict';

const body = document.body;
const minute = 60000;

let scale = 1;
body.style.transformOrigin = `top center`;

function flipbook() {
  if (scale < 0.05) return learInterval(flipbook);
  scale *= 0.95;
  body.style.transform = `scale(${scale}, ${scale})`;
}

setTimeout(() => setInterval(flipbook, minute/10), 500);

let width = window.innerWidth;
let height = window.innerHeight;

const intro = document.getElementsByClassName('intro')[0];
const history = document.getElementsByClassName('historia')[0];
const paragraphs = document.getElementsByClassName('paragrafos')[0];
const sound = document.getElementById('som');

intro.style.fontSize = width / 30 + 'px';
history.style.fontSize = width / 20 + 'px';
paragraphs.style.height = height + 'px';

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  intro.style.fontSize = width / 30 + 'px';
  history.style.fontSize = width / 20 + 'px';
  paragraphs.style.height = height + 'px';
});

function iniciar() {
  intro.className = 'intro intro_texto intro_animacao';
  history.className = 'historia historia_texto historia_animacao';
  sound.play();
  document.getElementById('botao').style.display = 'none';
}

/* Fundo de estrelas */

let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const num = 400;
const size = 2;
const elements = [];

function start() {
  for (let i = 0; i < num; i++) {
    elements[i] = {
      x: Math.ceil(Math.random() * width),
      y: Math.ceil(Math.random() * height),
      size: Math.random() * size,
    };
  }
}

function snow() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < num; i++) {
    const e = elements[i];
    ctx.beginPath();
    ctx.fillStyle = '#FFFFFF';
    ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

start();
snow();

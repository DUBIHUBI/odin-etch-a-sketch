const container = document.querySelector('.grid-container');
const rainbowButton = document.querySelector('.rainbow-btn');
const gridButton = document.querySelector('.grid-btn');
const eraserButton = document.querySelector('.eraser-btn');
const clearButton = document.querySelector('.clear-btn');
const slider = document.querySelector('.slider');
const sliderText = document.querySelector('.slider-text');
const colourPicker = document.querySelector('.colour-picker');
let brushColour = 'colour';

function clearGrid() {
  container.innerHTML = '';
}

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
    div.addEventListener('mouseover', setColour);
  }
}

createGrid(slider.value);
sliderText.textContent = `Grid Size: ${slider.value} x ${slider.value}`;

function setColour(e) {
  switch (brushColour) {
    case 'colour':
      e.target.style.backgroundColor = colourPicker.value;
      break;
    case 'rainbow':
      e.target.style.backgroundColor = randomRGB();
      break;
    case 'erase':
      e.target.style.backgroundColor = 'rgb(255, 250, 240)';
      break;
    default:
      break;
  }
}

gridButton.addEventListener('click', () => {
  container.classList.toggle('grid-gap');
});

colourPicker.addEventListener('click', () => {
  brushColour = 'colour';
});

clearButton.addEventListener('click', () => {
  clearGrid();
  createGrid(slider.value);
});

eraserButton.addEventListener('click', () => {
  brushColour = 'erase';
});

rainbowButton.addEventListener('click', () => {
  brushColour = 'rainbow';
});

function random256() {
  return Math.floor(Math.random() * 256);
}

function randomRGB() {
  return `rgb(${random256()}, ${random256()}, ${random256()})`;
}

slider.addEventListener('input', () => {
  sliderText.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
});

slider.addEventListener('change', () => {
  clearGrid();
  createGrid(slider.value);
});

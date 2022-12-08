const container = document.querySelector('.grid-container');

function createGrid(size) {
  container.style.display = 'grid';
  container.style.height = '600px';
  container.style.width = '600px';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
  }
}

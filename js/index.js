import { animals } from '../js/animals.js';

const animalCards = document.getElementById('animal-cards');
const letters = document.getElementById('letters');
/* const letter = letters.addEventListener('click', select); */

animals.forEach((animal) => {
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = ` 
    <img
      class="foto"
      src=${animal.image}
      alt=${animal.name}
      style="width: 100%"
      />
      <div class="container">
        <h4><b>${animal.name}</b></h4>
        <p style='margin-bottom: 0.5rem'>${animal.description}</p>
      </div>
        `;
  animalCards.appendChild(div);
});

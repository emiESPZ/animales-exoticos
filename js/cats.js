fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    let catDom = document.getElementById('cats');

    response.forEach((cat) => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = ` 
    <img
      class="foto"
      src=${cat.url}
      alt=${cat.id}
      style="width: 100%"
      />
      <div class="container">
        <h4><b></b></h4>
        <p></p>
      </div>
        `;
      catDom.appendChild(div);
    });
  });

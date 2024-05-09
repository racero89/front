function getPokemonInfo() {
  const PokemonNameInput = document.getElementById("PokemonName");
  const PokemonInfo = document.getElementById("pokemonInfo");

  const PokemonName = PokemonNameInput.value.toLocaleLowerCase();

  fetch("http://localhost:3002/pokemon/${pokemoName}")
    .then((Response) => Response.json)
    .then((data) => {
      const {
        name,
        sprites: { front_default },
        height,
        weight,
      } = data;
      PokemonInfo.innerHTML = `<h2>${name}</h2>
      <img src="${front_default}" alt="${name}"/>
      <p>${height}</p>
      <p>${weight}</p>
      `;
    })
    .catch(
      (error) =>
        (getPokemonInfo.innerHTML = `<p>Imposible accerder al pokemon</p>`)
    );
}

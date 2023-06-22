const fs = require("fs");

const pokeCardGenerator = (pokemonData, number) => {
  const [pokemonName, types, weight, hp, xp, attack, defence] = pokemonData.split('|');
  const pokeCardTemplate = `<div class="pokemon-card">
            <div class="pokemon-image-bg">
          <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${number}.png"/>
            </div>
            <div class="pokemon-name">
              ${pokemonName}
            </div>
              <div class="element">
                <div>
                  Types
                </div>
                <div>
                   ${types}
                </div>
              </div>
  
              <div class="element">
                <div>
                  Weight
                </div>
                <div>
                  ${weight}
                </div>
              </div>
  
              <div class="element">
                <div>
                  HP
                </div>
                <div>
                  ${hp}
                </div>
              </div>
  
              <div class="element">
                <div>
                  XP
                </div>
                <div>
                  ${xp}
                </div>
              </div>
  
              <div class="element">
                <div>
                  Attack
                </div>
                <div>
                  ${attack}
                </div>
              </div>
  
              <div class="element">
                <div>
                  Defence
                </div>
                <div>
                  ${defence}
                </div>
              </div>
          </div>`;

  return pokeCardTemplate;
};

const pokemonGenerator = (pokemons) => {
  const pokemonData = pokemons.split('\n');
  let pokemon = `<div class="pokemon-flex-box" > `;

  pokemonData.forEach((pokemonInfo, index) => {
    pokemon += pokeCardGenerator(pokemonInfo, index + 1);
  });

  pokemon += '</div>'

  return pokemon;
};

const pokemonData = fs.readFileSync('./poke-stats', 'utf-8');
const pokemon = pokemonGenerator(pokemonData);

fs.writeFileSync('./pokemon-data', pokemon);
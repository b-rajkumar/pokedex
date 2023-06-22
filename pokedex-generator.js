const fs = require("fs");

const pokeCardGenerator = (pokemonData, number) => {
  const [pokemonName, types, weight, hp, xp, attack, defence] = pokemonData.split('|');
  const pokeCardTemplate = `<div class="pokemon-card">
            <div class="pokemon-image">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${number}.png" height="175px width=" 175px" />
            </div>
            <div class="pokemon-name">
              ${pokemonName}
            </div>
            <table class="pokemon-info">
              <tr>
                <th>
                  Types
                </th>
                <td>
                   ${types}
                </td>
              </tr>
  
              <tr>
                <th>
                  Weight
                </th>
                <td>
                  ${weight}
                </td>
              </tr>
  
              <tr>
                <th>
                  HP
                </th>
                <td>
                  ${hp}
                </td>
              </tr>
  
              <tr>
                <th>
                  XP
                </th>
                <td>
                  ${xp}
                </td>
              </tr>
  
              <tr>
                <th>
                  Attack
                </th>
                <td>
                  ${attack}
                </td>
              </tr>
  
              <tr>
                <th>
                  Defence
                </th>
                <td>
                  ${defence}
                </td>
              </tr>
            </table>
          </div>`;

  return pokeCardTemplate;
};

const pokemonGenerator = (pokemons) => {
  const pokemonData = pokemons.split('\n');
  let pokemon = `<div class="pokemon-flex-box" > `;

  pokemonData.forEach((pokemonInfo, index) => {
    let number = index + 1;
    number = '0'.repeat(Math.max(0, (3 - number.toString().length))) + number;

    pokemon += pokeCardGenerator(pokemonInfo, number);
  });

  pokemon += '</div>'

  return pokemon;
};

const pokemonData = fs.readFileSync('./poke-stats', 'utf-8');
const pokemon = pokemonGenerator(pokemonData);

fs.writeFileSync('./pokemon-data', pokemon);
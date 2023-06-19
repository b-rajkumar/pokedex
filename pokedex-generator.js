const fs = require("fs");

const pokeCardGenerator = (pokemonData) => {
  const [pokemonName, types, weight, hp, xp, attack, defence] = pokemonData.split('|');
  const pokeCardTemplate = `<div class="pokemon-card">
            <div class="pokemon-image">
  
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

const pokemonRowGenerator = (pokemonData) => {
  const cells = pokemonData.map((pokemon) => pokeCardGenerator(pokemon));
  let rowTemplate = '<div>';
  cells.forEach((cell) => rowTemplate += cell);
  rowTemplate += '</div>';

  return rowTemplate;
};

const pokemonTableGenerator = (pokemon) => {
  const pokemonData = pokemon.split('\n');
  let pokemonTable = `<div class="poke-table" > `;

  for(let i = 0; i < pokemonData.length; i += 4) {
    pokemonTable += pokemonRowGenerator(pokemonData.slice(i, i + 4));
  }

  pokemonTable += '</div>'

  return pokemonTable;
};

const pokemonData = fs.readFileSync('./poke-stats', 'utf-8');
const pokemonTable = pokemonTableGenerator(pokemonData);

fs.writeFileSync('./pokemon-data', pokemonTable);
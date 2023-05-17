import { getData } from "../utils/axiosUtils.js";

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

/**
 * Retrieves information about a Pokemon by its name.
 *
 * @param {string} pokemonName - The name of the Pokemon.
 * @returns {Promise<any>} A promise that resolves to the Pokemon data.
 */
export async function getPokemonByName(pokemonName) {
    return getData(baseUrl + `${pokemonName}`);
}
import { getData } from "../utils/axiosUtils.js";

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export async function getPokemonByName(pokemonName) {
    return getData(baseUrl + `${pokemonName}`);
}
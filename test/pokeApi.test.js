import { expect } from "chai";
import { getPokemonByName } from "../services/pokeApi.js";
import { validateSchema } from "../utils/schemaValidationUtils.js";
import { statusCode } from "../utils/validationUtils.js";

describe('Get pokemon', function () {

    it('should return a pokemon by name', async function () {
        const pokemonName = 'charmander';
        const schemaPath = 'pokeApi/GET/get_pokemon_by_name_200';
        
        const { data, status } = await getPokemonByName(pokemonName);
        validateSchema(schemaPath, data);
        
        expect(status).to.be.equals(statusCode.ok);
        expect(data.name).to.be.equals(pokemonName);
    });

});

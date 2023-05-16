import Ajv from "ajv";
import fs from "fs";

/**
 * Reads a JSON schema file from the specified path.
 * 
 * @param {string} schemaPath - The path to the JSON schema file.
 * @returns {string} - The contents of the JSON schema file as a string.
 */
function readSchema(schemaPath) {
    return fs.readFileSync(`schemas/${schemaPath}.json`);
}

/**
 * Validates the specified JSON data agains a JSON schema file located at the specified path.
 * 
 * @param {string} schemaPath - The path to the JSON schema file.
 * @param {object | object []} responseData - The JSON data to be validated against the JSON schema. It can be either an object or an array of objects.
 * 
 * @throws {Error} - Throws an error if the validation fails. The error message includes the path to the schema file and the validation errors.
 */
export function validateSchema(schemaPath, responseData) {
    const schema = JSON.parse(readSchema(schemaPath));
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(responseData);
    if (!valid) {
        throw new Error(`The following errors occurs when validating the json schema located in: ${schemaPath}: \n${JSON.stringify(validate.errors)}\n`)
    }
}

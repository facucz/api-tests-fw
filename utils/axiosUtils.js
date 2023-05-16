import axios from "axios";

export function setAuthToken(token) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}

/**
 *  Make a HTTP POST request
 *
 * @param {String} baseUrl - The endpoint base URL
 * @param {Object} payload - The request body
 * @param {Object} headers - Requests headers
 * @returns {Promise} - The HTTP response Promise
 */
export function postData(baseUrl, payload, headers) {
  return axios.post(baseUrl, payload, headers);
}

/**
 *  Make a HTTP GET request
 *
 * @param {String} baseUrl - The endpoint base URL
 * @param {Object} headers - Requests headers
 * @returns {Promise} - The HTTP response Promise
 */
export function getData(baseUrl, headers) {
  return axios.get(baseUrl, headers);
}

/**
 *  Make a HTTP PUT request
 *
 * @param {String} baseUrl - The endpoint base URL
 * @param {Object} payload - The request body
 * @param {Object} headers - Requests headers
 * @returns {Promise} - The HTTP response Promise
 */
export function putData(baseUrl, payload, headers) {
  return axios.put(baseUrl, payload, headers);
}

/**
 *  Make a HTTP DELETE request
 *
 * @param {String} baseUrl - The endpoint base URL
 * @param {Object} payload - The request body
 * @param {Object} headers - Requests headers
 * @returns {Promise} - The HTTP response Promise
 */
export function deleteData(baseUrl, payload, headers) {
  const config = {
    headers: headers,
    data: payload,
  };
  return axios.delete(baseUrl, config);
}

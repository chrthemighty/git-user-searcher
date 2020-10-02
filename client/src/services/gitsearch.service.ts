import axios, { CancelTokenSource } from 'axios';

const url = 'http://localhost:8080/api';
let request: CancelTokenSource;

/**
 * Calls own API's search request
 * @param  {string} query - part of username
 * @returns Promise
 */
export const searchUsersByUsername = async (query: string): Promise<User[]> => {
    try {
        if (request) request.cancel();

        request = axios.CancelToken.source();
        const { data } = await axios.get(`${url}/users/search?query=${query}`, { cancelToken: request.token });
        return data;
    } catch (error) {
        throw new Error(error);
    }
}
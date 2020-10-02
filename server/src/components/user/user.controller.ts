import express from 'express'

import UserService from '@/components/user/user.service';

class UserController {
	/**
	 * Responses to users search request
	 * @param  {express.Request} request with ?query=
	 * @param  {express.Response} response
	 * @returns Promise
	 */
	searchUsersByUsername = async ({ query: { query }}: express.Request, response: express.Response): Promise<void | express.Response> => {
		try {
			if (!query || (typeof query !== 'string')) throw new Error('Wrong search query.');

			const users = await UserService.searchUsersByUsername(query);
			response.status(200).send(users);
		} catch (error) {
			response.status(error.response ? error.response.status : 500).json(error);
		}
	};
}

export default new UserController();

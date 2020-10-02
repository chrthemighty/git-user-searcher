import axios from 'axios';

import { UserProfileResponse, UserSearchResponse, User } from '@/components/user/user.model';
import { API, Limit } from '@/utils/consts';

class UserService {
	/**
	 * Searches users data whose usernames match query
	 * @param  {string|number} query
	 * @returns Promise
	 */
	searchUsersByUsername = async (query: string | number): Promise<User[]> => {
		const { data } = await axios.get(`${API.Github}/search/users?q=${query}&per_page=${Limit.UsersPerPage}`);
		const usernames: string[] = data.items.map((item: UserSearchResponse) => item.login);
		const responses: { data: UserProfileResponse }[] = await axios.all(
			usernames.map(username => axios.get(`${API.Github}/users/${username}`))
		);
		return responses.map(response => {
			const {
				data: { login, avatar_url, followers, following },
			} = response;
			return {
				username: login,
				avatar: avatar_url,
				following,
				followers,
			};
		});
	};
}

export default new UserService();

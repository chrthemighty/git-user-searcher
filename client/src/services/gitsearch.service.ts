import axios, { CancelTokenSource } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { UsersSearchError } from '@/store/slices/usersSearch/state'

const url = 'https://morning-crag-46357.herokuapp.com/api'

let request: CancelTokenSource

/**
 * Calls own API's search request
 * @param  {string} query - part of username
 * @returns Promise
 */
export const searchUsersByUsername = createAsyncThunk('usersSearch/searchUserByUsername', async (query: string) => {
	if (!query) throw new Error(UsersSearchError.EmptyQuery)
	if (request) request.cancel()

	request = axios.CancelToken.source()
	const { data } = await axios.get(`${url}/users/search?query=${query}`, { cancelToken: request.token })
	return data
})

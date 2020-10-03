import { searchUsersByUsername } from '@/services/gitsearch.service'
import { ActionReducerMapBuilder, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { User, UsersSearchError, UsersSearchState, UsersSearchStatus } from './state'

export const reducers = {
	setText: (state: UsersSearchState, { payload }: PayloadAction<string>): UsersSearchState => {
		return { ...state, text: payload }
	},
}

export const extraReducers = ({ addCase }: ActionReducerMapBuilder<UsersSearchState>) => {
	addCase(searchUsersByUsername.pending, (state: UsersSearchState) => {
		return { ...state, status: UsersSearchStatus.Pending }
	})

	addCase(searchUsersByUsername.fulfilled, (state: UsersSearchState, { payload }: PayloadAction<User[]>) => {
		return {
			...state,
			status: UsersSearchStatus.Fulfilled,
			items: payload,
			error: payload.length ? UsersSearchError.None : UsersSearchError.UsersNotFound,
		}
	})

	addCase(
		searchUsersByUsername.rejected,
		(state: UsersSearchState, { error: { message } }: { error: SerializedError }) => {
			if (!message || message === 'Cancel') return { ...state }

			let error: UsersSearchError

			switch (message) {
				case UsersSearchError.EmptyQuery:
					error = UsersSearchError.EmptyQuery
					break
				case 'Error: Network Error':
					error = UsersSearchError.ServerIsUnavailable
					break
				case 'Error: Request failed with status code 403':
					error = UsersSearchError.APILimitIsExceeded
					break
				default:
					error = UsersSearchError.UnexpectedError
			}

			return { ...state, status: UsersSearchStatus.Rejected, error }
		}
	)
}

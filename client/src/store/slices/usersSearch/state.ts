export enum UsersSearchStatus {
	Pending,
	Fulfilled,
	Rejected,
}

export type User = {
	username: string
	avatar: string
	followers: number
	following: number
}

export enum UsersSearchError {
	None = '',
	UsersNotFound = 'Users for your request were not found.',
	EmptyQuery = 'Enter something to search.',
	ServerIsUnavailable = 'GitSearch server is not available.',
	APILimitIsExceeded = 'Github API limit exceeded. Try again in a minute.',
	UnexpectedError = 'Unexpected error occured while fetching data.',
}

export type UsersSearchState = {
	items: User[]
	text: string
	status: UsersSearchStatus
	error: UsersSearchError
}

export const initialState: UsersSearchState = {
	items: [],
	text: '',
	status: UsersSearchStatus.Fulfilled,
	error: UsersSearchError.EmptyQuery,
}

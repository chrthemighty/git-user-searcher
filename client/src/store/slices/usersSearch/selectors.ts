import { ReduxStore } from '@/store'

export const usersSearchSelectors = {
	items: (state: ReduxStore) => state.usersSearch.items,
	status: (state: ReduxStore) => state.usersSearch.status,
	text: (state: ReduxStore) => state.usersSearch.text,
	error: (state: ReduxStore) => state.usersSearch.error,
}

import { usersSearchReducer } from '@/store/slices/usersSearch'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		usersSearch: usersSearchReducer,
	},
})

export type ReduxStore = ReturnType<typeof store.getState>

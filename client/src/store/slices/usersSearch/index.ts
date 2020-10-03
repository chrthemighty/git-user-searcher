import { createSlice } from '@reduxjs/toolkit'

import { reducers, extraReducers } from './reducers'
import { initialState } from './state'

const slice = createSlice({
	name: 'usersSearch',
	initialState,
	reducers,
	extraReducers,
})

export const { actions: usersSearchActions, reducer: usersSearchReducer } = slice

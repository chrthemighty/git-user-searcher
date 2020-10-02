import React, { useCallback, useMemo, useState } from 'react'
import { render } from 'react-dom'

import { AxiosError } from 'axios'
import Loader from 'react-loader-spinner'

import { SearchBar } from '@/components/SearchBar'
import { UserList } from '@/components/UserList'
import { Error } from '@/components/Error'

import { searchUsersByUsername } from '@/services/gitsearch.service'

import '@/index.css'

export const App: React.FC = () => {
	const [users, setUsers] = useState<User[]>([])
	const [isLoading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const searchInput = async (query: string) => {
		try {
			// Empty query handling
			if (!query) {
				setLoading(false)
				setUsers([])
				return setError('Enter something to search.')
			}

			setLoading(true)
			setError('')
			const users = await searchUsersByUsername(query)

			// Empty response handling
			if (users.length === 0) {
				setError('Users for your request were not found.')
			}

			setUsers(users)
			setLoading(false)
		} catch (error) {
			// Don't remove loader if previous request was manually cancelled
			if (error.message !== 'Cancel') setLoading(false)
			return handleError(error)
		}
	}

	const handleError = useCallback(
		(error: AxiosError) => {
			switch (error.message) {
				case 'Cancel':
					return
				case 'Error: Network Error':
					return setError('GitSearch server is not available.')
				case 'Error: Request failed with status code 403':
					return setError('Github API limit exceeded. Try again in a minute.')
				default:
					return setError('Unexpected error occured while fetching data.')
			}
		},
		[error]
	)

	const content = useMemo(() => {
		if (error) return <Error text={error} />
		if (isLoading) return <Loader width={50} height={50} type="ThreeDots" color="#000000" />
		return <UserList users={users} />
	}, [error, isLoading, users])

	return (
		<div className="git_search">
			<div className="git_search__title">GitSearch</div>
			<SearchBar searchInput={searchInput} />
			{content}
		</div>
	)
}

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

import { Error } from '@/components/Error/Error'
import { UserList } from '@/components/UserList/UserList'
import { UsersSearchStatus } from '@/store/slices/usersSearch/state'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { usersSearchSelectors } from '@/store/slices/usersSearch/selectors'

import styles from './App.module.css'

export const App: React.FC = () => {
	const users = useSelector(usersSearchSelectors.items)
	const status = useSelector(usersSearchSelectors.status)
	const error = useSelector(usersSearchSelectors.error)

	const content = useMemo(() => {
		if (status === UsersSearchStatus.Pending)
			return <Loader width={50} height={50} type="ThreeDots" color="#000000" />
		if (error) return <Error text={error} />
		return <UserList users={users} />
	}, [error, status, users])

	return (
		<div className={styles.git_search}>
			<div className={styles.git_search__title}>GitSearch</div>
			<SearchBar />
			{content}
		</div>
	)
}

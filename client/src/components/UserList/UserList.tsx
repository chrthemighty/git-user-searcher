import React from 'react'

import { UserListItem } from '@/components/UserList/UserListItem/UserListItem'
import { User } from '@/store/slices/usersSearch/state'

import styles from './UserList.module.css'

interface UserListProps {
	users: User[]
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
	return (
		<div className={styles.users_list}>
			{users.map(user => (
				<UserListItem key={user.username} data={user} />
			))}
		</div>
	)
}

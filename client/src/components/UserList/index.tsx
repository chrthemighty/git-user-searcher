import { UserListItem } from '@/components/UserList/UserListItem';

import React from 'react';
import styles from './style.module.css';

interface UserListProps {
    users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <div className={styles.users_list}>
            {users.map(user => <UserListItem key={user.username} data={user}/>)}
        </div>
    )
} 
import React from 'react';

import styles from './style.module.css';

interface UserListItemProps {
    data: User;
}

export const UserListItem: React.FC<UserListItemProps> = ({ data: { username, avatar, followers, following } }) => {
    return (
        <div className={styles.user} onClick={()=> window.open(`https://github.com/${username}`, '_blank')}>

            <img src={avatar} alt="Avatar" className={styles.user__avatar}/>
            <div className={styles.user__info}>
                <div className={styles.user__username}>{username}</div>
                <div className={styles.user__followers}>{followers} <span className="small">followers</span></div>
                <div className={styles.user__following}>{following} <span className="small">following</span></div>
            </div>
        </div>
    );
} 
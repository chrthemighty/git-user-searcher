import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.css';

interface SearchBarProps {
    searchInput(query: string): Promise<void>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchInput }) => {
    const [query, setQuery] = useState('');

    const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') searchInput(query);
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value.toString().trim());
    }

    return (
        <div className={styles.search_bar}>
            <input className={styles.search_bar__input} type="text" onKeyUp={onKeyUp} onChange={onChange} value={query}/>
            <div onClick={() => searchInput(query)}><FontAwesomeIcon  icon={faSearch} className={styles.search_bar__icon}/></div>
        </div>
    )
} 
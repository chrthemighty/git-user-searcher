import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { usersSearchSelectors } from '@/store/slices/usersSearch/selectors'
import { searchUsersByUsername } from '@/services/gitsearch.service'
import { usersSearchActions } from '@/store/slices/usersSearch'

import styles from './SearchBar.module.css'

export const SearchBar: React.FC = () => {
	const dispatch = useDispatch()
	const query = useSelector(usersSearchSelectors.text)
	const [lastQuery, setLastQuery] = useState('')

	const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter' || lastQuery === query) return
		dispatch(searchUsersByUsername(query))
		setLastQuery(query)
	}

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(usersSearchActions.setText(event.target.value.toString().trim()))
	}

	const onClick = () => {
		if (lastQuery === query) return
		dispatch(searchUsersByUsername(query))
		setLastQuery(query)
	}

	return (
		<div className={styles.search_bar}>
			<input
				className={styles.search_bar__input}
				type="text"
				onKeyUp={onKeyUp}
				onChange={onChange}
				value={query}
			/>
			<div onClick={onClick}>
				<FontAwesomeIcon icon={faSearch} className={styles.search_bar__icon} />
			</div>
		</div>
	)
}

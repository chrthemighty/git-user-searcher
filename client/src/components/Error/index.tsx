import React, { Fragment } from 'react'

interface ErrorProps {
	text: string
}

export const Error: React.FC<ErrorProps> = ({ text }) => {
	return (
		<Fragment>
			<p>{text}</p>
		</Fragment>
	)
}

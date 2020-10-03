import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { App } from '@/components/App/App'
import { store } from '@/store'

import '@/index.css'

render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

import express from 'express'

import UserController from '@/components/user/user.controller'

export default (app: express.Application) => {
	app.get('/api/users/search', UserController.searchUsersByUsername)
}

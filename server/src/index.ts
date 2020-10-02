import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'

import route from '@/utils/route'
import axios from '@/utils/axios'

dotenv.config()
axios.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
route(app, __dirname)

app.listen(Number(process.env.PORT) | 8080, () => {
	console.log(`GitSearch server is listening at http://localhost:${process.env.PORT}`)
})

import dotenv from 'dotenv';
import express from 'express';
import userRoute from './routes/usersRoutes.js';

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

// const apiRoute = app.use('/api', (req, res, next) => { next()})

app.use('/api/users', userRoute)

app.listen(port, () => {
    console.log(`Node Express Basic App listening at http://localhost:${port}`)
})
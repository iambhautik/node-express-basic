import dotenv from 'dotenv';
import express from 'express';
import connectToDatabase from './config/dbConnection.js';
import userRoute from './routes/usersRoutes.js';

dotenv.config()
connectToDatabase()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/users', userRoute)

app.listen(port, () => {
    console.log(`Node Express Basic App listening at http://localhost:${port}`)
})
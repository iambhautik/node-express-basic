import dotenv from 'dotenv';

dotenv.config()

const port = process.env.PORT || 3000

console.log('server  is listening on port ' + port)
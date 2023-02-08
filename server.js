// import dotenv from 'dotenv';
const dotenv = require('dotenv');

dotenv.config()

const port = process.env.PORT || 3000

console.log('server  is listening on port ' + port)
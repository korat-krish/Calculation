require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/db');
const operationRoute = require('./routes/Operation.route');
const cors = require('cors')

db();
app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})

app.use('/api', operationRoute);
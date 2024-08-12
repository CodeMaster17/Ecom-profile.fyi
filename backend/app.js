const express = require('express')
const cors = require('cors')
const app = express()
const database = require("./configs/database_connection");
const PORT = process.env.PORT || 3000
require('dotenv').config()
app.use(express())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
database.connect();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
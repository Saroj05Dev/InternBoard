const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000

connectDB()

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/interns", require("./routes/internRoutes"));

app.listen(PORT, () => {
    console.log(`Server got started on port ${PORT}`)
});
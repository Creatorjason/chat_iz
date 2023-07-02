const express = require("express")
const dotenv = require("dotenv")


const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000



console.log("Expressive")
 app.listen(7000, console.log("Server running and listening on port 7000"))
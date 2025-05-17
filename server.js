import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"

dotenv.config({path: "./.env"})

const app = express();

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/users", (req, res) => {
    res.send("User route")
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import userRoute from "./routers/user.route.js"

dotenv.config({path: "./.env"})

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/users", userRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

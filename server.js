const express = require('express')
const cors = require('cors')
const db = require('./DB/db')
const userRouter = require('./Routes/User')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user',userRouter)

db()

const PORT = process.env.PORT || 3000


app.listen(PORT , () =>{
    console.log(`Server running on port ${PORT}`);
})
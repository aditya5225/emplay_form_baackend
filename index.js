const express = require("express")
const app = express()
const port = 5000
const cors = require("cors")
const empRoutes = require("./routes/empRoutes")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//enable cors
// app.enableCors({
//     origin: [
//       'http://localhost:4200',
//       'http://localhost:4200/',
      

//     ],
//   });
app.use(cors())

app.get('/', (req, res) => {
    res.json("Hello world")
})

app.use('/employee', empRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
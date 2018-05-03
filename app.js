const express = require('express')
let app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/view'))
app.use(express.static(__dirname + '/js'))
app.use(express.static(__dirname + '/css'))
app.use(express.static(__dirname + '/img'))

app.get('/', (req,res)=>{
    console.log(__dirname)
    res.sendFile('index.html')
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
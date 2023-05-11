const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 80

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'API online' })
})

app.get('/monsters/:id', db.getMonsterById)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
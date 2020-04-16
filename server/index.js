require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

const app = express()
app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('DATABASE IS UP')
    app.listen(SERVER_PORT, () => console.log(`SERVER RUNNING ON ${SERVER_PORT}`))
})


//REQUEST LEVEL MIDDLEWARE
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

//REST QUERIES
app.post('/api/new/character')
app.get('/api/characters')
app.put('/api/character/:username')
app.delete('/api/character')
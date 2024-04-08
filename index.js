require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('<h3>Hello World!</h3>')
})

app.get('/twitter', (req, res) => {
    res.send('<h4>cheravdotcom</h4>')
})

app.get('/login', (req, res) => {
    res.send('<h1>Cherav DOTNET Developer</h1>')
})

app.get('/loginnew', (req, res) => {
    res.send('<h1>Cherav1 DOTNET Developer</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Cherav aur Code</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
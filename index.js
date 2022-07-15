const express = require('express');
const app = express()


app.get('/test', (req, res) => {
    res.json({ foo: 'bar' })
})

app.listen(5500, () => {
    console.log('Server running on port 5500')
})
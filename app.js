const express = require('express')
const app = express()
const port = 3000

const data = [
    {
        id: 1,
        name: 'Aumkung',
        eat: 'water'
    },
    {
        id: 2,
        name: 'Aumkung2',
        eat: 'chicken'
    }
]

app.get('/get', (req, res) => res.send({
    text: 'First Method POST page',
    type: `application/json`,
    method: 'GET'
}))

app.post('/post', (reg, res) => res.send({
    text: 'First Method POST page',
    type: `application/json`,
    method: 'POST',
    data: data
}))

app.put('/put', (reg, res) => res.send({
    text: 'PUT Request Method'
}))

app.delete('/delete', (reg, res) => res.send({
    text: 'DELETE Request Method'
}))

app.get('/filter/:id', (reg, res) => res.send(
    data.filter( d => d.id === parseInt(reg.params.id) )
))

app.use('/view', express.static('public'))

app.listen(port, () => console.log(`Example Express port ${port}`))
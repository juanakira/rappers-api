const express = require('express')
const app = express()
const PORT = 8000;

const rappers = {
    '21 savage': {
        'age':29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, UK'
    },
    'chance the rapper':{
        'age':29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, IL'
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    response.json(rappers[rapperName] || rappers['unknown'] )
} )

app.listen(PORT , () => {
    console.log(`server's set up on port ${PORT}`)
})


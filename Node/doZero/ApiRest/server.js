import {fastify} from 'fastify'
import {databaseMemory} from './database-memory.js'

const server = fastify()

const database = new databaseMemory()

server.get('/videos', (request, reply) =>{
    database.create({
        title: "video 01",
        description : "Esse é o video 01",
        duration: 100,
    })
    console.log(database.list());
    return reply.status(201).send()
})

server.post('/videos', () =>{
    return 'hello word'
})

server.put('/videos/:id', () =>{
    return 'hello word'
})

server.delete('/', () =>{
    return 'hello word'
})






server.listen({
    port : 3333,
})
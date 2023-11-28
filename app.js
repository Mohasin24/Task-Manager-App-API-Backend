const express = require('express');
const app = express();
const tasks = require('./routes/tasks')    
const connectDB = require('./db/connectDB')
const notFound = require('./middleware/not-found')
require('dotenv').config()

// Port on which app is running
const port = 5000;

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)

// mongoDB connection
const start = async ()=>{

    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=> console.log(`Listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()
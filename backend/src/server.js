

const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express')

const routerNote = require('./routes/noteRoutes');
const connectDB = require('./config/db');
const rateLimiter = require('./middlewares/rateLimiter');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    })
);
app.use(express.json());
app.use(rateLimiter);


app.use('/api/notes', routerNote);


connectDB().then(()=> {
    app.listen(PORT, ()=> { 
        console.log(`Server is running on: ${PORT}`) 
    });
});

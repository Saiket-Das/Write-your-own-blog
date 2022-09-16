require('dotenv').config();

const express = require('express');
const cors = require('cors');
const colors = require("colors");
const connectDB = require('./confiq/database');


const port = process.env.PORT || 8000;
const app = express();


connectDB()
// moonlight_assignment
// yABzW6bhQjOZWeDd


// Middleware 
app.use(cors())
app.use(express.json());

const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')


app.use('/api/user', userRoutes);
app.use('/api/blog', blogRoutes);



app.get('/', (req, res) => {
    res.send("Moon Light is running!")
})

const server = app.listen(port,
    console.log(`Server running on PORT ${port}...`.yellow.bold)
);
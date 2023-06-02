const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const heroRouter = require('./routes/hero-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api',heroRouter);





const PORT = process.env.PORT || 5000;
const start = async () =>{
    try {
        app.listen(PORT,()=>console.log(`Server started on PORT: ${PORT}`));
        await mongoose.connect(process.env.DB_URL);
        console.log('-------------------------------------------------');
    } catch (error) {
        console.log(error);
    }
}

start();
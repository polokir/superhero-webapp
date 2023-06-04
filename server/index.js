const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const heroRouter = require('./routes/hero-routes');
const multer = require('multer');
const app = express();

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}));
app.use('/api',heroRouter);

app.use('/uploads',express.static('uploads'))

const storage = multer.diskStorage({
    destination:(_,__,call)=>{
        call(null,'uploads');
    },
    filename:(_,file,call)=>{
        call(null,file.originalname);
    },
});

const upload = multer({storage});

app.post('/api/upload',upload.single('image'),(req,res)=>{
    res.json({
        url: `/uploads/${req.file.originalname}`
    });
});



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
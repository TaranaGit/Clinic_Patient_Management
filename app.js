const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patient');
const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(express.json());
// app.use((req,res,next) =>{
//     console.log(req.path, req.method)
//     next()
// })
// Routes
app.use('/api/patient', patientRoutes);

app.use(express.static('public'));

// start server by connecting DB
const server = mongoose.connect('YOUR MONGODB CONNECTION STRING')
    .then(()=>{
        app.listen(port, ()=>{
            console.log("Connected to DBN & Server listening on port:", port);
        })
    })
    .catch((err)=>{
        console.log(err);
    })

    module.exports= server;
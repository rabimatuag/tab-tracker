const express = require('express');
const bodyParser = require('body-parser');
const morgan =require('morgan');
const cors = require('cors');
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors()); // allow any host to access
app.post('/register',(req,res)=>{
    res.send({
        message:`hello ${req.body.email} you are registered`
    });
});

app.listen(process.env.port||8081,()=>{
    console.log('application is running on port:');
});
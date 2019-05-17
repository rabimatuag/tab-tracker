const express = require('express');
const bodyParser = require('body-parser');
const morgan =require('morgan');
const cors = require('cors');
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors()); // allow any host to access
app.get('/',(req,res)=>{
    res.send({
        message:"hello world"
    });
});

app.listen(process.env.port||8081,()=>{
    console.log('application is running on port:');
});
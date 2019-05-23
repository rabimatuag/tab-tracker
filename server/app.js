const express = require('express');
const bodyParser = require('body-parser');
const morgan =require('morgan');
const cors = require('cors');
const app = express();
const config = require('./config/config');
app.use(morgan('combined'));
app.use(bodyParser.json());
const {sequelize}=require('./models');
app.use(cors()); // allow any host to access


const registerRouter = require('./router/registerRouter');


app.use('/register',registerRouter);

sequelize.sync()
.then(() => {
    
app.listen(process.env.port||8081,()=>{
    console.log('application is running on port:');
});
})

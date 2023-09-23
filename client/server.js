require('dotenv').config(); // Corrected line
console.log('PORT:', process.env.PORT);
const express = require("express");
const cors = require('cors');
const path = require('path');
const app = express();
const contactRoute=require("./route/contactRoute")
app.use(express.json());
app.use(cors());
app.use("/", contactRoute);



if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    });
}
const port = process.env.PORT || 6000;
app.listen(port,console.log('Server listening on port'));
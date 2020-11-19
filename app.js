const express = require('express');
const db = require('./config/database');
const flash = require('connect-flash');
const session = require('express-session')
const bodyparser = require('body-parser');
const path = require('path');
const PORT = 8080;


const app = express();

// -- this router file  path -->
const indexRoter = require('./routes/index');
//>>--------------------------------------------->

//-- view ingine and view file and fromworck engine  --> ejs 
// view engine setup
app.set('views' , path.join(__dirname , '/views'));
app.set('view engine' , 'ejs');
//>>------------------------------------------------------->

// -- body parser import to get information -->
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//>>------------------------------------------------------>


//-- this dir to get file js ,css, image -------------->
app.use(express.static(path.join(__dirname, 'public')));
//>>----------------------------------------------------------->

//-- this dir to save iamge from user to upload file -->
app.use(express.static(path.join(__dirname, 'upload')));
//>>------------------------------------------------------->

//--- ---->

//>>-------------------------->

//---- node model-------------->
app.use(express.static('node_modules'))
//>>------------------------------------>


//---- session -------------->
app.use(session({
  secret: 'lorem ipsum',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60000 * 15}
}))
//>>--------------------------------------->

// --- falsh to send alert -->
app.use(flash());
//>>-------------------------->


//-- this a path to read the direct -->
app.use('/' , indexRoter);
//>>---------------------------->


//--- this if the port pasy can cheng to secend localhost -->
app.PORT = process.env.PORT || 3000
//>>------------------------------------->

//--------this project worck the lisent and with message -->
app.listen(PORT, (error)=>{

  console.log(`port connect ${PORT}`);
  console.error(`the error port:${PORT}`,error);
  
});
//>>-------------------------------------------------->
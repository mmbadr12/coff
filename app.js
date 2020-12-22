// --TO RUN PROJECT => (npm run start)---->

/**
 * - sitting app with envermant libraly
 */

if(process.env.NODE_ENV !== 'production'){
 
  require('dotenv').config();

}
//--- heer what labary i used ---->
const createError = require('http-errors')
const express = require('express');
const db = require('./config/database');
const flash = require('connect-flash');
const session = require('express-session')
const logger = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');


const app = express();

// -- this router file  path -->
const indexRoter = require('./routes/index');
//>>--------------------------------------------->

//-- view ingine and view file and fromworck engine  --> ejs 
// view engine setup
app.set('views' , path.join(__dirname , '/views'));
app.set('view engine' , 'ejs');
//>>------------------------------------------------------->

// -- loger for sever
  app.use(logger('dev'));
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


//--  catch 404 and forward to error handler -->
app.use((req,res,next) => {  next(createError(404)) });


//-- error handler
app.use((err,req,res,next)=>{

// set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');

});


//--- this if the port pasy can cheng to secend localhost -->
const PORT = process.env.PORT || 3000
//--------this project worck the lisent and with message -->
app.listen(PORT, () => console.log(`port connect  http://localhost:${PORT}`));
//>>---------------------------->

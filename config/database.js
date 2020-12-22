//---- connect server mongoDB use mongoose ----->
/**
 * - require dotenv importing 
 */

require('dotenv').config();
const db = require('mongoose');

db.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(()=> console.log('database connact'))
.catch((error)=> console.error(error.message));
//>>----------------------------------------------->
//---- connect server mongoDB use mongoose ----->
const db = require('mongoose');

db.connect('mongodb://localhost:27017/data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(()=> console.log('database connact'))
.catch((error)=> console.error(error.message));
//>>----------------------------------------------->
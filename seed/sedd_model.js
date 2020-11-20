const db = require('../config/database');
const Schema = require('../models/firstModel');


const DataE =[

  new Schema({

    title : 'EXPRESS',
    description:'test the thusen time', 
    location:'oslo',
    date: Date.now(),
    image: 'image-1605835790767.jpg',
    price: 10
  }),
  new Schema({

    title : 'LINUX',
    description:'bad experenc ',
    location:'german',
    date: Date.now(),
    image: 'image-1605767739222.jpg',
    price:30
    

  }),
  new Schema({

    title : 'DOCKER',
    description:'use many system ',
    location:'usa',
    date: Date.now(),
    image: 'image-1605832192548.jpg',
    price:60
    

  }),

]


DataE.forEach((ev)=>{

 ev.save((error)=>{

    if(error){

        console.log(error.message)
    }

 })

})

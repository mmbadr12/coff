const db = require('../config/database');
const Schema = require('../models/firstModel');


const DataE =[

  new Schema({

    title : 'EXPRESS',
    description:'test the thusen time', 
    location:'oslo',
    date: Date.now(),
    image: 'https://picsum.photos/200/300/?blur=2',
    price: 10
  }),
  new Schema({

    title : 'LINUX',
    description:'bad experenc ',
    location:'german',
    date: Date.now(),
    image: 'https://picsum.photos/200/300?grayscale',
    price:30
    

  }),
  new Schema({

    title : 'DOCKER',
    description:'use many system ',
    location:'usa',
    date: Date.now(),
    image: 'https://picsum.photos/200/200',
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

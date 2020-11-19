const express = require('express');
const router = express.Router();
//const db = require('../config/database');
const Schema = require('../models/firstModel');
const { body, validationResult, check } = require('express-validator');
const valid = require('../middleware/expresssValidtor');
const upload = require('../uploadFile/image');



// --- this get to git all data and show first page ---->
router.get('/' , (req,res)=>{

    Schema.find({},(error,tow)=>{

        let eve = []
        let evesize = 3
        for(var i = 0 ; i < tow.length ; i+=evesize){

            eve.push(tow.slice(i,evesize + i));
        }
        res.render('index/index',
         {
           message: req.flash('info'), 
           eve:eve,
                  
         });
    });

});//->>------end GET -------------------------->




//----- this get form page ----------------------->

router.get('/create/add' ,(req,res)=>{

    res.render('add/index',{ errors: req.flash('errors')});
    //

});//>>-----------------end Get---------------------------------->



//--- this post to get the new information from user --->

router.post('/create/add' ,upload.single('image') ,valid, (req,res,next)=>{

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
   
          req.flash('errors', errors.array());
          res.redirect('/create/add');

  } else {

    let dee = new Schema({
   
      title:req.body.title,
      location:req.body.location,
      date:req.body.date,
      price:req.body.price,
      description:req.body.description,
      image:req.file.filename,

   });
  
   dee.save( (err)=> {
    if(!err) {
        console.log('event was added');
        req.flash('info', ' The event was created successfuly');
        res.redirect('/');
    } else { console.log(err); } 
})
   next()

  }

});//->>---------------end POST----------------------------------> 

 


//------ this to git one event from id ----------------->
router.get('/:id' , (req,res)=>{

    Schema.findOne({_id:req.params.id},(error,project)=>{

      res.render('show/index', {project:project})

    })
});//->>------------------- end GiT:id ----------------------------->







module.exports = router;








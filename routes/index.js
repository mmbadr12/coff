const express = require('express');
const router = express.Router();
//const db = require('../config/database');
const Schema = require('../models/firstModel');
const {validationResult} = require('express-validator');
const doit = require('../middleware/expresssValidtor');
const upload = require('../uploadFile/image');



// --- this get to git all data and show first page ---->
router.get('/' , (req,res)=>{

    Schema.find({},(error,events)=>{

        let eve = []
        let evesize = 3
        for(var i = 0 ; i < events.length ; i+=evesize){

            eve.push(events.slice(i,evesize + i));
        }
        res.render('index/index', {
           eve:eve,
           message: req.flash('info'), 
                  
        });
    });

});//->>------end GET -------------------------->




//----- this get form page ----------------------->

router.get('/create/add' ,(req,res)=>{

    res.render('add/index',{ errors: req.flash('errors')});
    //

});//>>-----------------end Get---------------------------------->



//--- this post to get the new information from user --->

router.post('/create/add' ,upload.single('image') , doit,(req,res)=>{

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
      console.log(errors.message);
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
    } else { console.log(err.message); } 
})
   
}


});//->>---------------end POST----------------------------------> 



//-- Get router sing up test-- ---->

/*router.get('/singup' , (req,res)=>{

    res.render('singUp/index');
  
  });*/
  
  //>>--------------------------------------->
  

 //-- Get router sing up test-- ---->

router.get('/about' , (req,res)=>{

    res.render('about/index');
  
  });
  
  //>>--------------------------------------->
  



//------ this to git one event from id ----------------->

router.get('/:id' , (req,res)=>{

    Schema.findOne({_id:req.params.id},(error,project)=>{

      res.render('show/index', {project:project})

    })
});//->>------------------- end GiT:id ----------------------------->






module.exports = router;








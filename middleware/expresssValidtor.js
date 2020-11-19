//--- this valid to post router ----------------------->

const { check,body } = require('express-validator');

//const imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : "";

    const doit = [
         
        check('description').isLength({min: 5}).withMessage('Description should be more than 5 char'),
        check('location').isLength({min: 3}).withMessage('Location should be more than 3 char'),
        check('title').isLength({min: 3}).withMessage('Title should be more than 3 char'),
        check('price').isLength({min: 1}).withMessage('Please enter the product price'),
       // check('image','You must select a image.').notEmpty(),
        check('date').isLength({min: 5}).withMessage('Date should valid Date'),
      
    ]
//>>------------------------------------------------------->


    module.exports = doit;
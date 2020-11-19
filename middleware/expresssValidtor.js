//--- this valid to post router ----------------------->

const { check } = require('express-validator');

    const valid = [
    
        check('description').isLength({min: 5}).withMessage('Description should be more than 5 char'),
        check('location').isLength({min: 3}).withMessage('Location should be more than 5 char'),
        check('title').isLength({min: 3}).withMessage('Title should be more than 5 char'),
        check('price').isLength({min: 1}).withMessage('Please enter the product price'),
        check('image').notEmpty().withMessage('You must select a image.'),
        check('date').isLength({min: 5}).withMessage('Date should valid Date'),
      
    ]
//>>------------------------------------------------------->


    module.exports = valid;
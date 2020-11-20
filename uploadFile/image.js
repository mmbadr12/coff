const multer = require('multer');



//-- uplode image labary-----------------------> 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'upload/')
    
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.jpg')
   
  },
   
})
const upload = multer({ storage: storage})

//->>---------- end labary to UPLOAD image ---------------->




module.exports = upload;
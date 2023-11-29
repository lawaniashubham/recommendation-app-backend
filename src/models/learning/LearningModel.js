const mongoose = require("mongoose")

// creating schema
const LearningSchema = new mongoose.Schema({
      // filter may have values - (python, java, htmlcss, ----)  
      filter: {
        type: String,
        required: true,
      },
      recomm_name: {
        type: String,
        required: true,
      },
      recomm_url: {
        type: String,
        required: true,
      },
      recomm_desc :{
        type : String,
        required : true,
      }
  });
  
var LearningModel = mongoose.model('LearningModel', LearningSchema);

module.exports = LearningModel

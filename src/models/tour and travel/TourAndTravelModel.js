const mongoose = require("mongoose")

// creating schema
const TourAndTravelSchema = new mongoose.Schema({
      // filter may have values - (jaipur, udaipur, ajmer----)  
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
  
var TourAndTravelModel = mongoose.model('TourAndTravelModel', TourAndTravelSchema);

module.exports = TourAndTravelModel

require('dotenv').config();

const server = require("express")
const mongoose = require("mongoose")
const LearningModel = require("./src/models/learning/LearningModel")
const TourAndTravelModel = require("./src/models/tour and travel/TourAndTravelModel")
const cors = require("cors")

app = server()

const port = process.env.PORT;
const databaseURL = process.env.DATABASE_URL;


// ---------- Allow requests only from 'http://localhost:3000' ---> as our UI is hosted on local host : 3000
// without using cors ----> no external 
// const corsOptions = {
//     origin: 'http://localhost:3000',
//   };

// app.use(cors(corsOptions));

// ----------- this app is now can be accesible by all endpoints
app.use(cors());
  


app.get("/", (req,res) =>{
  res.send("Hello, this is recommendation application")
})


app.get("/learning_recommendation", async(req,res) => {
    try {
        const LearningModelData = await LearningModel.find(); // Retrieve all users
        res.json(LearningModelData);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from "learnings" collection');
      }
})

app.get("/tourandtravel_recommendation", async(req,res) => {
  try {
      const TourAndTravelModelData = await TourAndTravelModel.find(); // Retrieve all users
      res.json(TourAndTravelModelData);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data from "learnings" collection');
    }
})

// Connect to MongoDB
const mongoURI = databaseURL
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB: ' + err);
  });


app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
})

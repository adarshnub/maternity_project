const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000
const app = express();
var cors = require('cors');
const User = require("./models/User");


app.use(cors());
app.use(express.json())

// app.use('/api/cars/' , require('./routes/carsRoute'))
// app.use('http://localhost:5000/api/users/', require('./routes/userRoute'))
const  userRoute = require("./routes/usersRoute");
const path = require('path');

app.use("/users", userRoute);  


mongoose
  .connect(
    "mongodb+srv://adarsh123:adarsh123@cluster0.yjyxjor.mongodb.net/M-database?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }
  )
  .then(() => console.log("connected to DB"))
  .catch((err) => {
    console.error(err);
  });

  // app.get('/', (req, res)=>{
  //   res.send('HELLO_WORLD')
  // })

 

app.listen(5000, () => {
  console.log("on PORT 5000");
});



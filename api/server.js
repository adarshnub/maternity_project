const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000
const app = express();
var cors = require('cors');
const User = require("./models/User");


app.use(cors());
app.use(express.json())


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
  .then(() => console.log("connected to Database"))
  .catch((err) => {
    console.error(err);
  });


app.listen(port, () => {
  console.log("running on PORT 5000");
});



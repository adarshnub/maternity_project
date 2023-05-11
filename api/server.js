const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json())

// app.use('/api/cars/' , require('./routes/carsRoute'))

mongoose
  .connect(
    "mongodb+srv://adarsh123:adarsh123@cluster0.yjyxjor.mongodb.net/adarsh123?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to DB"))
  .catch((err) => {
    console.error(err);
  });

  app.get('/', (req, res)=>{
    res.send('HELLO_WORLD')
  })

app.listen(5000, () => {
  console.log("on PORT 5000");
});

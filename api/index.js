import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.route.js';
//Mongo Db Connection
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

//To run server
const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

//To test api working or not
//req we send in response we recieve
app.use('/api/user', router)
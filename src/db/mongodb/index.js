import mongoose from 'mongoose';
import { MONGO_URI } from '../config';

export const connectMongoDB = () => {
  mongoose.Promise = global.Promise;
  mongoose.set('strictQuery', false);
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connected mongodb'))
    .catch((err) => {
      setTimeout(connectMongoDB, 5000);
      console.error(err);
    });
};



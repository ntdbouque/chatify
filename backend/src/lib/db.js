import mongoose from 'mongoose';
import {ENV} from './env.js';

export const connectDB = async () => {
    try{
        await mongoose.connect(ENV.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
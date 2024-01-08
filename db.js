// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // if needed
        });
        console.log('🔥 Connected to MongoDB');
    } catch (error) {
        console.error('💩 MongoDB connection error:', error);
    }
};

export default connectDB;
// db.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 20
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,  
    },
    picturePath: {
        type: String,
        default: "",
    },
    connections: {
        type: Array,
        default: [],
    },
    sex: {
        type: String,
        enum: ['male', 'female', 'not important'],
        default: 'not important'
    },
    worksAt: {
        type: String,
        default: ""
    },
    phone: {
        type: Number,
        default: null
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
    },
    { timestamps: true }
);

export default mongoose.model('User', userSchema);

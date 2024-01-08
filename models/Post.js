import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    picturePath: {
        type: String,
    },
    userPicturePath: {
        type: String,
    },
    postType: {
        type: String,
        enum: ['general', 'help', 'opportunity'],
        default: 'general'
    },
    likes: {
        type: Map,
        of: Boolean
    },
    comments: {
        type: Array,
        default: []
    }
}, { timestamps: true } );

export default mongoose.model("Post", postSchema);


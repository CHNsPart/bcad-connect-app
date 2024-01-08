import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import upload from '../storage.js';
import { 
    createPost,
    getFeedPosts,
    getUserPosts,
    likePost,
} from '../controllers/posts.js';

const router = express.Router();

// Read
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// Update
router.patch("/:id/like", verifyToken, likePost);

// Post
router.post("/", verifyToken, upload.single("picture"), createPost);



export default router;
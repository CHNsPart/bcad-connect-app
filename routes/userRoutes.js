import express from 'express';
import {
    getUser,
    getUserConnections,
    addRemoveConnections,
    userUpdate,
} from '../controllers/users.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import upload from '../storage.js';

const router = express.Router();

// Read
router.get("/:id", verifyToken, getUser);
router.get("/:id/connections", verifyToken, getUserConnections);

// Update
router.patch("/:id/:connections", verifyToken, addRemoveConnections);
router.patch("/:id", verifyToken, upload.single("picture"), userUpdate);

export default router;
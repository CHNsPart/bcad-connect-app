// routes/authRoutes.js
import express from 'express';
import upload from '../storage.js';
import { registerController, loginController } from '../controllers/auth.js';

const router = express.Router();

// POST --->
router.post('/register', upload.single("picture"), registerController);

router.post('/login', loginController);

// GET --->
router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});



export default router;

// server.js
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db.js';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import dotenv from 'dotenv';
import cors from 'cors'
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Middleware
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy:"cross-origin" }));
app.use(mongoSanitize());
// app.use(passport.initialize());
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// Connect to MongoDB
connectDB();

// Routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';

// Public Route
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`✨ Server is running on l̲o̲c̲a̲l̲h̲o̲s̲t̲:${PORT}`);
});
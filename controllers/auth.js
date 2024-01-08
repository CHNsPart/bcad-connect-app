import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


// Register User
export const registerController = async(req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            connections,
            sex,
            worksAt,
            phone,
            location,
            occupation,
            viewedProfile,
            impressions
        } = req.body;

        if (!password || typeof password !== 'string') {
            return res.status(500).json({ error: 'password must have a letter' });
        }

        if (password.length < 6) {
            return res.status(500).json({ error: 'must have 6 character (min)' });
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            connections,
            sex,
            worksAt,
            phone,
            location,
            occupation,
            viewedProfile: 0,
            impressions: 0
        });
        
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    
    } catch (err) {
        // if (err.code === 11000) {
        //     return res.status(500).json({ error: err.message });
        // }
        res.status(500).json({ error: err.message })
    }
}

// Logging in User
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if(!user) return res.status(400).json({ msg: "User does not exist!" });

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials!" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
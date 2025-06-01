const User = require('../models/userModel');
const express = require('express');
const router = express.Router();

// Firebase Auth can be used here if you prefer it
router.post('/register', async (req, res) => {
  // handle user registration
  try {
        const { personal_id, name, email, password, confirmPassword, address, phone_number } = req.body;

        if (!personal_id || !name || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        if (name.length < 3) return res.status(400).json({ message: "Your name must be at least 3 letters long" });

        if (!isMatch(password, confirmPassword)) return res.status(400).json({ message: "Password did not match" });

        if (!validateEmail(email)) return res.status(400).json({ message: "Invalid emails" });

        if (!validatePassword(password)) {
            return res.status(400).json({
                message: "Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters"
            });
        }

        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "This email is already registered" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new Users({
            personal_id,
            name,
            email,
            password: hashedPassword,
            address,
            phone_number
        });

        await newUser.save();

        res.status(200).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
  // handle login, return JWT
  try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email })

        if (!email || !password) return res.status(400).json({ message: "Please fill in all fields" })

        if (!user) return res.status(400).json({ message: "No user was found with the associated email" })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" })

        const refresh_token = createRefreshToken({ id: user._id })

        const expiry = 24 * 60 * 60 * 1000 // 1 day

        res.cookie('refreshtoken', refresh_token, {
            httpOnly: true,
            path: '/api/user/refresh_token',
            maxAge: expiry,
            expires: new Date(Date.now() + expiry)
        })

        res.json({
            message: "Sign In successfully!",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.post('/logout', (req, res) => {
  // handle logout
});

module.exports = router;

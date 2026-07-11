const User = require('../models/User')
const express = require("express")
const router = express.Router()

router.post('/add-user', async (req, res) => {
    try {
        const { companyId, bio, userImage, name, phone, role, email } = req.body;
        const user = new User({
            name, phone, role, email, companyId, bio, userImage
        });
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch (error) {
        console.error(error);

        // Mongoose Validation Error
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        // Duplicate Key Error
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "User already exists."
            });
        }

        // Invalid ObjectId
        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid ID."
            });
        }

        // Unknown Error
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
})
router.post('/login', async (req, res) => {
    const { email, password, companyId } = req.body;
    try {
        const isUserExists = await User.findOne({ email: email })
        if (!isUserExists) {
            return res.status(401).json({ message: "please enter correct email id" })
        }
        if (isUserExists.companyId !== companyId) {
            return res.status(401).json({ message: "company doesn't match, please select correct company" })

        }
        if (isUserExists.password !== password) {
            return res.status(401).json({ message: "password incorect" })
        }
        return res.status(200).json(isUserExists)
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
})
module.exports = router
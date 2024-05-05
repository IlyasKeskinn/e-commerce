const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { User, validateUser } = require("../models/user");

exports.postRegister = async (req, res) => {
    const { error } = validateUser(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const { userName, email, password, userRole, avatar } = req.body;

    try {
        const existingUser = await User.findOne({ "email": email });

        if (existingUser) {
            return res.status(400).json({ error: "Email address is already registed." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = await new User({
            userName: userName,
            email: email,
            password: hashedPassword,
            userRole: userRole,
            avatar: avatar
        })
        const token = newUser.createAuthToken();

        newUser.save();
        res.header("x-auth-token", token).status(200).json(newUser);
    } catch (error) {
    }
}

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ "email": email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password!" })
        }
        const isValidPassword = await bcrypt.compare(password, user.password);


        if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid email or password!" })
        }

        const token = user.createAuthToken();

        res.setHeader("Access-Control-Expose-Headers", "x-auth-token");

        res.status(201).header({ "x-auth-token": token }).json(
            { _id : user._id, email: user.email, userName: user.userName, role: user.userRole }
        )

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}
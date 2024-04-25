const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { User, validateUser } = require("../models/user");

exports.postRegister = async (req, res) => {
    const { error } = validateUser(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const { userName, email, password, userRole, avatar } = req.body;

    console.log(password);
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

        newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
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
            return res.status(401).json({ error: "Invalid email or password1" })
        }

        const token = user.createAuthToken();


        res.status(200).header({ "x-auth-token": token }).json(
            { msg: "login succesful" }
        )


} catch (error) {
    console.log(error);
}
}